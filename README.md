# Cina 2026

Itinerario giorno per giorno, 6–19 settembre 2026, Pechino → Hong Kong.
App web installabile sul telefono, che funziona anche senza rete.

**In linea:** https://pietro9781.github.io/cina-2026/

Aprila una volta col wi-fi prima di partire: al primo avvio si salva tutto
in memoria e da lì in poi va anche in aereo.

## Le mappe

I riquadri di mappa vengono da **Amap (高德地图)**, non da Google né da
OpenStreetMap: è l'unico dei tre che si vede dalla Cina continentale senza VPN.
Le etichette si possono mettere in inglese o in cinese col pulsante sotto la
mappa — il cinese serve per farla vedere a un tassista.

In **Logistica** c'è il tasto **«Scarica tutte le mappe»**: si porta giù tutte
e otto le città a tre livelli di zoom, in inglese e in cinese — circa 1700
riquadri, 25 MB, un minuto di wi-fi. Fatto quello, le mappe ci sono offline
anche per i giorni mai aperti. Senza farlo, restano in memoria solo i riquadri
già guardati.

Senza rete e senza riquadri in memoria restano comunque il tracciato, i numeri
delle tappe e la barra di scala: la mappa non diventa mai un rettangolo vuoto.

## Le altre due cose che l'app sa fare

**Quanto c'è fino alla tappa dopo.** Sotto ogni scheda: «650 m · 11 min a
piedi». Oltre i 2,5 km il tempo a piedi sparisce e compare «metro o taxi» —
l'assenza del tempo *è* il segnale che lì serve un mezzo. I minuti tengono
conto che le strade non sono in linea d'aria (si moltiplica per 1,3 e si
cammina a 4,5 km/h), quindi sono una stima, non un cronometro.

**«Adesso».** Se il giorno mostrato è davvero oggi, la tappa in corso è
evidenziata in rosso e il suo segnaposto è acceso sulla mappa. Prima che la
giornata cominci indica la prima tappa; a notte fonda resta l'ultima; le tappe
opzionali (quelle senza orario) non diventano mai «adesso». Sfogliando gli
altri giorni non compare niente, perché sarebbe un'informazione falsa.

## Le coordinate: due sistemi, non uno

Questa è la cosa da non dimenticare se un giorno si toccano i dati.

Le coordinate nel file **non sono tutte nello stesso sistema di riferimento**:

| dove | sistema | quante |
|---|---|---|
| Cina continentale | **GCJ-02** (il sistema cinese, quello di Amap) | 42 |
| Hong Kong | **WGS-84** (quello di Google e del GPS) | 6 |

Fra i due corrono fra i 350 e i 600 metri. Verificato il 26 agosto 2026
confrontando le coordinate salvate con i dati OpenStreetMap: tutti e 8 i punti
continentali controllati combaciano con GCJ-02, tutti e 3 quelli di Hong Kong
con WGS-84 (il Grande Buddha a 4 metri).

`geo.js` converte al volo, quindi:

- i riquadri Amap e i segnaposto sono allineati in tutte e due le zone;
- il pulsante **Amap** manda le coordinate cinesi;
- il pulsante **Google** manda quelle internazionali;
- «Copia coord.» copia le cinesi (GCJ-02), da incollare in Amap, WeChat o Didi.

Prima di questa modifica il pulsante Google era sbagliato di mezzo chilometro
su tutte le tappe del continente, e il pulsante Amap su quelle di Hong Kong.

**Se si aggiunge una tappa:** prendere la coordinata dalla stessa fonte del
resto della zona — da una mappa cinese per il continente, da Google per Hong
Kong — e non convertirla a mano. Ci pensa `geo.js`.

Una coordinata è stata aggiunta il 26/08/2026 e vale la pena ricontrollarla:
**Yuanjiajie** (14 settembre), presa da OpenStreetMap sul punto del 天下第一桥,
la base visitatori. Cade a 3,1 km dall'ascensore Bailong e a 4,2 km dal monte
Tianzi, quindi è nel posto giusto, ma non è una coordinata scelta da te.

## Come è fatto

| file | cosa fa |
|---|---|
| `index.html` | tutta l'app: dati dell'itinerario, stili, interfaccia |
| `geo.js` | conversioni fra sistemi, divisione in riquadri, distanze |
| `sw.js` | funzionamento offline e memoria dei riquadri di mappa |
| `leaflet.js` / `leaflet.css` | Leaflet 1.9.4, copiato qui e non preso da un CDN (un CDN offline non serve, e in Cina spesso non risponde) |

Le giornate con un trasferimento lungo hanno **due mappe**, non una: l'11
settembre si è a Xi'an la mattina e a Chengdu la sera, e un riquadro solo
mostrerebbe due puntini a 600 km di distanza. Il taglio è automatico: si divide
dove due tappe consecutive distano più di 60 km.

## Modifiche

Basta cambiare il file e pubblicare: **non c'è nessun numero di versione da
alzare.** A ogni avvio il service worker riscarica `index.html`, `geo.js` e
`guida.js`, li confronta con quelli che ha appena servito e, se sono cambiati,
li sostituisce e avvisa la pagina. Se l'app è appena stata aperta e non è stata
ancora toccata si ricarica da sola; se ci si sta leggendo dentro compare
«Nuova versione · tocca per aggiornare» e si aggiorna quando vuoi tu.
Chi lascia l'app aperta in Home la fa ricontrollare rientrando in primo piano,
non più di una volta ogni mezz'ora.

Leaflet e le icone non si ricontrollano: non cambiano mai e riscaricare 144 KB
a ogni avvio sarebbe uno spreco. Se un giorno cambiano, si aggiorna la lista
`ASSETS` in `sw.js` — che cambia il file del service worker e fa ripartire il
precaricamento da capo.

`CACHE` serve ancora solo a una cosa: alzarlo butta via tutto e ricomincia da
zero. Non serve per le modifiche normali.

**Il tranello che è costato tempo:** in `sw.js` le promesse di `waitUntil` e
`respondWith` vanno create **sincrone** dentro il gestore dell'evento. Se si
chiama `e.waitUntil()` dopo un `await`, l'evento non è più vivo e la chiamata
fallisce in silenzio: il rinfresco non parte, la cache resta ferma alla versione
vecchia e non c'è nessun errore da nessuna parte.

## Verifiche

```bash
node --test test/geo.test.mjs     # 43 controlli: conversioni, riquadri, distanze a piedi, orologio
node tools/frames-check.mjs       # come si dividono i 14 giorni, e le tappe senza coordinate
node tools/update-check.mjs       # che l'app si aggiorni da sola (usa /tmp/index.{A,B,C}.html)
```

Gli script in `tools/` che usano Playwright cercano il browser nel
`node_modules` di un altro progetto sulla macchina di Pietro: servivano a
controllare il risultato a schermo e non sono necessari per usare l'app.
