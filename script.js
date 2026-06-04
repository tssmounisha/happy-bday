function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "2019") {

        document.getElementById("page1").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");

    } else {

        document.getElementById("message").innerHTML =
            "🌱 Hint: Think about our 7th class days";

    }

}

function nextPage(page) {

    for (let i = 2; i <= 11; i++) {

        let currentPage = document.getElementById("page" + i);

        if (currentPage) {
            currentPage.classList.add("hidden");
        }

    }

    document.getElementById("page" + page)
        .classList.remove("hidden");

}
const noBtn = document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover", function(){

let x = Math.random()*250 - 125;
let y = Math.random()*150 - 75;

noBtn.style.transform =
`translate(${x}px, ${y}px)`;

});

}