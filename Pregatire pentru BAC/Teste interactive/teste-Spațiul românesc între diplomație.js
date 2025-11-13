const intrebari = [
    {
        intrebare: "Documentul incheiat intre Tarile Romane si Imperiul Otoman care prevedea obligatiile si statutul acestora in raport cu Poarta se numeste:",
        raspuns: [
                { text: "tratat", correct: false },
                { text: "raia", correct: false },
                { text: "capitulatie", correct: true },
            ]
        },
        {
            intrebare: "Primul domnitor care a luptat impotriva ostilor otomane pe teritoriul tarii sale a fost:",
            raspuns: [
                
                { text: "Mircea cel Batran", correct: true },
                { text: "Vlad Tepes", correct: false },
                
                { text: "Iancu de Hunedoara", correct: false },
            ]
        },
        {
            intrebare: "Stefan cel Mare a fost domnitor al Moldovei in perioada:",
            raspuns: [
                { text: "1457 - 1504", correct: true },
                { text: "1456 - 1504", correct: false },
                { text: "1457 - 1501", correct: false },
            ]
        },
        {
            intrebare: "Primul domnitor al Tarilor Romane care a dus o politica de cruciada antiotomana a fost:",
            raspuns: [
                { text: "Mircea cel Batran", correct: true },
                { text: "Vlad Tepes", correct: false },
                { text: "Iancu de Hunedoara", correct: false },
            ]
        },
        {
            intrebare: "Batalia de la Vaslui (Podul Inalt) unde Stefan cel Mare a obtinut o stralucita victorie impotriva Imperiului Otoman a avut loc in anul:",
            raspuns: [
                { text: "1477", correct: false },
                { text: "1476", correct: false },
                { text: "1475" , correct: true },
            ]
        },
        {
            intrebare: "Perioada de declin in care a intrat Imperiul Otoman de la sfarsitul secolului al XVIII lea se numeste:",
            raspuns: [
                
                { text: "destramarea Imperiului Otoman", correct: false },
                { text: "Criza Orientala", correct: true },
                { text: "uniunea nationala", correct: false },
                
            ]
        },
        {
            intrebare: "Domnia lui Mihai Viteazul in Tarile Romane a fost in perioada:",
            raspuns: [
                
                
                { text: "1593 - 1601", correct: true },
                { text: "1594 -1601", correct: false },
                { text: "1593 -1602", correct: false },
                
            ]
        },
        {
            intrebare: "Mihai Viteazul a incheiat tratatul de alianta antiotomana la Manastirea Dealu cu imparatul romano-german Rudolf al II-lea de Habsburg in anul:",
            raspuns: [
                
                
                { text: "1596", correct: false },
                { text: "1597", correct: false },
                { text: "1598", correct: true },
            ]
        },
        {
            intrebare: "Domnia lui Constantin Brancoveanu este cuprinsa in perioada:",
            raspuns: [
                
                
                { text: "1688 - 1714", correct: true },
                { text: "1688 - 1715", correct: false },
                { text: "1689 - 1714", correct: false },
                
            ]
        },
        {
            intrebare: "Dupa actiunile de politica antiotomana desfasurate de Constantin Brancoveanu si Dimitrie Cantemir, Imperiul Otoman a instaurat in Tara Romaneasca si Moldova domniile:",
            raspuns: [
                
                
                { text: "pamantene", correct: false },
                { text: "fanariote", correct: true },
                { text: "suzerane", correct: false },
                
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