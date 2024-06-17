var maxResult = 20;
var compteur = 0;

window.addEventListener("keydown", function(event) {
    if (event.key == "Enter" && parseInt(document.querySelector("input[type='number']").value) >= 0) {
		document.getElementById("button").click();
    }
})

function StartGame() {
    maxResult = document.getElementById("maxResult").value;
    if (maxResult == "") {
        return;
    }

    document.querySelector("body").innerHTML = `
    <p class="Message"></p>
    <section>
        <div class="calcul">
            <h1 class="nb1"></h1>
            <h1 class="op">+</h1>
            <h1 class="nb2"></h1>
        </div>
        <h2>Donner la réponse</h2>
        <input type="number" class="res">
        <input class="link" type="submit" onclick="verifier()" value="Valider">
    </section>
    <p class="score"></p>
    <a href="index.html" class="link">Recommencer</a>
    <button onclick="location.reload();">Recommencer</button>`;

    random1 = Math.random()*(maxResult+1) << 0;
    random2 = Math.random()*(maxResult+1) << 0;

    while (random1 + random2 > maxResult) {
        random1 = Math.random()*(maxResult+1) << 0;
        random2 = Math.random()*(maxResult+1) << 0;
    }

    var nb1 = document.querySelector(".nb1");
    var nb2 = document.querySelector(".nb2");

    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
}

function verifier(){
    var nb1 = document.querySelector(".nb1");
    var nb2 = document.querySelector(".nb2");
    var Message = document.querySelector(".Message");
    var score = document.querySelector(".score");
    var link = document.querySelector(".link");
    var section = document.querySelector("section");

    var res = document.querySelector(".res").value;
    if (res == "") {
        return;
    }
    
    
    if (random1 + random2 == res){
        Message.style.background = "green";
        Message.innerHTML = "Correcte";

        random1 = Math.random()*(maxResult+1) << 0;
        random2 = Math.random()*(maxResult+1) << 0;

        while (random1 + random2 > maxResult) {
            random1 = Math.random()*(maxResult+1) << 0;
            random2 = Math.random()*(maxResult+1) << 0;
        }
            
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        document.querySelector(".res").value = "";
        

        compteur += 1;
    
    }else{
        Message.style.background = "red";
        Message.innerHTML = "Vous avez perdu !";
        section.innerHTML = " ";
        score.innerHTML = `Score <br><span>${compteur}</span>`;
        link.style.display = "block";
    }
}