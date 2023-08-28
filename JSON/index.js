const urls="index.json"
const h1=document.querySelector("h1")
const butt=document.querySelector("button")
const cont=document.querySelector(".title")
async function fetchapi(url){
    const response=await fetch(url)
    const data=await response.json()
    return data
}
function createHeroElement(hero) {
    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");

    const nameH1 = document.createElement("h1");
    nameH1.textContent = hero.name;

    const ageH2 = document.createElement("h2");
    ageH2.textContent = `Age: ${hero.age}`;

    const powersP = document.createElement("p");
    powersP.textContent = `Powers: ${hero.powers.join(", ")}`;

    heroDiv.appendChild(nameH1);
    heroDiv.appendChild(ageH2);
    heroDiv.appendChild(powersP);

    return heroDiv;
}
async function populatedom() {
    const data = await fetchapi(urls);
    
    for (const hero of data.members) {
        const heroElement = createHeroElement(hero);
        cont.appendChild(heroElement);
    }
}
butt.addEventListener("click",populatedom)
