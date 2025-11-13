const intrebari = [
    {
        intrebare: "Daco-getii au reprezentat ramura:",
        raspuns: [
            { text: "nordica a tracilor", correct: true },
            { text: "sudica a tracilor", correct: false },
            { text: "nordica a slavilor", correct: false },
        ]
    },
    {
        intrebare: "Procesul etnogenezei romanesti care a stat la baza formarii poporului roman s-a incheiat la:",
        raspuns: [
            
            { text: "Sfarsitul secolului al VII-lea si la inceputul secolului al IX-lea", correct: false },
            { text: "Sfarsitul secolului al VIII-lea si inceputul secolului al IX-lea", correct: true },
            { text: "Sfarsitul secolului al IX-lea si la inceputul secolului al X-lea", correct: false },
        ]
    },
    {
        intrebare: "Rezultatul procesului istoric al romanizarii a constat in formarea unui nou popor:",
        raspuns: [
            { text: "cel al daco-romanilor", correct: true },
            { text: "cel geto-dacic", correct: false },
            { text: "cel roman", correct: false },
        ]
    },
    {
        intrebare: "Dupa abandonarea Daciei de romani in urma retragerii aureliene din anul 271/275, procesul de romanizare a continuat ca urmare a:",
        raspuns: [
            { text: "legaturilor cu dacii liberi", correct: false },
            { text: "legaturilor cu noul val al popoarelor migratoar", correct: false },
            { text: "legaturilor cu Imperiul Roman", correct: true },
        ]
    },
    {
        intrebare: "Romanitatea romanilor a devenit un subiect de controversa istorica la sfarsitul secolului:",
        raspuns: [
            { text: "al VIII-lea", correct: false },
            { text: "al XVIII-lea", correct: true },
            { text: "al XIX-lea" , correct: false },
        ]
    },
    {
        intrebare: "Disputa in jurul romanitatii si a continuitatii romanilor s-a desfasurat din secolul al XVIII-lea din motive:",
        raspuns: [
            
            { text: "religioase", correct: false },
            { text: "imigrationiste", correct: false },
            { text: "politice", correct: true },
        ]
    },
    {
        intrebare: "În secolul al XIX-lea, in conditiile anexarii Transilvaniei la Ungaria, dupa transformarea Imperiului Habsburgic in Imperiul Austro-Ungar (1867), Robert Roesler a dezvoltat:",
        raspuns: [
            
            
            { text: "teoria imigrationista", correct: true },
            { text: "teoria continuitatii", correct: false },
            { text: "teoria autohtonista", correct: false },
        ]
    },
    {
        intrebare: "Teoria continuitatii romanilor in spatiul carpato-danubiano-pontic a fost sustinuta si dezvoltata, cu argumente istorice, lingvistice si arheologice, de istorici precum:",
        raspuns: [
            
            
            { text: "Reprezentantii Scolii Ardelene", correct: false },
            { text: "Gh. Sincai, P. Maior si Samuil Micu", correct: false },
            { text: "B.P. Hasdeu, Dimitrie Onciul si A.D. Xenopol", correct: true },
        ]
    },
    {
        intrebare: "Limba romana face parte din familia limbilor:",
        raspuns: [
            
            
            { text: "romanice, neolatine", correct: true },
            { text: "romanice, indo-europene", correct: false },
            { text: "slave, tracice", correct: false },
            
        ]
    },
    {
        intrebare: "Slavii ajung pe teritoriul Daciei in numar foarte mare in:",
        raspuns: [
            
            
            { text: "secolul al VI-lea iHr", correct: false },
            { text: "secolul al VI-lea dHr", correct: true },
            { text: "secolul al V-lea dHr", correct: false },
            
        ]
    },
];

const intrebareElement = document.getElementById("intrebare");
const butoaneRaspuns = document.getElementById("butoaneRaspuns");
const continua = document.getElementById("continua");

let intrebareCurentaIndex = 0;
let punctaj = 0;

function examen(){
    intrebareCurentaIndex = 0;
    punctaj = 0;
    continua.innerHTML = "Continua";
    continua.innerHTML = "<span style='position: relative; z-index: 99;'>Continua</span>";
    continua.style.display = "none";
    arataintrebare();
}

function arataintrebare() {
    resetare();
    let intrebareCurenta = intrebari[intrebareCurentaIndex];
    let nrintrebare = intrebareCurentaIndex + 1;
    intrebareElement.innerHTML = nrintrebare + ". " + intrebareCurenta.intrebare;

    intrebareCurenta.raspuns.forEach((raspuns, index) => {
        const button = document.getElementById(`raspuns${index + 1}`);
        const link = button.querySelector('a');
        link.innerHTML = raspuns.text;
        button.dataset.correct = raspuns.correct;
        button.addEventListener("click", selectareRaspuns);
    });
}

function resetare(){
    continua.style.display = "none";
    Array.from(butoaneRaspuns.children).forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.classList.add("raspuns2");
        button.disabled = false;
    });
}

function selectareRaspuns(e){
    const raspunsSelectat = e.target;
    const raspunsSelectatCorect = raspunsSelectat.dataset.correct === "true";
    if(raspunsSelectatCorect){
        raspunsSelectat.classList.add("correct"); 
        punctaj++;
    }else{
        raspunsSelectat.classList.add("incorrect");
    }
    Array.from(butoaneRaspuns.children).forEach(button => {
        button.disabled = true;
        button.classList.remove("raspuns2");
    });
    continua.style.display = "block";
}
continua.addEventListener("click", () => {
    intrebareCurentaIndex++;
    if (intrebareCurentaIndex < intrebari.length) {
        arataintrebare();
    } else {
        arataRezultate();
    }
});

function arataRezultate() {
    resetare();
    intrebareElement.innerHTML = `Ai terminat! Scorul tău este ${punctaj} din ${intrebari.length}.`;
    continua.innerHTML = "Reîncepe";
    continua.innerHTML = "<span style='position: relative; z-index: 99;'>Reîncepe</span>";
    continua.style.display = "block";
    continua.addEventListener("click", examen);
}

examen();