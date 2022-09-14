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

const code = `
start=>start: Ik heb een probleem :$dropOut
end=>end: Opgelost :$dropOut
foutmelding=>condition: Heb je een foutmelding :$dropOut
regel=>operation: Ga naar de aangeven regel :$dropOut
nee1=>operation: Nee :$dropOut
typfout=>operation: Typ foutje? :$dropOut
logica=>operation: Lees de code door. Logica fout? :$dropOut
zoekop=>operation: Kopieer de foutmelding en zoek het op :$dropOut
zelfde=>condition: Hebben mensen hetzelfde probleem? :$dropOut
nee2=>operation: Nee :$dropOut
probeeroplossing=>operation: Kijk naar hun oplossing en probeer het :$dropOut

start(right)->foutmelding
foutmelding(yes)->regel
regel(right)->typfout(right)->logica
foutmelding(no)
regel->zoekop
zoekop(right)->zelfde
zelfde(yes)->end

zelfde(no)->probeeroplossingS
`;