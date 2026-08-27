/* Cina 2026 — guide dentro i siti.

   COORDINATE: da OpenStreetMap (27/08/2026), convertite in GCJ-02 come tutto il
   resto del continente. Quei punti esistono e stanno lì.

   FOTO: da Wikimedia Commons, licenze libere, autore e licenza sotto ognuna.
   Scaricate dentro il repo e non caricate da remoto: Wikimedia è bloccata in
   Cina continentale, e un collegamento esterno non si vedrebbe proprio dove serve.

   TESTI: scritti a mano, poi CONFRONTATI con le voci di Wikipedia in inglese il
   27/08/2026. Ogni punto porta il collegamento alla voce usata. Il confronto ha
   corretto sei affermazioni sbagliate (fra cui la data di un incendio e due
   dinastie invertite) e ne ha tolte tre che nessuna fonte sosteneva.
   Quello che resta racconto o leggenda è scritto come tale dentro il testo:
   la pancia di legno del drago, i leoni con le orecchie abbassate, la copia in
   stoffa della porta, gli attrezzi da aratura. Le misure della lastra di marmo
   vengono dal cartello del museo, fotografato su Commons.

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
        fonte: "https://en.wikipedia.org/wiki/Meridian_Gate",
        d: "L'unico ingresso, e il più teatrale: due ali che vengono avanti a stringerti mentre entri, discese dalle antiche torri que che segnavano l'accesso a palazzi e templi. Cinque archi. Quello centrale era dell'imperatore e basta, con due sole eccezioni: l'imperatrice, una volta, il giorno delle nozze, e i primi tre classificati dell'esame imperiale, che ne uscivano — una volta in tutta la vita. Tutti gli altri, funzionari e servitori, passavano dai quattro laterali. Guarda in cima: i cinque padiglioni si chiamano «le cinque torri della fenice».",
        curiosita: "Da qui si annunciavano proclami e calendari: chi stabiliva il tempo stabiliva la semina, e quindi il paese. E qui l'imperatore riceveva i prigionieri dopo le campagne vittoriose, a volte con esecuzioni di massa a seguire. Si racconta anche che i funzionari in disgrazia venissero giustiziati sotto questa porta: non è vero, ed è un mito che gira da secoli. Bastonati in pubblico sì, quello succedeva davvero."
      },
      {
        n: "Porta dell'Armonia Suprema",
        zh: "太和门",
        ll: [39.915369, 116.39713],
        foto: { f: "foto/fc-02.jpg", autore: "Francesco Bini", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Città_proibita,_piazzale_shi_ji_e_padiglione_dell'armonia_suprema_(taihemen)_01.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Gate_of_Supreme_Harmony",
        d: "Passato il Meridiano ti trovi in un piazzale enorme, tagliato dal Fiume Interno delle Acque d'Oro con cinque ponti di marmo. La porta in fondo è la seconda del percorso. I due leoni di bronzo: il maschio ha la zampa su una sfera ricamata — il dominio sul mondo; la femmina trattiene un cucciolo rovesciato — la generazione che continua. La femmina sta sempre alla sinistra di chi entra. È una coppia che ritroverai davanti a mezza Cina, sempre in quest'ordine.",
        curiosita: "Sotto i Ming l'imperatore teneva qui l'udienza del mattino, all'aperto davanti alla porta. Sotto i Qing, che tenevano corte molto più spesso, l'udienza si spostò più a nord, vicino agli alloggi — alla porta che troverai al punto 7. Nel 1886 questa porta bruciò interamente per una lampada rovesciata nel corpo di guardia, e la ricostruzione finì solo nel 1894: in mezzo cadono le nozze di Guangxu, e si racconta che per l'occasione ne fu montata una copia in legno e stoffa. Quest'ultima parte è racconto, non documento."
      },
      {
        n: "Sala dell'Armonia Suprema",
        zh: "太和殿",
        ll: [39.917297, 116.397056],
        foto: { f: "foto/fc-03.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Hall_of_Supreme_Harmony_and_Mid_L-R_gates_(20241127120000).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Hall_of_Supreme_Harmony",
        d: "La più grande struttura in legno sopravvissuta in Cina, su una base di marmo a tre livelli, una trentina di metri sopra il piazzale. Incoronazioni, investiture, matrimoni imperiali: le occasioni per cui esiste tutto il resto. Dentro, le sei colonne più vicine al trono sono ricoperte d'oro. Fuori, conta le statuette sullo spigolo del tetto: sono dieci. La decima si chiama Hangshi, «la decima», e non sta su nessun altro tetto della Città Proibita — il numero misurava il rango dell'edificio, e qui hanno voluto uscire dalla scala.",
        curiosita: "Sul soffitto sopra il trono c'è un lacunare con un drago avvolto, e dalla sua bocca pende un grappolo di sfere di metallo: è lo «specchio di Xuanyuan». La leggenda dice che se sul trono si siede un usurpatore, le sfere gli cadono in testa e lo uccidono. La sala è bruciata sette volte sotto i Qing e l'ultima ricostruzione è del 1695-97; in una delle precedenti fu rimpicciolita — da circa 95 metri per 48 agli attuali 65 per 37 — perché non si trovavano più tronchi abbastanza grandi."
      },
      {
        n: "Sala dell'Armonia Centrale",
        zh: "中和殿",
        ll: [39.917877, 116.397033],
        foto: { f: "foto/fc-04.jpg", autore: "Tianxiaozhang", licenza: "Public domain", fonte: "https://commons.wikimedia.org/wiki/File:Zhonghedian_Interior.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Hall_of_Central_Harmony",
        d: "Piccola e quadrata, schiacciata fra le due sale grandi, con il tetto a piramide e una sfera dorata in cima. Serviva all'imperatore per prepararsi e riposare prima e durante le cerimonie: praticamente un camerino, ma di marmo. Dentro un trono più modesto e le portantine.",
        curiosita: "Si racconta che una volta l'anno, prima del rito della prima aratura, l'imperatore ispezionasse qui semi e aratro: la Cina era un impero agricolo e il sovrano ne era formalmente il primo contadino, che apriva la stagione tracciando di persona un solco in un campo cerimoniale. Il rito è documentato; che gli attrezzi passassero da questa stanza è tradizione locale, non l'ho trovato in una fonte."
      },
      {
        n: "Sala dell'Armonia Preservata",
        zh: "保和殿",
        ll: [39.918406, 116.397012],
        foto: { f: "foto/fc-05.jpg", autore: "Jorge Láscar from Australia", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Lascar_The_Outer_Court_-_Forbidden_City_(4497568255).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Hall_of_Preserving_Harmony",
        d: "L'ultima delle tre grandi sale, simile all'Armonia Suprema ma più piccola. Qui si provavano le cerimonie prima di eseguirle, e qui si teneva la fase finale dell'esame imperiale: l'ultimo gradino di un concorso che durava anni, e dal X secolo era l'imperatore in persona a presiederlo. Ma la cosa da vedere sta dietro, scendendo verso nord.",
        curiosita: "La rampa dietro la sala è una lastra unica di marmo: 16,75 metri per 3,07, spessa 1,7, oltre 200 tonnellate — sono i numeri del cartello del museo. Fu cavata a Dashiwo, nel distretto di Fangshan a sud-ovest di Pechino, e trascinata fin qui d'inverno bagnando la strada per farla ghiacciare: il ghiaccio era il nastro trasportatore. I draghi che vedi non sono i disegni Ming originali: furono raschiati via e riscolpiti nel 1761, sotto Qianlong."
      },
      {
        n: "Muro dei Nove Draghi",
        zh: "九龙壁",
        ll: [39.918504, 116.400432],
        foto: { f: "foto/fc-06.jpg", autore: "Jakub Hałun", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:20090528_Beijing_Nine_Dragon_Wall_7999.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Nine-Dragon_Wall",
        d: "Due minuti di deviazione verso est, davanti al Palazzo della Tranquilla Longevità. Costruito nel 1771: nove draghi in piastrelle smaltate che si contorcono sopra le onde. Nove e cinque sono i numeri imperiali — nove draghi, cinque artigli ciascuno. I colori sono cotti dentro la ceramica, non dipinti sopra, ed è per questo che dopo due secoli e mezzo sono ancora così.",
        curiosita: "Si racconta che durante il montaggio una piastrella si ruppe e che un artigiano la rifece in legno dipinto per non farsi decapitare: sarebbe la pancia del terzo drago da sinistra. È leggenda, non storia documentata. Se ti prende il gioco: un altro Muro dei Nove Draghi, del 1756 e con i draghi su tutte e due le facce, sta a Beihai Park — che è la tua tappa del primo pomeriggio."
      },
      {
        n: "Porta della Purezza Celeste",
        zh: "乾清门",
        ll: [39.919235, 116.396947],
        foto: { f: "foto/fc-07.jpg", autore: "そらみみ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Gate_of_Heavenly_Purity_20160826.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Gate_of_Supreme_Harmony",
        d: "Qui finisce la Corte Esterna e comincia quella Interna. Da questa soglia in poi non era più impero, era casa. Fermati un attimo e guarda avanti e indietro: da una parte lo spazio è enorme e vuoto, dall'altra si stringe di colpo e comincia a somigliare a un quartiere. È la transizione più interessante di tutto il percorso, ed è progettata per essere sentita.",
        curiosita: "Non è solo una soglia simbolica: sotto i Qing l'udienza mattutina dell'imperatore si teneva proprio qui, e non più alla Porta dell'Armonia Suprema, perché era a due passi dai suoi alloggi. I Qing tenevano corte molto più spesso dei Ming, e spostarono il governo dentro casa. C'è anche chi fa notare che i leoni dorati davanti a questa porta hanno le orecchie abbassate, a differenza di quelli più a sud: sarebbe un promemoria a non riferire fuori quello che si sente dentro. Nessuna fonte lo conferma, ma la differenza si vede."
      },
      {
        n: "Palazzo della Purezza Celeste",
        zh: "乾清宫",
        ll: [39.920148, 116.396908],
        foto: { f: "foto/fc-08.jpg", autore: "Gisling", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:乾清宮.JPG" },
        fonte: "https://en.wikipedia.org/wiki/Palace_of_Heavenly_Purity",
        d: "Camera da letto dell'imperatore per tutti i Ming e i primi Qing, poi sala di ricevimento. Sopra il trono c'è una targa con quattro caratteri, 正大光明, «retto e luminoso». Da Yongzheng in poi, dietro quella targa veniva nascosto il nome del successore, scritto e sigillato, da aprire solo alla morte dell'imperatore.",
        curiosita: "Yongzheng inventò quel sistema perché la successione di suo padre Kangxi era stata una guerra fra fratelli, con lui stesso al centro dei sospetti: nascondendo il nome toglieva a tutti il movente, perché nessuno sapeva chi fosse l'erede, nemmeno l'erede. Sempre da Yongzheng in poi gli imperatori smisero di dormire qui e si trasferirono nella più piccola Sala della Coltivazione Mentale, poco a ovest, per rispetto verso la memoria di Kangxi."
      },
      {
        n: "Sala dell'Unione",
        zh: "交泰殿",
        ll: [39.920484, 116.396888],
        foto: { f: "foto/fc-09.jpg", autore: "Gisling", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:交泰殿.JPG" },
        fonte: "https://en.wikipedia.org/wiki/Hall_of_Union",
        d: "Fra il palazzo dell'imperatore e quello dell'imperatrice, di nuovo piccola e quadrata con il tetto a piramide. Il nome viene dall'incontro fra cielo e terra. Qui si custodivano i venticinque sigilli imperiali dei Qing, uno per ogni tipo di atto: il sigillo era la firma dello Stato, e chi lo teneva teneva il potere.",
        curiosita: "In questa sala stava anche l'ora ufficiale del palazzo: prima una clessidra ad acqua, poi un orologio meccanico, e sono esposti tutti e due ancora adesso, uno accanto all'altro. È una stanza piccola in cui si vede il passaggio da un modo di misurare il tempo a un altro — e quindi, se vuoi, da un mondo a un altro."
      },
      {
        n: "Palazzo della Tranquillità Terrena",
        zh: "坤宁宫",
        ll: [39.920773, 116.396884],
        foto: { f: "foto/fc-10.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Palace_of_Earthly_Tranquility_(20220218133044).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Palace_of_Earthly_Tranquility",
        d: "Sotto i Ming era la residenza dell'imperatrice. I Qing, che venivano dalla Manciuria e non rinunciarono alle proprie usanze, ne convertirono gran parte al culto sciamanico: nella parte davanti altari, icone, tappeti da preghiera e una grande cucina dove si preparava la carne dei sacrifici. Il rosso domina, ed è il colore dell'amore e della fecondità.",
        curiosita: "Da Yongzheng in poi né l'imperatore né l'imperatrice ci vivevano più, ma due stanze restarono riservate alla prima notte di nozze. L'ultima volta fu con Puyi, nel 1922: aveva sedici anni, aveva sposato due donne la stessa sera — l'imperatrice Wanrong e la concubina Wenxiu — ed entrato nella camera tutta rossa scappò via, lasciandole a dormire da sole nel Letto del Drago. Due anni dopo non era più imperatore."
      },
      {
        n: "Giardino Imperiale",
        zh: "御花园",
        ll: [39.921539, 116.396853],
        foto: { f: "foto/fc-11.jpg", autore: "xiquinhosilva", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Imperial_Garden_(54448349292).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Forbidden_City",
        d: "Finalmente qualcosa che non è simmetrico. Cipressi secolari con i rami intrecciati, padiglioni fuori asse, sentieri di ciottoli che compongono disegni, e una montagnetta di rocce con un belvedere in cima. Dopo un chilometro di pietra grigia e cortili vuoti l'effetto è sproporzionato: ed è esattamente quello per cui è stato costruito.",
        curiosita: "È uno dei pochissimi punti del complesso dove la famiglia imperiale poteva stare all'aperto senza essere in scena. Tutto il resto della Città Proibita è progettato per essere guardato: assi, simmetrie, distanze calcolate perché chi arrivava si sentisse piccolo. Qui no. Vale la pena fermarsi cinque minuti prima di uscire, anche solo per notare la differenza."
      },
      {
        n: "Pozzo della Concubina Zhen",
        zh: "珍妃井",
        ll: [39.921931, 116.400042],
        foto: { f: "foto/fc-12.jpg", autore: "馬鵬舉", licenza: "Public domain", fonte: "https://commons.wikimedia.org/wiki/File:Consort_Zhen_Well.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Pearl_Concubine",
        d: "Un pozzo stretto in un angolo del settore nord-est, con una copertura di pietra e una targa. Ci vuole un minuto ad arrivarci, e vale la deviazione — ma non per quello che si vede, che è pochissimo. Per chi c'era dentro.",
        curiosita: "Entrò nella Città Proibita nel 1889, a tredici anni, come concubina di Guangxu. Spingeva l'imperatore a essere «forte e indipendente» e appoggiava le sue riforme, il che la mise contro l'imperatrice vedova Cixi. Era anche appassionata di fotografia e faceva entrare stranieri a insegnargliela: è per questo che di lei restano tante immagini, cosa rarissima per una concubina. Morì il 15 agosto 1900, a ventiquattro anni, mentre la corte fuggiva davanti all'alleanza delle otto nazioni. Il racconto tramandato — e le fonti lo danno come tale, non come fatto accertato — è che Cixi la fece gettare in questo pozzo."
      },
      {
        n: "Porta della Potenza Divina",
        zh: "神武门",
        ll: [39.922326, 116.396817],
        foto: { f: "foto/fc-13.jpg", autore: "user:kallgan", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:Forbidden_City_Beijing_Shenwumen_Gate.JPG" },
        fonte: "https://en.wikipedia.org/wiki/Gate_of_Divine_Might",
        d: "L'uscita nord, e la fine del percorso. Costruita nel 1420, si chiamava Porta della Tartaruga Nera finché Kangxi salì al trono: il suo nome personale conteneva lo stesso carattere, e per tabù andò cambiato. Era la porta di servizio del palazzo, usata dal personale — e da qui entravano le ragazze portate dentro per la selezione delle concubine. Sopra c'è la targa del Museo del Palazzo.",
        curiosita: "Il 5 novembre 1924 il signore della guerra Feng Yuxiang abolì il titolo imperiale di Puyi e lo ridusse a privato cittadino della Repubblica: aveva diciotto anni, ed era stato fatto imperatore a due. L'anno dopo, nel 1925, il palazzo apriva al pubblico come museo. Esci, attraversa la strada e sali su Jingshan: quindici minuti di salita e vedi allineato dall'alto tutto quello che hai appena percorso a naso in su. È l'unico posto da cui la Città Proibita si capisce."
      }
    ],
    coda:
      "Le gallerie laterali (tesori a est, orologi a ovest) stanno dentro lo stesso ingresso ma possono avere un biglietto a parte: controlla all'entrata. Sono le uniche parti coperte, quindi sono anche il piano B se piove."
  }
};
