console.log("siden er loadet");

const artikelContainer = document.querySelector("#aktuelt-liste");


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
    markup += ` <article>
          <img src="img/database/${artikel.img}" alt="image_1" id="${artikel.id}"/>
          <div class="article-info">
            <h2>${artikel.type}</h2>
            <h3>${artikel.manchet}</h3>
            <p>${artikel.info_text}</p>
            <p>Læs mere</p>
          </div>
        </article>`


});
artikelContainer.innerHTML += markup;

}