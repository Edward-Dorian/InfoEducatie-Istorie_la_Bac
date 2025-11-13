const casetaText = document.querySelector("#chat-input");
const trimiteButon = document.querySelector("#send-btn");
const containerConversatie = document.querySelector(".chat-container");
const temaButon = document.querySelector("#theme-btn");
const stergeButon = document.querySelector("#delete-btn");

let textUtilizator = null;
const API_KEY = 'sk-proj-7bIIPtl6N4Hnjgx5AszAT3BlbkFJvar6c3mLAKww2upfWZDa';

const incarcaDateDinStocare = () => {
    const culoareTema = localStorage.getItem("themeColor");

    document.body.classList.toggle("light-mode", culoareTema === "light_mode");
    temaButon.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const textImplicit = `<div class="default-text"><h1>Bun venit!</h1><p>Pune o intrebare iar noi o sa incercam sa iti răspundem prin intermediul inteligenței artificiale</p></div>`;
    containerConversatie.innerHTML = localStorage.getItem("all-chats") || textImplicit;
    containerConversatie.scrollTo(0, containerConversatie.scrollHeight); 
};

const creeazaElementConversatie = (continut, clasa) => {
    const conversatieDiv = document.createElement("div");
    conversatieDiv.classList.add("chat", clasa);
    conversatieDiv.innerHTML = continut;
    return conversatieDiv; 
};

const obtineRaspunsConversatie = async (conversatiePrimitaDiv) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const pElement = document.createElement("p");

  const optiuniCerere = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-0125",
      messages: [{ role: "user", content: textUtilizator }],
      stop: null
    })
  };

  try {
    const raspuns = await fetch(API_URL, optiuniCerere);
    const date = await raspuns.json();

    if (raspuns.ok) {
      pElement.textContent = date.choices[0].message.content;
      conversatiePrimitaDiv.querySelector(".typing-animation").remove();
      conversatiePrimitaDiv.querySelector(".chat-details").appendChild(pElement);
      localStorage.setItem("all-chats", containerConversatie.innerHTML);
      containerConversatie.scrollTo(0, containerConversatie.scrollHeight);
    } else {
      throw new Error(`API Error: ${raspuns.status} - ${raspuns.statusText}`);
    }
  } catch (eroare) {
    pElement.classList.add("error");
    pElement.textContent = `Error: ${eroare.message}`; 
    conversatiePrimitaDiv.querySelector(".typing-animation").remove();
    conversatiePrimitaDiv.querySelector(".chat-details").appendChild(pElement);
    localStorage.setItem("all-chats", containerConversatie.innerHTML);
    containerConversatie.scrollTo(0, containerConversatie.scrollHeight);
  }
};

const copiazaRaspuns = (copiazaButon) => {
  const elementTextRaspuns = copiazaButon.parentElement.querySelector("p");
  navigator.clipboard.writeText(elementTextRaspuns.textContent);
  copiazaButon.textContent = "done";
  setTimeout(() => copiazaButon.textContent = "content_copy", 1000);
};

const afiseazaAnimatieScriere = () => {
  const html = `<div class="chat-content"><div class="chat-details"><div class="typing-animation"><div class="typing-dot" style="--delay: 0.2s"></div><div class="typing-dot" style="--delay: 0.3s"></div><div class="typing-dot" style="--delay: 0.4s"></div></div></div><span onclick="copiazaRaspuns(this)" class="material-symbols-rounded">content_copy</span></div>`;
  const conversatiePrimitaDiv = creeazaElementConversatie(html, "incoming");
  containerConversatie.appendChild(conversatiePrimitaDiv);
  containerConversatie.scrollTo(0, containerConversatie.scrollHeight);
  obtineRaspunsConversatie(conversatiePrimitaDiv);
};

const gestioneazaConversatieIesire = () => {
  textUtilizator = casetaText.value.trim(); 
  if (!textUtilizator) return; 

  casetaText.value = "";
  casetaText.style.height = `${initialInputHeight}px`;

  const html = `<div class="chat-content"><div class="chat-details"><p>${textUtilizator}</p></div></div>`;

  const conversatieIesireDiv = creeazaElementConversatie(html, "outgoing");
  containerConversatie.querySelector(".default-text")?.remove();
  containerConversatie.appendChild(conversatieIesireDiv);
  containerConversatie.scrollTo(0, containerConversatie.scrollHeight);
  setTimeout(afiseazaAnimatieScriere, 500);
};

stergeButon.addEventListener("click", () => {
  if(confirm("Esti sigur ca doresti sa stergi toate mesajele?")) {
      localStorage.removeItem("all-chats");
      incarcaDateDinStocare();
  }
});

temaButon.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeColor", temaButon.innerText);
  temaButon.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

const initialInputHeight = casetaText.scrollHeight;

casetaText.addEventListener("input", () => {   
  casetaText.style.height =  `${initialInputHeight}px`;
  casetaText.style.height = `${casetaText.scrollHeight}px`;
});

casetaText.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      gestioneazaConversatieIesire();
  }
});

incarcaDateDinStocare();
trimiteButon.addEventListener("click", gestioneazaConversatieIesire);


