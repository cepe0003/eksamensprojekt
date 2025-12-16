console.log("siden er loadet");

const oversigtContainer = document.querySelector("#politik_oversigt");

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

data.forEach(oversigt=> {
    markup += ` <a href="${oversigt.id}">${oversigt.type}</a>
    `


});
oversigtContainer.innerHTML += markup;

}