/*Új játék gombra kattintva megjelenítjül a játékteret
1. meg kell fogni a gombot es a jatekteret
2. Rátesszük az eseménykezelőt a gombra
3. beleirjuk a megfelelo html kodot
*/
const ujJatekGomb=document.querySelector("#ujjatek")
const jatekterElem = document.querySelector(".jatekter")
ujJatekGomb.addEventListener("click" , function megjelenit(){
    const htmlKod = `
    <div id="gep">
            <h2>A gép tippje</h2>
            <div class="kep">
                <img src="kepek/kerdojel.webp" alt="kopapirollo">
            </div>
        </div>
        <div id="jatekos">
            <h2>A játékos tippje</h2>
            <div class="gombok">
                <button class="gomb">K</button>
                <button class="gomb">P</button>
                <button class="gomb">O</button>
            </div>
            <div class="kep">
                <img src="kepek/kerdojel.webp" alt="kopapirollo">
            </div>
    </div>
    `
    jatekterElem.innerHTML=""
    jatekterElem.insertAdjacentHTML("beforeend",htmlKod)
    const jatekGombok= document.querySelectorAll(".gombok button")
    jatekGombok[0].addEventListener("click", function kivalaszt(){
        console.log(Event.target.id)

    })

})