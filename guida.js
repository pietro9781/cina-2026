/* Cina 2026 — guide dentro i siti.

   COORDINATE: da OpenStreetMap (interrogato il 27/08/2026), convertite in
   GCJ-02 come tutto il resto del continente. Quei punti esistono e stanno lì.

   FOTO: da Wikimedia Commons, tutte con licenza libera, autore e licenza
   indicati sotto ogni immagine. Sono scaricate dentro il repo e non caricate
   da remoto: Wikimedia è bloccata in Cina continentale, quindi un collegamento
   esterno non si vedrebbe proprio dove serve.

   TESTI: scritti a memoria. Sui fatti grossi reggono; su una data o un numero
   preciso può esserci un errore, e non c'è modo di accorgersene da dentro.
   Dove una cosa è leggenda e non storia, sta scritto nel testo.
   (Le misure della lastra di marmo al punto 5 vengono dal cartello del museo,
   fotografato su Commons: quelle sono verificate.)

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
        foto: { f: "foto/fc-01.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Meridian_Gate_in_snow_(20220213153145).jpg" },
        d: "L'unico ingresso, e il più teatrale: pianta a U, con due ali che vengono avanti a stringerti mentre entri. Cinque aperture. Quella centrale era dell'imperatore e basta, con due eccezioni in tutta la dinastia: l'imperatrice il giorno delle nozze, e i primi tre classificati dell'esame imperiale, una volta sola, in uscita. Le due laterali erano dei principi, le due esterne dei funzionari — che entravano divisi, i civili a est e i militari a ovest. Guarda in cima: i cinque padiglioni si chiamano «i cinque fenici».",
        curiosita: "Da qui l'imperatore annunciava il calendario del nuovo anno: chi controllava il tempo controllava la semina, e quindi il paese. Sempre da qui passavano le cerimonie di presentazione dei prigionieri di guerra. Sotto i Ming era anche il luogo dove i funzionari caduti in disgrazia venivano bastonati in pubblico — una punizione chiamata tingzhang, a cui non tutti sopravvissero."
      },
      {
        n: "Porta dell'Armonia Suprema",
        zh: "太和门",
        ll: [39.915369, 116.39713],
        foto: { f: "foto/fc-02.jpg", autore: "Francesco Bini", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Città_proibita,_piazzale_shi_ji_e_padiglione_dell'armonia_suprema_(taihemen)_01.jpg" },
        d: "Passato il Meridiano ti trovi in un cortile enorme, tagliato dal Fiume delle Acque d'Oro con cinque ponti di marmo. La porta in fondo è la più grande del complesso. I due leoni di bronzo sono i più grandi qui dentro: a est il maschio, con la zampa su una sfera — il mondo; a ovest la femmina, con la zampa su un cucciolo — la discendenza. È una coppia che ritroverai davanti a mezza Cina, sempre in quest'ordine.",
        curiosita: "Sotto i Qing l'imperatore teneva udienza qui, all'aperto davanti alla porta invece che dentro la sala: la chiamavano «udienza alla porta». Nel 1888 la porta bruciò del tutto a poche settimane dalle nozze di Guangxu, che doveva passarci sotto. Non c'era tempo per ricostruirla in muratura, e ne fu montata una copia in legno e stoffa così ben fatta che quasi nessuno se ne accorse."
      },
      {
        n: "Sala dell'Armonia Suprema",
        zh: "太和殿",
        ll: [39.917297, 116.397056],
        foto: { f: "foto/fc-03.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Hall_of_Supreme_Harmony_and_Mid_L-R_gates_(20241127120000).jpg" },
        d: "La più grande costruzione in legno della Cina, e il centro esatto dell'impero. Poggia su una piattaforma di marmo a tre livelli, e si usava tre volte l'anno: incoronazione, capodanno, compleanno dell'imperatore. Dentro, il trono del drago circondato da colonne dorate. Fuori, conta le figurine sullo spigolo del tetto: sono dieci. Ovunque altrove in Cina il massimo consentito è nove — il decimo esiste solo su questo tetto, e da nessun'altra parte.",
        curiosita: "Il numero di figurine misurava il rango dell'edificio, come i gradi su una divisa: nove per i più alti, poi sette, cinque, tre scendendo. Metterne dieci qui significava dire «questa non è una categoria, è l'eccezione». Sulla piattaforma vedrai anche grandi vasche di bronzo: erano gli estintori, e d'inverno ci accendevano un fuoco sotto per impedire all'acqua di ghiacciare."
      },
      {
        n: "Sala dell'Armonia Centrale",
        zh: "中和殿",
        ll: [39.917877, 116.397033],
        foto: { f: "foto/fc-04.jpg", autore: "Tianxiaozhang", licenza: "Public domain", fonte: "https://commons.wikimedia.org/wiki/File:Zhonghedian_Interior.jpg" },
        d: "Piccola e quadrata, con il tetto a piramide e una sfera dorata in cima, schiacciata fra le due sale grandi. Era l'anticamera: l'imperatore si fermava qui a farsi riverire dai funzionari prima di entrare in scena nella sala davanti. Dentro un trono più modesto e due portantine cerimoniali.",
        curiosita: "Una volta l'anno, prima del rito della prima aratura, l'imperatore ispezionava qui semi e aratro. La Cina era un impero agricolo e il sovrano era formalmente il primo contadino: apriva la stagione tracciando di persona un solco in un campo cerimoniale. Per il resto dell'anno questa stanza era poco più di un salottino d'attesa."
      },
      {
        n: "Sala dell'Armonia Preservata",
        zh: "保和殿",
        ll: [39.918406, 116.397012],
        foto: { f: "foto/fc-05.jpg", autore: "Jorge Láscar from Australia", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Lascar_The_Outer_Court_-_Forbidden_City_(4497568255).jpg" },
        d: "L'ultima delle tre grandi sale. Banchetti di capodanno per i principi mongoli, e in epoca tarda l'esame di palazzo: l'ultimissimo gradino del concorso imperiale, quello con l'imperatore in persona a fare le domande. Ma la cosa da vedere sta dietro, scendendo verso nord.",
        curiosita: "La rampa dietro la sala è una lastra unica di marmo: 16,75 metri per 3,07, spessa 1,7, oltre 200 tonnellate. Fu cavata a Dashiwo, nel distretto di Fangshan a sud-ovest di Pechino, e trascinata fin qui d'inverno bagnando la strada per farla ghiacciare — il ghiaccio era il nastro trasportatore. I draghi che vedi non sono gli originali Ming: furono raschiati via e riscolpiti nel 1761, sotto Qianlong."
      },
      {
        n: "Muro dei Nove Draghi",
        zh: "九龙壁",
        ll: [39.918504, 116.400432],
        foto: { f: "foto/fc-06.jpg", autore: "Jakub Hałun", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:20090528_Beijing_Nine_Dragon_Wall_7999.jpg" },
        d: "Due minuti di deviazione verso est, all'ingresso della zona dei tesori. Un muro di piastrelle smaltate con nove draghi che si contorcono sopra le onde. Nove e cinque sono i numeri imperiali: nove draghi, e ogni drago ha cinque artigli. I colori sono ottenuti a fuoco nella ceramica, non dipinti sopra, ed è per questo che dopo due secoli e mezzo sono ancora così.",
        curiosita: "Si racconta che durante il montaggio una piastrella si ruppe e che un artigiano la rifece in legno dipinto per non farsi decapitare: sarebbe la pancia del terzo drago da sinistra, e chi la indica sostiene che il colore non torni. È leggenda e non storia documentata — ma è il tipo di dettaglio che vale la pena andare a cercare da soli."
      },
      {
        n: "Porta della Purezza Celeste",
        zh: "乾清门",
        ll: [39.919235, 116.396947],
        foto: { f: "foto/fc-07.jpg", autore: "そらみみ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Gate_of_Heavenly_Purity_20160826.jpg" },
        d: "Qui finisce la Corte Esterna e comincia quella Interna. Da questa soglia in poi non era più impero, era casa: passavano la famiglia, le concubine e gli eunuchi, i funzionari mai. Fermati un attimo sulla soglia e guarda avanti e indietro: da una parte lo spazio è enorme e vuoto, dall'altra si stringe di colpo e comincia a somigliare a un quartiere. È la transizione più interessante di tutto il percorso.",
        curiosita: "I leoni dorati davanti a questa porta hanno le orecchie abbassate, a differenza di quelli dell'Armonia Suprema che le hanno dritte. La spiegazione che si sente dire in loco è che fossero un promemoria per chi entrava: quello che si sente qui dentro non esce. Sarà o non sarà l'intenzione originale, ma la differenza si vede a occhio."
      },
      {
        n: "Palazzo della Purezza Celeste",
        zh: "乾清宫",
        ll: [39.920148, 116.396908],
        foto: { f: "foto/fc-08.jpg", autore: "Gisling", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:乾清宮.JPG" },
        d: "Camera da letto dell'imperatore per tutti i Ming e i primi Qing, poi sala di ricevimento. Sopra il trono c'è una targa con quattro caratteri, 正大光明, «retto e luminoso». Da Yongzheng in poi, dietro quella targa veniva nascosto il nome del successore, scritto in due copie e sigillato, da aprire solo alla morte dell'imperatore.",
        curiosita: "Yongzheng inventò quel sistema perché la successione di suo padre Kangxi era stata una guerra fra fratelli, con lui stesso al centro dei sospetti. Nascondendo il nome toglieva a tutti il movente: nessuno sapeva chi fosse l'erede, nemmeno l'erede. Si racconta anche che in epoca Ming l'imperatore avesse qui numerosi letti fra cui scegliere ogni notte, così che nessuno potesse sapere in anticipo dove dormiva."
      },
      {
        n: "Sala dell'Unione",
        zh: "交泰殿",
        ll: [39.920484, 116.396888],
        foto: { f: "foto/fc-09.jpg", autore: "Gisling", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:交泰殿.JPG" },
        d: "Fra il palazzo dell'imperatore e quello dell'imperatrice, di nuovo piccola e quadrata come l'Armonia Centrale. Il nome viene dall'incontro fra cielo e terra. Qui si custodivano i venticinque sigilli imperiali, uno per ogni tipo di atto di Stato: il sigillo era la firma dell'impero, e chi lo teneva teneva il potere.",
        curiosita: "Nella sala convivono due orologi che hanno segnato l'ora della corte per due secoli: una clessidra ad acqua cinese e un grande orologio meccanico a carillon di fattura europea, arrivato per la via dei gesuiti. Sul muro c'è anche un'iscrizione voluta da Kangxi con i caratteri «wu wei», non agire: un'ammonizione taoista rivolta alle imperatrici a non immischiarsi di politica."
      },
      {
        n: "Palazzo della Tranquillità Terrena",
        zh: "坤宁宫",
        ll: [39.920773, 116.396884],
        foto: { f: "foto/fc-10.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Palace_of_Earthly_Tranquility_(20220218133044).jpg" },
        d: "Sotto i Ming era il palazzo dell'imperatrice, gemello di quello dell'imperatore. I Qing, che venivano dalla Manciuria e non rinunciarono alle proprie usanze, ne fecero due cose insieme: una sala per i sacrifici sciamanici e la camera nuziale imperiale. Guarda dentro: da un lato i pentoloni per bollire i maiali sacrificati, dall'altro una stanza tutta rossa.",
        curiosita: "La stanza rossa a est è la camera delle nozze, e ci hanno passato la prima notte Kangxi, Tongzhi, Guangxu e infine Puyi. Puyi raccontò nella propria autobiografia di essersi sentito soffocare da tutto quel rosso e di essere tornato nelle proprie stanze lasciando l'imperatrice da sola. Aveva sedici anni, ed era già un imperatore senza impero."
      },
      {
        n: "Giardino Imperiale",
        zh: "御花园",
        ll: [39.921539, 116.396853],
        foto: { f: "foto/fc-11.jpg", autore: "xiquinhosilva", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Imperial_Garden_(54448349292).jpg" },
        d: "Dodicimila metri quadri, e finalmente qualcosa che non è simmetrico. Cipressi di quattro secoli con i rami intrecciati, padiglioni fuori asse, sentieri di ciottoli che compongono disegni, e una montagnetta di rocce con un belvedere in cima. Dopo un chilometro di pietra grigia e cortili vuoti l'effetto è sproporzionato, ed è esattamente quello per cui è stato costruito.",
        curiosita: "Il nono giorno del nono mese lunare l'imperatore saliva sul belvedere per la festa del Doppio Nove, quando è tradizione salire in alto. È uno dei pochissimi punti della Città Proibita dove la famiglia imperiale poteva stare all'aperto senza essere in scena: tutto il resto del complesso è progettato per essere guardato."
      },
      {
        n: "Pozzo della Concubina Zhen",
        zh: "珍妃井",
        ll: [39.921931, 116.400042],
        foto: { f: "foto/fc-12.jpg", autore: "馬鵬舉", licenza: "Public domain", fonte: "https://commons.wikimedia.org/wiki/File:Consort_Zhen_Well.jpg" },
        d: "Un pozzo stretto in un angolo del settore nord-est, con una copertura di pietra e una targa. Ci vuole un minuto ad arrivarci, e vale la deviazione — ma non per quello che si vede, che è pochissimo. Per quello che ci è successo.",
        curiosita: "Nell'agosto del 1900, mentre la corte fuggiva davanti all'alleanza delle otto nazioni, la concubina preferita di Guangxu fu fatta gettare qui dentro per ordine dell'imperatrice vedova Cixi. Aveva sostenuto che l'imperatore dovesse restare a Pechino invece di scappare. Aveva ventiquattro anni. La cosa che colpisce arrivandoci davanti è quanto è stretta l'apertura."
      },
      {
        n: "Porta della Potenza Divina",
        zh: "神武门",
        ll: [39.922326, 116.396817],
        foto: { f: "foto/fc-13.jpg", autore: "user:kallgan", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:Forbidden_City_Beijing_Shenwumen_Gate.JPG" },
        d: "L'uscita nord, e la fine del percorso. Era la porta di servizio dell'impero: da qui entravano gli eunuchi, i rifornimenti e le ragazze selezionate per il palazzo. Sopra c'è la targa del Museo del Palazzo, 故宫博物院. Esci, attraversa la strada e sali su Jingshan.",
        curiosita: "Il 5 novembre 1924 Puyi, l'ultimo imperatore, fu cacciato dalla Città Proibita e uscì proprio da questa porta, in automobile, con poche ore di preavviso: aveva diciotto anni e ci viveva da quando ne aveva due. L'anno dopo il palazzo apriva al pubblico come museo. Da Jingshan, quindici minuti di salita, lo vedi allineato dall'alto tutto intero: è l'unico posto da cui la Città Proibita si capisce."
      }
    ],
    coda:
      "Le gallerie laterali (tesori a est, orologi a ovest) stanno dentro lo stesso ingresso ma possono avere un biglietto a parte: controlla all'entrata. Sono le uniche parti coperte, quindi sono anche il piano B se piove."
  }
};
