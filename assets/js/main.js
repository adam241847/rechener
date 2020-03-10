let einzel = document.getElementById("einzel")
let ESt;
function toggleInput() {
    let zvE2Container = document.getElementById("zvE2-container");
    einzel.checked ? zvE2Container.style.display = "none" : zvE2Container.style.display = "block"
}

function rechnen() {
    console.log("test")
    let jahr = document.getElementById("jahr")
    if (jahr.value == 2020) {
        rechnen2020()
    } else if (jahr.value == 2019) {
        rechnen2019()
    } else if (jahr.value == 2018) {
        rechnen2018()
    }
    document.getElementById("result").innerHTML = ESt.toFixed(2)
}
function rechnen2020() {
    let zvE;
    let zvE1 = document.getElementById("zvE1").value;
    let zvE2 = document.getElementById("zvE2").value;

    einzel.checked ? zvE = zvE1 : zvE = (parseInt(zvE1) + parseInt(zvE2)) / 2

    if (zvE <= 9408) {
        ESt = 0;
    } else if (zvE >= 9409 && zvE <= 14532) {
        let y = (zvE - 9408) / 10000
        ESt = (972.87 * y + 1400) * y
    } else if (zvE >= 14533 && zvE <= 57051) {
        let z = (zvE - 14532) / 10000
        ESt = (212.02 * z + 2397) * z + 972.79
    } else if (zvE >= 57052 && zvE <= 270500) {
        ESt = 0.42 * zvE - 8963.74;
    } else if (zvE >= 270501) {
        ESt = 0.45 * zvE - 17078.74
    }
    einzel.checked ? ESt = ESt : ESt = 2 * ESt
    return ESt;
}

function rechnen2019() {
    console.log("to be written")
}
function rechnen2018() {
    console.log("to be written")
}

