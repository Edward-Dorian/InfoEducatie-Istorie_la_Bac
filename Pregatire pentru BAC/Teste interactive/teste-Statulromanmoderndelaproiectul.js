const intrebari = [
    {
        intrebare: "Proclamatia cu continut national, politic si social care cuprinde principalele revendicari si obiective ale unei miscari politice se numeste:",
        raspuns: [
                { text: "Tratat", correct: false },
                { text: "Constitutie", correct: false },
                { text: "Document programatic", correct: true },
            ]
        },
        {
            intrebare: "Domniile fanariote au fost inaugurate in Moldova si Tara Romaneasca de catre Imperiul Otoman in:",
            raspuns: [
                
                { text: "1711 in Moldova si 1716 in Tara Romaneasca", correct: true },
                { text: "1712 Moldova si 1716 Tara Romaneasca", correct: false },
                
                { text: "1716 Moldova si 1711 in Tara Romaneasca", correct: false },
            ]
        },
        {
            intrebare: "Eteria, organizatie secreta greceasca condusa de:",
            raspuns: [
                { text: "Tudor Vladimirescu", correct: false },
                { text: "Alexandru Ipsilanti", correct: true },
                { text: "Ionita Sturdza", correct: false },
                
            ]
        },
        {
            intrebare: "Constitutia Carvunarilor a fost elaborata de Ionica Tautu in anul:",
            raspuns: [
                { text: "1821", correct: false },
                { text: "1822", correct: true },
                { text: "1823", correct: false },
            ]
        },
        {
            intrebare: "Trecerea in proprietatea statului a pamanturilor Bisericii se numeste:",
            raspuns: [
                { text: "Secularizare", correct: true },
                { text: "Nationalizare", correct: false },
                
                { text: "Colectivizare" , correct: false },
            ]
        },
        {
            intrebare: "Razboiul ruso-otoman cunoscut sub numele de Razboiul din Crimeea a avut loc in perioada:",
            raspuns: [
                
                { text: "1877 - 1878", correct: false },
                { text: "1853 - 1856", correct: true },
                { text: "1852 - 1856 ", correct: false },
                
            ]
        },
        {
            intrebare: "Acceptarea de catre puterile garante a unificarii depline a Moldovei cu Tara Romaneasca realizate de Alexandru Ioan Cuza a avut loc in anul:",
            raspuns: [
                
                
                { text: "1863", correct: false },
                { text: "1862", correct: true },
                { text: "1861", correct: false },
                
            ]
        },
        {
            intrebare: "Declaratia de independenta a Romaniei a fost citita la 9 mai 1877 in Parlamentul Romaniei de catre ministrul de externe:",
            raspuns: [
                
                
                { text: "1596", correct: false },
                { text: "1597", correct: false },
                { text: "1598", correct: true },
            ]
        },
        {
            intrebare: "Domnia lui Constantin Brancoveanu este cuprinsa in perioada:",
            raspuns: [
                
                
                { text: "Mihail Kogalniceanu", correct: true },
                { text: "Ion I C Bratianu", correct: false },
                { text: "Lascar Catargiu", correct: false },
                
            ]
        },
        {
            intrebare: "Prin Constitutia din 1866 se instituie:",
            raspuns: [
                
                
                { text: "monarhia totalitara ereditara", correct: false },
                { text: "monarhia autoritara ereditara", correct: true },
                { text: "monarhia constitutionala ereditara", correct: false },
                
            ]
        },
        {
            intrebare: "Rezolutia Unirii care proclama unirea Transilvaniei, Banatului, Maramuresului si Crisanei cu Romania a fost citita de:",
            raspuns: [
                
                
                { text: "Regele Ferdinand I", correct: false },
                { text: "Vasile Goldis", correct: true },
                { text: "Iancu Flondor", correct: false },
                
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