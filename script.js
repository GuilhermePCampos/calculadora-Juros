const eInitialValue = document.getElementById("initial-value");
const eFee = document.getElementById("fee");
const eTime = document.getElementById("time");
const eTotal = document.getElementById("total");
const feeType = document.getElementsByName("radioFee");
function jurosCompostos() {
    const value = eInitialValue.value;
    const fee = eFee.value / 100;
    const time = eTime.value;
    return value * (1 + fee) ** time;
}

function jurosSimples() {
    const value = eInitialValue.value;
    const fee = eFee.value / 100;
    const time = eTime.value;
    const juros = value * fee * time;
    return Number(value) + juros;
}

document.getElementById("calculate").addEventListener("click", function(){
    const feeTypeSelected = document.querySelector('#feeType input[name="radioFee"]:checked').value;  
    const total = feeTypeSelected == 0 ? jurosSimples() : jurosCompostos();
    eTotal.innerHTML = ("R$" + total.toFixed(2).replace(".", ","));
    // // eTotal.innerHTML = ("R$" + jurosCompostos().toFixed(2).replace(".", ","));
});
