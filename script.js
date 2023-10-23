let startWindow = document.querySelector(".start")
let payNowBtn = document.querySelector(".pay-now")
let paymentWindow = document.querySelector(".payment")
let backBtn = document.querySelector("#back");
let form = document.querySelector("form")
let result = document.querySelector(".result")
let resultImg = document.querySelector(".result img")
let paidAmount= document.querySelector(".paid-amount")
let payStatus = document.querySelector(".status")
let transactionId = document.querySelector(".id")
let reciever = document.querySelector(".reciever")

function paymentProcess(name, amountpaid) {
    form.style.display = "none"
    let promise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res({name: name, amount: amountpaid})
        }, 1000);
    })
    promise.then((data)=>{
        resultImg.src = "./success.png"
        paidAmount.innerText = `₹${data.amount}`;
        payStatus.innerText = `Payment success`
        transactionId.innerText = Math.floor(Math.random()*90000000)+10000000
        reciever.innerText = data.name;
        result.style.display = "flex"
    })
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    let amountpaid = e.target.children[1].children[1].value;
    paymentProcess(name, amountpaid)
})

payNowBtn.addEventListener("click", ()=>{
    startWindow.style.display = "none"
    paymentWindow.style.display = "block"
    result.style.display = "none"
    form.style.display = "flex"
})
backBtn.addEventListener("click", () => {
    paymentWindow.style.display = "none";
    startWindow.style.display = "block";
})