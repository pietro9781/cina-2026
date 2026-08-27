/* Cina 2026 — guide dentro i siti.

   Le COORDINATE di ogni punto vengono da OpenStreetMap (interrogato il
   27/08/2026) e sono convertite in GCJ-02 come tutto il resto del continente:
   quei punti esistono e stanno lì.

   I TESTI no: sono scritti a memoria. Sui fatti grossi reggono, ma un numero
   preciso — una data, un peso, un'età — può essere sbagliato, e non c'è modo
   di accorgersene da dentro. Dove una cosa è leggenda e non storia, sta
   scritto nel testo.

   Chiave = il nome della tappa in index.html, identico. */

export const GUIDE = {
  "Città Proibita": {
    durata: "3–4 ore",
    intro:
      "Un chilometro esatto di asse, da sud a nord, a senso unico. Ma fra cortili laterali e gallerie ne cammini tre o quattro. Le tre grandi sale stanno allineate su un'unica piattaforma di marmo: quella è la Corte Esterna, dove l'impero si mostrava. Oltre la Porta della Purezza Celeste comincia la Corte Interna, dove l'impero viveva. Il salto fra le due è la cosa che vale la pena sentire.",
    punti: [
      {
        n: "Porta del Meridiano",
        zh: "午门",
        ll: [39.913521, 116.397242],
        d: "L'ingresso, e l'unico. Cinque aperture: quella centrale era dell'imperatore e basta, con due eccezioni in tutta la dinastia — l'imperatrice il giorno delle nozze, e i primi tre classificati dell'esame imperiale, una volta sola, in uscita. Guarda la pianta a U: le due ali che vengono avanti servivano a schiacciarti prima ancora di entrare. Da qui si annunciava il calendario dell'anno nuovo."
      },
      {
        n: "Porta dell'Armonia Suprema",
        zh: "太和门",
        ll: [39.915369, 116.39713],
        d: "I due leoni di bronzo sono i più grandi qui dentro: il maschio con la zampa sulla sfera, la femmina con il cucciolo sotto. Sotto i Qing l'imperatore teneva udienza proprio qui, all'aperto, prima di ritirarsi nella sala dietro. Il cortile che hai appena attraversato è pensato per contenere ventimila persone in ginocchio."
      },
      {
        n: "Sala dell'Armonia Suprema",
        zh: "太和殿",
        ll: [39.917297, 116.397056],
        d: "La più grande costruzione in legno della Cina, e il motivo per cui esiste tutto il resto. La si usava tre volte l'anno: incoronazione, capodanno, compleanno dell'imperatore. Conta gli animali sullo spigolo del tetto — sono dieci. Ovunque altrove in Cina il massimo consentito è nove: il decimo esiste solo su questo tetto. La rampa di marmo scolpita davanti non si calpestava, ci passava sopra la portantina."
      },
      {
        n: "Sala dell'Armonia Centrale",
        zh: "中和殿",
        ll: [39.917877, 116.397033],
        d: "Piccola, quadrata, schiacciata fra le due grandi. Era l'anticamera: l'imperatore si fermava qui a farsi vedere dai funzionari prima di entrare in scena. Una volta l'anno ci ispezionava semi e aratro prima del rito della prima aratura — l'imperatore della Cina apriva ufficialmente la stagione agricola."
      },
      {
        n: "Sala dell'Armonia Preservata",
        zh: "保和殿",
        ll: [39.918406, 116.397012],
        d: "Banchetti di capodanno, e in epoca tarda l'esame di palazzo: l'ultimo scalino del concorso imperiale, con l'imperatore in persona a fare le domande. Ma la cosa da vedere sta dietro: una lastra unica di marmo scolpita a draghi, oltre duecento tonnellate. Fu trascinata da una cava a decine di chilometri, d'inverno, scavando pozzi lungo tutta la strada per bagnarla e farla ghiacciare. Il ghiaccio era il nastro trasportatore."
      },
      {
        n: "Muro dei Nove Draghi",
        zh: "九龙壁",
        ll: [39.918504, 116.400432],
        d: "Deviazione di due minuti verso est, nella zona dei tesori. Nove draghi in piastrelle smaltate, Settecento. Si racconta che una piastrella si ruppe durante il montaggio e un artigiano la rifece in legno dipinto per non farsi decapitare: sarebbe la pancia del terzo drago da sinistra, e il colore non tornerebbe. È leggenda, non storia — ma vale la pena guardare e decidere da solo."
      },
      {
        n: "Porta della Purezza Celeste",
        zh: "乾清门",
        ll: [39.919235, 116.396947],
        d: "Qui finisce la Corte Esterna e comincia quella Interna. Da questa soglia in poi non era più impero, era casa: passavano la famiglia, le concubine e gli eunuchi. Funzionari mai. Fermati un secondo sulla soglia: da una parte lo spazio è enorme e vuoto, dall'altra si stringe subito. È voluto."
      },
      {
        n: "Palazzo della Purezza Celeste",
        zh: "乾清宫",
        ll: [39.920148, 116.396908],
        d: "Camera da letto dell'imperatore per tutti i Ming e i primi Qing. Sopra il trono c'è una targa con quattro caratteri, 正大光明, «retto e luminoso». Dietro quella targa l'imperatore Yongzheng nascondeva il nome del successore, scritto e sigillato, da aprire solo alla sua morte: aveva visto la lotta fra i propri fratelli e preferì che nessuno sapesse in anticipo chi sarebbe stato."
      },
      {
        n: "Sala dell'Unione",
        zh: "交泰殿",
        ll: [39.920484, 116.396888],
        d: "Qui stanno i venticinque sigilli imperiali, uno per ogni tipo di atto: il sigillo era la firma dell'impero. E ci sono due orologi, una clessidra ad acqua e un carillon meccanico, che per un paio di secoli hanno tenuto l'ora della Cina uno accanto all'altro — il vecchio sistema e quello arrivato dai gesuiti, nella stessa stanza."
      },
      {
        n: "Palazzo della Tranquillità Terrena",
        zh: "坤宁宫",
        ll: [39.920773, 116.396884],
        d: "Sotto i Ming era il palazzo dell'imperatrice. I Qing, che venivano dalla Manciuria e non rinunciarono alle proprie usanze, ne fecero due cose insieme: una sala per i sacrifici sciamanici — con i pentoloni per bollire i maiali ancora al loro posto — e la camera nuziale. La stanza a est è tutta rossa: lì si sono sposati gli ultimi imperatori, Puyi compreso."
      },
      {
        n: "Giardino Imperiale",
        zh: "御花园",
        ll: [39.921539, 116.396853],
        d: "Dodicimila metri quadri, e finalmente qualcosa che non è simmetrico. Cipressi di quattro secoli con i rami legati insieme, padiglioni fuori asse, e una montagnetta di rocce con un belvedere in cima. Dopo un chilometro di pietra grigia e cortili vuoti fa un effetto sproporzionato: è esattamente quello per cui è stato costruito."
      },
      {
        n: "Pozzo della Concubina Zhen",
        zh: "珍妃井",
        ll: [39.921931, 116.400042],
        d: "Un pozzo stretto in un angolo, con sopra una copertura di pietra. Nel 1900, mentre la corte scappava davanti all'alleanza delle otto nazioni, la concubina preferita di Guangxu ci fu buttata dentro per ordine di Cixi: aveva detto che l'imperatore doveva restare a Pechino invece di fuggire. Aveva poco più di vent'anni. La cosa che colpisce è quanto è stretto."
      },
      {
        n: "Porta della Potenza Divina",
        zh: "神武门",
        ll: [39.922326, 116.396817],
        d: "L'uscita nord, e la fine. Sopra c'è la targa del Museo del Palazzo, 故宫博物院. Esci e ti trovi davanti Jingshan: quindici minuti di salita e vedi dall'alto, allineato, tutto quello che hai appena percorso a naso in su. È la tua prossima tappa e non è un caso — è l'unico posto da cui la Città Proibita si capisce."
      }
    ],
    coda:
      "Le gallerie laterali (tesori a est, orologi a ovest) stanno dentro lo stesso ingresso ma possono avere un biglietto a parte: controlla all'entrata. Sono le uniche parti coperte, quindi sono anche il piano B se piove."
  }
};
