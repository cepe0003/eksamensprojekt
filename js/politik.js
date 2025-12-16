console.log("siden er loadet");

const artikelContainer = document.querySelector("#politik-liste");

const url = "https://utdovsfxcjvyqxdwojfc.supabase.co"
const key = "sb_publishable_kQdbXNLrZ7vyASnl_6u_yA_mEakneMj"

fetch(url+"/rest/v1/politik", {
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
    markup += ` <article class="article_card">
          <img src="img/database/${artikel.img}" alt="${artikel.alt_text}" class="article_img"/>
          <div class="article_info">
            <h2 class="article_type">${artikel.type}</h2>
            <h4 class="article_manchet">${artikel.manchet}</h4>
            <p>${artikel.info_text}</p>
            <details>
                <summary class="article_summary">Læs mere</summary>
                <p class="article_extra">${artikel.extra_text}</p>
            </details>
        </div>
        </article>`


});
artikelContainer.innerHTML += markup;