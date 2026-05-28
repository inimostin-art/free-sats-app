let balance = 0;

function claim() {

    let reward = 5;

    balance += reward;

    document.getElementById("balance")
    .innerText = balance + " sats";

    alert("You earned " + reward + " sats!");
}