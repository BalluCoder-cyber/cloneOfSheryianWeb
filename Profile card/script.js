let form = document.querySelector("form");
let inp = document.querySelectorAll("input");
let body = document.querySelector("body");

form.addEventListener("submit", function (det) {
    det.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile")

    let img = document.createElement("img");
    img.setAttribute("src", inp[0].value)

    let h2 = document.createElement("h2");
    h2.textContent = inp[1].value;

    let h3 = document.createElement("h3");
    h3.textContent = inp[2].value;

    let p = document.createElement("p");
    p.textContent = inp[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);

    body.appendChild(card);

    inp.forEach(function(val){
        if(val.type !== "submit"){
            val.value ="";
        }

    })




});



