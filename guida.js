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
  },
  "Zhengyangmen": {
    durata: "45 min",
    intro:
      "Sei in fondo all'asse imperiale, dalla parte opposta rispetto a dove finirai martedì. Qui la Città Proibita non c'entra più: questa era la porta fra la capitale imperiale e i quartieri dei commercianti. Di sera è illuminata, e le due torri si guardano da capo a capo di uno spiazzo che un tempo era un recinto chiuso.",
    punti: [
      {
        n: "Torre delle Frecce",
        zh: "箭楼",
        ll: [39.899373, 116.397899],
        foto: { f: "foto/zh-2.jpg", autore: "Windmemories", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:20251026_Archery_Tower_of_Zhengyangmen.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Zhengyangmen",
        d: "La più a sud delle due, e la più strana: un blocco di mattoni alto quasi quaranta metri, con file di feritoie per gli arcieri su tutti i lati. Non è un edificio da abitare, è una macchina da tiro. Un tempo era unita alla porta vera da un muro semicircolare che formava una trappola: chi sfondava la prima si ritrovava chiuso in un cortile con arcieri sopra la testa da ogni parte.",
        curiosita: "Nel 1900, durante la rivolta dei Boxer, la torre bruciò. Fu ricostruita pochi anni dopo su progetto di un ingegnere tedesco, che ci aggiunse le balaustre bianche e i fregi che oggi sembrano lì da sempre: sono un innesto europeo su una torre cinese, e una volta che lo sai non riesci più a non vederlo."
      },      {
        n: "Zhengyangmen",
        zh: "正阳门",
        ll: [39.900585, 116.397858],
        foto: { f: "foto/zh-1.jpg", autore: "Morio", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:Zhengyangmen_(gatehouse)_2010_April.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Zhengyangmen",
        d: "La porta vera, quella che dà il nome a tutto: «porta dello yang diretto», cioè in asse esatto col sud e col sole di mezzogiorno. Delle nove porte della cinta interna era la principale, e dall'arco centrale passava solo l'imperatore. Oggi è uno dei pochissimi pezzi rimasti delle mura di Pechino: il resto fu demolito a metà Novecento per farci passare la circonvallazione e la metropolitana.",
        curiosita: "Fra la porta e la torre delle frecce c'era un recinto ovale con dentro un tempio; se lo è mangiato il traffico. Se guardi la distanza fra i due edifici stai guardando il vuoto lasciato da un pezzo di città. Era anche il punto zero da cui si contavano le distanze stradali."
      },      {
        n: "Piazza Tian'anmen",
        zh: "天安门广场",
        ll: [39.903761, 116.397706],
        fonte: "https://en.wikipedia.org/wiki/Zhengyangmen",
        d: "Oltre la porta si apre uno degli spiazzi urbani più grandi del mondo. Non è antico: fino al Novecento qui c'era un corridoio chiuso di uffici imperiali, e la piazza come la vedi è degli anni Cinquanta, allargata per contenere le adunate. Di sera è illuminata e sorvegliata; per entrarci servono passaporto e controllo — è il motivo per cui la prenotazione di Tian'anmen è separata da quella della Città Proibita.",
        curiosita: "Vale la pena guardarla da qui, dal fondo sud, prima di entrarci: da questa posizione vedi l'asse intero — torre delle frecce, porta, monumento, mausoleo, e in fondo la Porta della Pace Celeste col ritratto. È lo stesso asse che percorrerai martedì mattina, visto dall'altro capo e cinque secoli più tardi."
      },      {
        n: "Monumento agli Eroi del Popolo",
        zh: "人民英雄纪念碑",
        ll: [39.904598, 116.397665],
        foto: { f: "foto/zh-3.jpg", autore: "Huangdan2060", licenza: "CC0", fonte: "https://commons.wikimedia.org/wiki/File:Monument_to_the_People's_Heroes_in_Beijing,_18_April_2011.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Zhengyangmen",
        d: "L'obelisco al centro della piazza, alto trentotto metri, inaugurato nel 1958. Alla base corrono otto rilievi di marmo che raccontano la storia cinese dalla guerra dell'oppio in avanti. È il primo grande monumento della Cina popolare e sta esattamente sull'asse imperiale: un modo per dire che la storia nuova si mette in fila con quella vecchia, non accanto.",
        curiosita: "Guarda i rilievi da vicino se ci arrivi: sono scolpiti in stile realista socialista ma da scultori formati sulla tradizione cinese, e il risultato non somiglia né a Mosca né a niente di imperiale. È l'oggetto che spiega meglio di ogni altro cosa stava cercando di essere la Cina degli anni Cinquanta."
      }
    ]
  },
  "Tempio dei Lama": {
    durata: "1 ora e mezza",
    intro:
      "Non è un tempio qualsiasi: è il monastero tibetano più importante fuori dal Tibet, in mezzo a Pechino. Nato come residenza di un principe, diventato palazzo imperiale quando quel principe salì al trono come Yongzheng — lo stesso della targa nella Città Proibita — e poi convertito in monastero. Si percorre in linea retta da sud a nord attraverso cortili in fila, e ogni sala è più alta della precedente.",
    punti: [
      {
        n: "Arco di Chengxian Street",
        zh: "成贤街牌坊",
        ll: [39.945496, 116.416622],
        fonte: "https://en.wikipedia.org/wiki/Yonghe_Temple",
        d: "Prima di entrare nel monastero, fai cento metri a ovest: questa via è una delle poche di Pechino ad avere ancora in piedi i suoi archi di legno dipinto, i paifang. Erano ovunque in città e sono quasi tutti spariti. Sotto questi passavano i candidati diretti al Collegio Imperiale, che sta poco più avanti sulla stessa strada.",
        curiosita: "Chengxian significa «diventare saggi». Non era un augurio, era un indirizzo: da questa via si accedeva all'università imperiale. È una delle poche strade di Pechino dove si cammina ancora sotto gli alberi e non sotto un cavalcavia."
      },      {
        n: "Tempio di Confucio",
        zh: "孔庙",
        ll: [39.946548, 116.414556],
        foto: { f: "foto/la-3.jpg", autore: "Ermell", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Peking_Confucius_Tempel-20071022-RM-092411.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Yonghe_Temple",
        d: "A due passi dal monastero buddhista, e il contrasto è il motivo per venirci. Qui non ci sono statue dorate né nuvole di incenso: cortili di cipressi, silenzio, e file di stele di pietra su cui sono incisi i nomi di chi superò gli esami imperiali nel corso di secoli. È il posto più tranquillo della zona e quasi nessuno ci entra.",
        curiosita: "Sotto una tettoia stanno le Classiche di pietra: quasi duecento lastre su cui è inciso l'intero corpus dei testi confuciani, centinaia di migliaia di caratteri, copiati da un solo uomo nel Settecento in oltre un decennio di lavoro. Era il modo di garantire che il testo non si corrompesse passando di copia in copia: la pietra non si corregge di nascosto."
      },      {
        n: "Tempio dei Lama",
        zh: "雍和宫",
        ll: [39.947024, 116.417246],
        foto: { f: "foto/la-1.jpg", autore: "The Erica Chang", licenza: "CC BY 3.0", fonte: "https://commons.wikimedia.org/wiki/File:Beijing_YONGHEGONG_Lama_Temple_-_panoramio_(14).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Yonghe_Temple",
        d: "Cortili in fila, ognuno con una sala più alta del precedente. Si comincia dai Quattro Re Celesti e dal Buddha del futuro con la pancia scoperta, si passa per la sala principale con i Buddha dei tre tempi, e si finisce nel Padiglione delle Diecimila Felicità, che è quello che stai andando a vedere. L'incenso qui è vero culto, non scenografia: è un monastero in funzione.",
        curiosita: "Nell'ultimo padiglione c'è un Maitreya colossale, ricavato da un unico tronco di sandalo bianco portato dal Tibet a Pechino in un viaggio di anni, come dono del settimo Dalai Lama a Qianlong. Il padiglione fu costruito intorno alla statua e non prima: da una porta non sarebbe mai passata."
      }
    ]
  },
  "Palazzo d'Estate": {
    durata: "3 ore",
    intro:
      "Non è un palazzo, è un paesaggio costruito: trecento ettari, tre quarti dei quali sono lago, con una collina fatta della terra scavata per allargarlo. La corte ci veniva d'estate perché la Città Proibita è un forno. Si entra da est, si costeggia l'acqua verso ovest lungo un corridoio dipinto, e si torna in barca — che è il modo giusto di risparmiare le gambe.",
    punti: [
      {
        n: "Sala della Benevolenza e Longevità",
        zh: "仁寿殿",
        ll: [39.997742, 116.280044],
        foto: { f: "foto/es-4.jpg", autore: "Peter K Burian", licenza: "CC BY 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Sculptures_at_the_Hall_of_Benevolence_and_Longevity.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "La prima sala dopo la porta est: qui Cixi e Guangxu ricevevano i ministri, quindi è la parte «di lavoro» di un posto costruito per non lavorarci. Davanti c'è un bestiario di bronzo — draghi, fenici e un qilin, l'animale mitico con corpo di cervo e squame di pesce. I cortili laterali sono più interessanti della sala.",
        curiosita: "Nel cortile ci sono rocce del lago Tai, quelle bucherellate e contorte che in Cina si collezionavano come sculture. Venivano dal fondo di un lago vicino a Suzhou e le migliori erano scolpite dall'acqua nel corso di decenni. Alcune venivano aiutate: si intagliavano a mano e si rimettevano nell'acqua per una o due generazioni, perché la corrente finisse il lavoro."
      },      {
        n: "Giardino della Virtù e dell'Armonia",
        zh: "德和园",
        ll: [39.99826, 116.279855],
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "Il teatro di corte, e il più grande sopravvissuto in Cina: tre palchi sovrapposti, botole nel pavimento e argani nel soffitto per far comparire attori dal cielo e dagli inferi. Cixi era una fanatica dell'opera e ci passava giornate intere.",
        curiosita: "Sotto il palco c'erano un pozzo e alcune vasche: servivano agli effetti d'acqua ma anche da cassa di risonanza. Il teatro di corte non era intrattenimento privato: chi veniva invitato a sedersi accanto all'imperatrice per una recita lo capiva bene, e chi non veniva invitato lo capiva ancora meglio."
      },      {
        n: "Corridoio Lungo",
        zh: "长廊",
        ll: [39.99795, 116.28185],
        foto: { f: "foto/es-3.jpg", autore: "Gary Todd from Xinzheng, China", licenza: "CC0", fonte: "https://commons.wikimedia.org/wiki/File:Summer_Palace_Long_Corridor_(9864916116).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "Settecento metri e passa di portico dipinto lungo la riva del lago, il più lungo del mondo. Ogni trave porta una scena diversa: migliaia di dipinti con paesaggi, fiori, uccelli ed episodi dei romanzi classici cinesi. Serviva perché l'imperatrice potesse camminare lungo l'acqua senza prendere né sole né pioggia.",
        curiosita: "Nessuna scena è ripetuta: gli artigiani lavorarono con l'ordine di non copiarsi. Chi cammina lentamente comincia a riconoscere i personaggi dei grandi romanzi — il Viaggio in Occidente, il Sogno della Camera Rossa, i Tre Regni. È una biblioteca dipinta lunga tre quarti di chilometro, e ci passi in mezzo senza accorgertene se non guardi in alto."
      },      {
        n: "Sala per Disperdere le Nuvole",
        zh: "排云殿",
        ll: [39.998411, 116.274089],
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "Ai piedi della collina, sull'asse che sale verso la torre. Qui Cixi festeggiava il compleanno; il nome viene da un verso di poesia in cui le nuvole si aprono e appaiono i palazzi degli immortali. Da qui in su la salita è a gradoni e comincia a farsi sentire.",
        curiosita: "Il complesso fu ricostruito da Cixi nell'Ottocento con fondi che, secondo l'accusa più celebre della storia cinese moderna, erano destinati alla marina imperiale. Pochi anni dopo la flotta cinese fu distrutta dai giapponesi. Gli storici oggi ridimensionano molto la cifra, ma il collegamento è entrato nella coscienza nazionale e non ne è più uscito."
      },      {
        n: "Torre dell'Incenso di Buddha",
        zh: "佛香阁",
        ll: [39.999282, 116.273981],
        foto: { f: "foto/es-1.jpg", autore: "Lucas Vandroux", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:The_Summer_Palace_in_the_Fall._Tower_of_Buddhist_Incense_-2_(15898388316).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "L'edificio che vedi da ogni punto del lago: ottagonale, su più piani, in cima a una piattaforma di pietra a mezza costa della Collina della Longevità. È il centro visivo di tutto il parco — ogni scorcio è composto perché ci finisca dentro. La salita è ripida ma dall'alto il lago Kunming si apre tutto insieme.",
        curiosita: "L'edificio originale non era questo: doveva essere una pagoda a nove piani e crollò durante la costruzione. Qianlong fece rifare tutto in forma di torre, più bassa e più larga. Poi le truppe anglo-francesi la bruciarono nel 1860 e fu ricostruita di nuovo. Quello che guardi è il terzo tentativo."
      },      {
        n: "Battello di Marmo",
        zh: "清晏舫",
        ll: [39.99796, 116.269722],
        foto: { f: "foto/es-2.jpg", autore: "xiquinhosilva", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Summer_Palace_-_Marble_Boat.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "All'estremità ovest del corridoio: una nave di pietra lunga una trentina di metri che non è mai andata da nessuna parte. Lo scafo è marmo, la sovrastruttura è legno dipinto per sembrare marmo, e le ruote a pale ai lati sono puramente decorative. Le finestre hanno vetri colorati europei.",
        curiosita: "Il senso è un proverbio confuciano: l'acqua sostiene la barca ma può anche rovesciarla — cioè il popolo sostiene il sovrano, ma può rovesciarlo. Una barca di pietra non si rovescia. Voluta da Qianlong come promemoria politico, e ristrutturata da Cixi in stile occidentale."
      },      {
        n: "Via di Suzhou",
        zh: "苏州街",
        ll: [40.001886, 116.274622],
        foto: { f: "foto/es-5.jpg", autore: "user:kallgan", licenza: "Public domain", fonte: "https://commons.wikimedia.org/wiki/File:Beijing_Summer_Palace_Suzhou_Street_04.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "Dietro la collina, sul versante nord: un canale con una via di botteghe che imita una città d'acqua del sud. Era un finto mercato, dove gli eunuchi e le dame di corte facevano i bottegai e i clienti, e l'imperatore ci andava a «fare la spesa». Un teatro immersivo costruito due secoli prima che qualcuno inventasse l'espressione.",
        curiosita: "L'imperatore non poteva uscire dal palazzo e vedere una città vera, quindi gliene fu costruita una in scala, con negozi che vendevano merce vera a prezzi finti. Distrutta nel 1860 come il resto, è stata ricostruita alla fine del Novecento. È turistica e un po' ridicola, ed è anche il posto più rivelatore del parco."
      },      {
        n: "Bue di Bronzo",
        zh: "铜牛",
        ll: [39.99777, 116.280375],
        foto: { f: "foto/es-6.jpg", autore: "Yun Huang Yong from Harbord, Australia", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Bronze_Ox,_Summer_Palace,_Beijing_(24569731336).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Summer_Palace",
        d: "Sulla riva orientale del lago, accosciato su un piedistallo di pietra, guarda l'acqua. Fuso a metà Settecento sotto Qianlong, con una poesia scritta dall'imperatore stesso incisa sul dorso.",
        curiosita: "Serviva a tenere a bada le inondazioni: la tradizione cinese metteva buoi di metallo lungo i corsi d'acqua come talismani contro le piene, un'usanza che si fa risalire al mitico Yu il Grande, domatore delle acque. È uno degli oggetti meno appariscenti del parco: quasi tutti ci passano accanto mentre fotografano il lago."
      }
    ]
  },
  "Jingshan Park": {
    durata: "1 ora",
    intro:
      "Una collina artificiale fatta con la terra scavata per il fossato della Città Proibita. Non è un parco qualsiasi: è il punto da cui il complesso imperiale si capisce, ed è per questo che è l'unica tappa della giornata che non puoi saltare. Quindici minuti di gradini, e in cima c'è la vista che hai in testa da quando hai comprato il biglietto.",
    punti: [
      {
        n: "L'albero dell'ultimo Ming",
        zh: "明思宗殉国处",
        ll: [39.924644, 116.398997],
        fonte: "https://en.wikipedia.org/wiki/Jingshan_Park",
        d: "Sul fianco est della collina, a pochi metri dal sentiero, un albero con una targa. Qui, nell'aprile del 1644, l'ultimo imperatore Ming si impiccò mentre le truppe ribelli entravano a Pechino. Prima di uscire dal palazzo aveva ucciso o fatto uccidere le donne della propria famiglia perché non cadessero nelle mani dei vincitori.",
        curiosita: "L'albero che vedi non è quello: l'originale è andato perduto nel Novecento e questo è un sostituto piantato dopo. Ma il punto è quello. In poco meno di tre secoli la dinastia era passata dal costruire tutto quello che hai visto stamattina a questo — e i Qing che arrivarono dopo tennero la targa lì apposta, come promemoria di cosa succede a chi perde il mandato del cielo."
      },      {
        n: "Padiglione della Primavera Eterna",
        zh: "万春亭",
        ll: [39.924924, 116.396736],
        foto: { f: "foto/ji-1.jpg", autore: "そらみみ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Qiwanglou_Pavilion_and_Wanchunting_Pavilion_in_Jingshan_Park_2.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Jingshan_Park",
        d: "In cima, sul punto più alto e sull'asse esatto della città: padiglione quadrato a doppio tetto, con dentro un Buddha. Per secoli è stato il punto più elevato di Pechino e nessuno poté costruire più in alto.",
        curiosita: "La collina fu costruita anche per ragioni di feng shui: una montagna a nord protegge dagli spiriti maligni, che secondo la tradizione arrivano da quella direzione — e, meno metaforicamente, dai venti gelati della Mongolia. Il nome vecchio era «collina del carbone», perché si diceva che sotto ne fosse sepolto un deposito per gli assedi."
      },      {
        n: "La vista sulla Città Proibita",
        zh: "",
        ll: [39.924924, 116.396737],
        foto: { f: "foto/ji-2.jpg", autore: "BriYYZ from Toronto, Canada", licenza: "CC BY-SA 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Forbidden_City_from_Jingshan_Hill_(6349978668)_(2).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Jingshan_Park",
        d: "Da quassù il complesso si legge tutto insieme: i tetti gialli in fila sull'asse, il fossato che li circonda, e la simmetria che da dentro non si vede perché ci sei in mezzo. Tutto quello che hai attraversato stamattina, dalla Porta del Meridiano a quella della Potenza Divina, sta sotto di te in un colpo d'occhio.",
        curiosita: "Il giallo dei tetti era riservato all'imperatore: nessun altro edificio in Cina poteva averlo. Da qui la regola si vede a occhio nudo — guarda dove finisce il giallo e comincia il grigio degli hutong. È la mappa del potere disegnata sui colori dei coppi."
      },      {
        n: "Palazzo Shouhuang",
        zh: "寿皇殿",
        ll: [39.92751, 116.396598],
        fonte: "https://en.wikipedia.org/wiki/Jingshan_Park",
        d: "Sul versante nord, fuori dal percorso della maggior parte dei visitatori. Era il tempio dinastico dove si conservavano i ritratti degli imperatori morti e si celebravano i riti in loro onore, con una pianta simmetrica che imita in piccolo la Città Proibita.",
        curiosita: "Per decenni è stato usato come centro ricreativo per bambini, e solo di recente è stato restaurato e riaperto come monumento. Se hai gambe e tempo vale la deviazione: è il posto meno affollato della giornata, a duecento metri da una delle viste più fotografate della Cina."
      }
    ]
  },
  "Beihai Park": {
    durata: "1 ora e mezza",
    intro:
      "Uno dei giardini imperiali più antichi al mondo ancora esistenti: qui c'era già un parco nell'undicesimo secolo, e Kublai Khan ne fece il centro della propria capitale — la sua reggia stava su quest'isola, non dov'è oggi la Città Proibita. Si gira intorno a un lago con al centro un'isola sormontata da una stupa bianca, e la traversata in barca è il modo giusto di risparmiare gambe.",
    punti: [
      {
        n: "Città Rotonda",
        zh: "团城",
        ll: [39.923002, 116.389083],
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Appena dentro l'ingresso sud: una terrazza murata circolare, alta pochi metri, che è quel che resta del palazzo di Kublai Khan. È un pezzo di Pechino mongola sopravvissuto dentro la Pechino Ming. Ci sono un cipresso di secoli e un Buddha di giada bianca portato dalla Birmania.",
        curiosita: "Nella sala principale c'è una grande vasca di giada scura scolpita, fatta fare da Kublai Khan nel Duecento per contenere vino. Andò perduta per secoli e finì a fare da vasca dei sottaceti in un tempio taoista; fu riconosciuta e ricomprata da Qianlong, che poi fece costruire un padiglione apposta per contenerla."
      },      {
        n: "Ponte della Tartaruga d'Oro",
        zh: "金鳌玉蝀桥",
        ll: [39.922465, 116.387701],
        foto: { f: "foto/be-4.jpg", autore: "Ermell", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Beihai_Park_Brücke-20110104-RM-105624.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Il ponte di pietra che taglia il lago all'altezza dell'ingresso sud, e il punto da cui si fa la fotografia: la stupa bianca sull'isola, dritta davanti, riflessa nell'acqua. Il nome significa «tartaruga d'oro e arcobaleno di giada».",
        curiosita: "Da questo ponte si vede anche, verso sud, l'ingresso di Zhongnanhai — il complesso dove vive e lavora la dirigenza del Partito, che è la continuazione diretta dello stesso parco imperiale. Il giardino è tagliato in due: la metà nord è aperta ai turisti, la metà sud è il centro del potere cinese. Da quella parte non si fotografa."
      },      {
        n: "Tempio della Pace Eterna",
        zh: "永安寺",
        ll: [39.92499, 116.388994],
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Sull'isola di Qionghua, in salita verso la stupa: una sequenza di sale buddhiste incastrate nel pendio, ognuna su un livello diverso, collegate da scale. Conviene farla lentamente, perché la cosa interessante è proprio come il tempio si aggrappa alla collina.",
        curiosita: "L'isola è artificiale ed è fatta con la terra scavata per il lago — la stessa idea di Jingshan, secoli prima. Le rocce che vedi lungo la salita furono portate qui smontando un giardino imperiale di un'altra città: saccheggiare la capitale del nemico e riassemblarne il giardino in casa propria era considerato un atto politico, non solo estetico."
      },      {
        n: "Pagoda Bianca",
        zh: "白塔",
        ll: [39.925819, 116.38926],
        foto: { f: "foto/be-1.jpg", autore: "Czzhermit", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:White_pagoda,_beihai_park,_beijing,_china.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "La stupa in cima all'isola, bianca e panciuta: è di forma tibetana, non cinese, ed è per questo che spicca tanto in mezzo a tetti gialli e verdi. Fu costruita a metà Seicento in occasione della visita del quinto Dalai Lama a Pechino.",
        curiosita: "È stata rifatta più volte dopo altrettanti terremoti. In uno dei restauri, dentro, fu trovato un contenitore con reliquie e l'indicazione della riparazione precedente: un messaggio lasciato da chi c'era stato prima e trovato da chi è venuto dopo, che è più o meno il senso di tutto questo parco."
      },      {
        n: "Cinque Padiglioni del Drago",
        zh: "五龙亭",
        ll: [39.92981, 116.385988],
        foto: { f: "foto/be-2.jpg", autore: "Ermell", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Peking_Beihai_Park_Five_dragon_Pavilion-20110104-RM-110807.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Sulla riva nord, cinque padiglioni collegati da ponticelli che si spingono sull'acqua a zigzag. Gli imperatori ci venivano a pescare e a guardare la luna. Sono il posto più fotogenico del parco al tramonto, e la sponda giusta da cui vedere la pagoda bianca controluce.",
        curiosita: "Lo zigzag non è un vezzo estetico: secondo la tradizione gli spiriti maligni viaggiano solo in linea retta, quindi un ponte che curva li lascia indietro. È la stessa idea dei muri-schermo piazzati davanti alle porte cinesi, quelli che ti costringono a girare per entrare."
      },      {
        n: "Muro dei Nove Draghi",
        zh: "九龙壁",
        ll: [39.930372, 116.386327],
        foto: { f: "foto/be-3.jpg", autore: "EditQ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Nine_Dragon_Wall,_Beihai_Park_1.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Sulla sponda nord: il secondo dei tuoi due muri dei nove draghi in una sola giornata, e il migliore dei due. È di qualche anno più antico di quello dentro la Città Proibita, ed è l'unico in Cina ad avere draghi su entrambe le facce.",
        curiosita: "Serviva a schermare l'ingresso di un tempio che non c'è più: bruciò all'inizio del Novecento e il muro sopravvisse perché è ceramica su mattone, mentre tutto il resto era legno. È rimasto lì a fare da schermo al nulla, che è un destino piuttosto cinese."
      },      {
        n: "Studio del Cuore Tranquillo",
        zh: "静心斋",
        ll: [39.930105, 116.384866],
        foto: { f: "foto/be-5.jpg", autore: "そらみみ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Qionghuadao_Island_from_Jingxinzhai_Hall_in_Beihai_Park.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Beihai_Park",
        d: "Sulla riva nord-ovest, un giardino dentro il giardino: rocce, corsi d'acqua, ponticelli e padiglioni, chiuso da un muro. Qianlong lo volle per studiare e i principi ci venivano a fare i compiti. È il posto più raffinato del parco e quasi nessuno ci entra, perché dalla riva non si vede.",
        curiosita: "È un esempio da manuale di «paesaggio preso in prestito»: la composizione è studiata perché da certi punti la pagoda bianca, che sta fuori dal muro, sembri far parte del giardino. Non possiedi la vista ma te la incorpori — un'idea che i giardinieri cinesi teorizzarono secoli prima che i paesaggisti europei la riscoprissero."
      }
    ]
  },
  "Torre del Tamburo e della Campana": {
    durata: "1 ora",
    intro:
      "Le due torri stanno una dietro l'altra all'estremità nord dell'asse imperiale, ed erano l'orologio pubblico della città: il tamburo scandiva le ore, la campana apriva e chiudeva la giornata. Da qui, scendendo verso sud fino a Zhengyangmen, corre la linea su cui è costruita tutta Pechino.",
    punti: [
      {
        n: "Torre del Tamburo",
        zh: "鼓楼",
        ll: [39.940744, 116.395989],
        foto: { f: "foto/ta-1.jpg", autore: "Yang Han", licenza: "CC0", fonte: "https://commons.wikimedia.org/wiki/File:China_Beijing_The_Side_of_Drum_Tower.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Bell_and_Drum_Towers_of_Beijing",
        d: "Legno su base di mattoni. Dentro ci sono i tamburi: uno grande e una serie di piccoli, uno per ciascun periodo del calendario solare cinese. Servivano a segnare le ore della notte, quando le porte della città erano chiuse e chi restava fuori restava fuori. La scala è ripida e stretta, e sono una settantina di gradini.",
        curiosita: "Dei tamburi originali ne resta uno solo, squarciato dalle baionette delle truppe dell'alleanza delle otto nazioni nel 1900 — lo stesso anno del pozzo della concubina Zhen. È esposto così com'è, con i tagli. Gli altri sono repliche, e ogni tanto ne fanno una dimostrazione dal vivo: se capiti all'ora giusta vale i gradini."
      },      {
        n: "Torre della Campana",
        zh: "钟楼",
        ll: [39.94243, 116.395848],
        foto: { f: "foto/ta-2.jpg", autore: "Zaptel", licenza: "CC BY 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Beijingbelltower2.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Bell_and_Drum_Towers_of_Beijing",
        d: "Cento metri più a nord, e completamente diversa: pietra e mattoni, niente legno, perché le versioni precedenti erano bruciate. Dentro pende una campana di bronzo di decine di tonnellate, fra le più pesanti della Cina. Si sentiva a chilometri di distanza.",
        curiosita: "La leggenda dice che il fonditore fallì due volte e che alla terza sua figlia si gettò nel bronzo fuso perché la colata riuscisse, lasciando nelle mani del padre solo una scarpetta. Nel suono della campana, dicono, si sente la parola «xie» — scarpa. È una storia che a Pechino si racconta da secoli, e naturalmente non è vera."
      },      {
        n: "Vicolo della Pipa",
        zh: "烟袋斜街",
        ll: [39.939187, 116.394843],
        foto: { f: "foto/ta-3.jpg", autore: "Geoff McKim", licenza: "CC BY-SA 2.0", fonte: "https://commons.wikimedia.org/wiki/File:Beijing_hutong_area_2.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Bell_and_Drum_Towers_of_Beijing",
        d: "Duecento metri di vicolo obliquo che scendono dalla torre del tamburo verso il lago: è la via commerciale più antica della zona, e il nome viene dalle botteghe di pipe da tabacco che ci stavano un tempo. Si dice che la forma stessa del vicolo ricordi una pipa, lunga e stretta, con lo slargo del lago in fondo a fare da fornello.",
        curiosita: "È turistico e lo sa, ma è anche l'unico modo sensato di passare dalle torri al lago, e di sera con le lanterne accese funziona. Se vuoi il vicolo vero gira nelle traverse: due svolte e sei negli hutong dove la gente vive davvero, coi panni stesi e le cucine sul marciapiede."
      },      {
        n: "Ponte del Lingotto d'Argento",
        zh: "银锭桥",
        ll: [39.939014, 116.393421],
        foto: { f: "foto/ta-4.jpg", autore: "N509FZ", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:Shichahai_014_boat_west_of_Yinding_Bridge_(20211008152036).jpg" },
        fonte: "https://en.wikipedia.org/wiki/Bell_and_Drum_Towers_of_Beijing",
        d: "Il ponticello di pietra che separa Qianhai da Houhai, il lago davanti e il lago di dietro. È piccolo, e ci passeresti sopra senza notarlo: ma è uno dei punti panoramici storici di Pechino, perché nelle giornate limpide da qui si vedono le montagne occidentali oltre i tetti.",
        curiosita: "«Vedere i monti dal ponte» era una delle vedute classiche della città. Oggi con lo smog capita di rado, ma quando succede è ancora lì. Il nome viene dalla forma: visto di lato l'arco somiglia a un lingotto d'argento cinese, quelli a barchetta con le punte all'insù."
      }
    ]
  },
  "Grande Muraglia · Jinshanling": {
    durata: "3-4 ore",
    intro:
      "Non è la muraglia dei pullman. Jinshanling è un tratto restaurato solo in parte: la prima metà ha i gradini a posto, poi la pietra si sbriciola e cammini su quello che il tempo ha lasciato. Le torri di guardia sono molto più fitte che altrove, e intorno non c'è quasi nessuno. Scarpe da trekking, acqua, e nessuna fretta.",
    punti: [
      {
        n: "Muraglia di Jinshanling",
        zh: "金山岭长城",
        ll: [40.702468, 117.233702],
        foto: { f: "foto/mu-1.jpg", autore: "Jakub Hałun", licenza: "CC BY-SA 4.0", fonte: "https://commons.wikimedia.org/wiki/File:20090529_Great_Wall_Jinshanling_0903_8233.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Jinshanling",
        d: "Costruita sotto i Ming, sotto la direzione del generale Qi Jiguang, che qui mise alla prova un'idea: torri molto più ravvicinate del solito, così che ogni tratto di muro fosse coperto dal tiro di due torri insieme. Il risultato è il tratto architettonicamente più interessante di tutta la muraglia, ed è il motivo per cui ci viene chi ci capisce invece di chi fa la gita.",
        curiosita: "Le torri non sono uguali fra loro: alcune a un piano, altre a due, con tetti a volta o spioventi, finestre tonde o quadrate. Camminando cominci a riconoscerne le differenze. È l'opposto della muraglia da cartolina, che è tutta identica perché è tutta ricostruita di recente."
      },      {
        n: "Torre delle Sei Finestre",
        zh: "六眼楼",
        ll: [40.683492, 117.233413],
        foto: { f: "foto/mu-2.jpg", autore: "Jakub Hałun", licenza: "CC BY-SA 3.0", fonte: "https://commons.wikimedia.org/wiki/File:20090529_Great_Wall_Jinshanling_8225.jpg" },
        fonte: "https://en.wikipedia.org/wiki/Jinshanling",
        d: "Una delle torri più fotografate del tratto, con sei aperture per lato invece delle solite tre o quattro. Di qui in avanti il restauro finisce e comincia la muraglia selvaggia: mattoni caduti, erba fra le pietre, e il crinale che continua a perdita d'occhio.",
        curiosita: "Da Jinshanling verso est si arriva a Simatai, e la traversata fra le due era una delle camminate classiche della Cina. Oggi il collegamento è chiuso o regolamentato a seconda dell'anno, quindi non contarci — ma dal punto in cui la muraglia restaurata finisce, la vista su quella che continua a sbriciolarsi verso l'orizzonte è la ragione per cui sei venuto qui e non a Mutianyu."
      }
    ]
  }
};
