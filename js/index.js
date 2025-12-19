console.log("siden er loadet");

const artikelContainer = document.querySelector("#aktuelt-preview");


const url = "https://utdovsfxcjvyqxdwojfc.supabase.co"
const key = "sb_publishable_kQdbXNLrZ7vyASnl_6u_yA_mEakneMj"

fetch(url+"/rest/v1/aktuelt", {
    method: "GET",
    headers: {
        apikey:key
    }
})
.then(res=>res.json())
.then(showData)

function showData(data){
console.log(data)
let markup = "";

data.forEach(artikel=> {
    markup += ` <article class="preview_card">
          <a href="aktuelt.html#${artikel.id}">
                
                    <img src="img/database/${artikel.img}" alt="${artikel.alt_text}" class="preview_img"/>
                    <img src="img/grafik/understreg_gul.png" alt="gul grafisk streg" class="streg"/>
                    <h2 class="preview_type">${artikel.type}</h2>
                    <h4 class="preview_manchet">${artikel.manchet}</h4>
                    <p class="read-more">Læs mere</p>
                
          </a>
        </article>`


});
artikelContainer.innerHTML += markup;

}