console.log("siden er loadet");

const artikelContainer = document.querySelector("#kalender");


const url = "https://utdovsfxcjvyqxdwojfc.supabase.co"
const key = "sb_publishable_kQdbXNLrZ7vyASnl_6u_yA_mEakneMj"

fetch(url+"/rest/v1/kalender", {
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
    markup += `  <article class="kalender-card">
          <h3 class="kalender_text">${artikel.type}</h3>
          <ul>
            <li class="kalender_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
                class="footer_svg"
              >
                <path
                  d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"
                ></path>
              </svg>
              ${artikel.dato}
            </li>
            <li class="kalender_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
                class="footer_svg"
              >
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                ></path>
              </svg>
              ${artikel.tid}
            </li>
            <li class="kalender_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
                class="footer_svg"
              >
                <path
                  d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"
                ></path>
              </svg>
              ${artikel.sted}
            </li>
          </ul>
        </article>`


});
artikelContainer.innerHTML += markup;

}