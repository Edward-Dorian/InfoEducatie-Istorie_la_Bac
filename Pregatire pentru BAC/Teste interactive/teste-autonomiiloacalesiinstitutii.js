const intrebari = [
    {
        intrebare: "Ce rol nu aveau obstile organizate de romani (asezate in zone facute de atacurile migratorilor) ?",
        raspuns: [
            { text: "social", correct: true },
            { text: "militar", correct: false },
            { text: "administrativ teritorial", correct: false },
            { text: "de echilibru", correct: false },
        ]
    },
    {
        intrebare: "Maghiarii nu i-au invins pe voievozi, neimpunandu-si astfel autoritatea.:",
        raspuns: [
            
            { text: "Adevarat", correct: false },
            { text: "Fals", correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
        ]
    },
    {
        intrebare: "Legenda Sf. Gerard pomeneste 2 voievodate: cel condus de Ahtum si cel condus de Gyla. Primul avea capitala la Balgrad, iar al doilea avea capitala la Morisena:",
        raspuns: [
            { text: "Adevarat", correct: false },
            { text: "Fals", correct: true },
        ]
    },
    {
        intrebare: "In ce an a fost scris documentul Diploma cavalelilor ioaniti?",
        raspuns: [
            { text: "1247", correct: true },
            { text: "1249", correct: false },
        ]
    },
    
    {
        intrebare: "Diploma cavalelilor ioaniti a fost folosita pentru a extinde teritoriul regatului si influenta catolicismul:",
        raspuns: [
            
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
        ]
    },
    {
        intrebare: "La est de Carpati izvoarele scrise lipsesc, de aceea sunt importante izvoarele arheologice care atesta existenta unor asezari intarite:",
        raspuns: [
            
            
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "Izvoarele lingvistice sunt importante si sunt pastrate in traditia orala:",
        raspuns: [
            
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "Printesa Bizantina Anna Camnena a scris lucrarea Alexiada in care sunt amintiti 2 conducatori locali din secolul XI:",
        raspuns: [
            { text: "Adevarat", correct: false },
            { text: "Fals", correct: true },
            
        ]
    },
    {
        intrebare: "Intre anii 971 - 1204 este atestata Thema Paristrian subordonata administratiei Bizantine:",
        raspuns: [
            
            
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "In 1330, dupa relatiile tensionate dintre Carol Robert de Anjou si Basarb I, acesta din urma a propus regelui o suma de bani ca rescumparare a pacei. Care a fost suma ceruta?",
        raspuns: [
            { text: "5.000 marci de argint", correct: false  },
            { text: "7.000 marci de argint", correct: true },
            { text: "10.000 marci de argint", correct: false },
            { text: "15.000 marci de argint", correct: false },

            
        ]
    },
    {
        intrebare: "In secolul XIII-lea este pomenita in documente bizantine Tara Cavarnel:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            { text: "none", correct: false },
            { text: "none", correct: false },
            
        ]
    },
    {
        intrebare: "In 943 Basarab-Murfatlar il atesta pe Dimitrie conducator:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "In documentul Diploma cavalelilor Ioaniti sunt consemnate voievodatele de la nord de Carpati:",
        raspuns: [
            { text: "Adevarat", correct: false },
            { text: "Fals", correct: true },
            
        ]
    },
    {
        intrebare: "Diploma cavalerilor ioaniti a fost data de regele Bela al IV-lea marelui perceptor Rembal:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "In evul mediu timpuriu spatiu romanesc a fost strabatut de mai multe valuri de migratori veniti din Asia:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "Era proprietatea comuna asupra pasunilor, padurilor si individuala asupra caselor si terenurilor arabile?",
        raspuns: [
            { text: "Da", correct: true },
            { text: "Nu", correct: false },
            
        ]
    },
    {
        intrebare: "Obstile satesti si-au unit fortele si au format uniuni de obsti numite romanii populate de catre istoricul Nicolae Iorga:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "Romaniile populare formate in urma uniunii obstilor satesti s-au unit si au format voievodate si cnezate numite state medievale..",
        raspuns: [
            { text: "Adevarat", correct: false },
            { text: "Fals", correct: true },
            
        ]
    },
    {
        intrebare: "Prin unirea voievodatelor s-au format statele medievale romanesti: Transilvania, Moldova, Dobrogea, Tara Romaneasca:",
        raspuns: [
            { text: "Adevarat", correct: true },
            { text: "Fals", correct: false },
            
        ]
    },
    {
        intrebare: "In lucrarea Gesta Hungarorum din secolul al IX-lea sunt mentionate voievodatele romanesti din spatiul intracarpatic. Care este varianta gresita?",
        raspuns: [
            { text: "voievodatul condus de Glad in Banat", correct: false },
            { text: "voievodatul condus de Menumorut in Crisana", correct: false },
            { text: "voievodatul condus de Gelu pe Somes", correct: false },
            { text: "voievodatul condus de Glad in Crisana", correct: true },
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
        if (raspuns.text.trim() !== '') {
            const button = document.getElementById(`raspuns${index + 1}`);
            const link = button.querySelector('a');
            link.innerHTML = raspuns.text;
            button.dataset.correct = raspuns.correct;
            button.addEventListener("click", selectareRaspuns);
            button.style.display = 'block';
        } else {
            const button = document.getElementById(`raspuns${index + 1}`);
            button.style.display = 'none';
        }
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