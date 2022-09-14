const data =  {
    "start": "../html/start.html",
    "end": "../html/end.html",
    "foutmelding": "../html/foutmelding.html",

    "regel": "../html/regel.html",
    "nee1": "../html/nee1.html",
    "typfout": "../html/typfout.html",
    "logica": "../html/logica.html",
    "zelfde": "../html/zelfde.html",
    "zoekop": "../html/zoekop.html",
    "probeeroplossing": "../html/probeeroplossing.html",
};

const code = `st=>start: start
e=>end

op1=>operation: ga naar meegegeven regel
op2=>operation: Fix/Schrijf de code opnieuw
op3=>operation: Kopieer error en zoek op
op4=>operation: Wat voor type error is het
op5=>operation: Kijk naar hun probleem/oplossingen
op6=>operation: Lees de betekenis
op7=>operation: Verbeter en voor oplossing uit


cond=>condition: Heb je een error?
cond2=>condition: Typfoutje
cond3=>condition: Lees de code/functie door
cond4=>condition: Is het gefixt
cond5=>condition: Hebben andere dit probleem ook
cond6=>condition: Snap je het



io=>inputoutput: Betekenis type error of commen oplossing

para=>parallel: Stop
para2=>parallel: Stop
para3=>parallel: Stop
para4=>parallel: Stop



st->cond
cond(yes)->op1->cond2
cond(no)->para
cond2(yes)->para2
cond2(no)->cond3
cond3(yes)->op2->cond4
cond3(no)->para3
cond4(yes)->para4
cond4(no)->op3->cond5
cond5(yes)->op5
cond5(no)->op4->io
io->op6->cond6
cond6(yes)->op7->e
cond6(no)->op6`;
// start=>start: Ik heb een probleem :$dropOut
// end=>end: Opgelost :$dropOut
// foutmelding=>condition: Heb je een foutmelding :$dropOut
// regel=>operation: Ga naar de aangeven regel :$dropOut
// nee1=>operation: Nee :$dropOut
// typfout=>operation: Typ foutje? :$dropOut
// logica=>operation: Lees de code door. Logica fout? :$dropOut
// zoekop=>operation: Kopieer de foutmelding en zoek het op :$dropOut
// zelfde=>condition: Hebben mensen hetzelfde probleem? :$dropOut
// nee2=>operation: Nee :$dropOut
// probeeroplossing=>operation: Kijk naar hun oplossing en probeer het :$dropOut

// start(right)->foutmelding
// foutmelding(yes)->regel
// regel(right)->typfout(right)->logica
// foutmelding(no)
// regel->zoekop
// zoekop(right)->zelfde
// zelfde(yes)->end

// zelfde(no)->probeeroplossingS
// `;