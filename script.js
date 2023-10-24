let startWindow = document.querySelector(".start");
let payNowBtn = document.querySelector(".pay-now");
let paymentWindow = document.querySelector(".payment");
let backBtn = document.querySelector("#back");
let form = document.querySelector("form");
let result = document.querySelector(".result");
let loader = document.querySelector(".loader");
let nav = document.querySelector(".nav");

function paymentProcess(name, amountpaid) {
  form.style.display = "none";
  nav.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    let promise = new Promise((res, rej) => {
      let payment = Math.random() < 0.5;
      if (payment) {
        res({ name: name, amount: amountpaid });
      } else {
        rej({ name: name, amount: amountpaid });
      }
    });
    promise
      .then((data) => {
        result.innerHTML = `
            <img src="./success.png" alt="">
            <h1 class="paid-amount">₹${data.amount}</h1>
            <h3 class="status">Payment Success</h3>
            <p class = transaction>Transaction ID: <span class="id">${
              Math.floor(Math.random() * 90000000) + 10000000
            }</span></p>
            <h2>Paid to: <span class="reciever">${data.name}</span></h2>
            <p class = "byapp">Google Pay</p>
            <button class="reset" onclick="window.location.reload()">make other payment</button>`;
        result.querySelector(".status").style.color = "green";
      })
      .catch((data) => {
        result.innerHTML = `
        <img src="./fail.png" alt="">
        <h1 class="paid-amount">₹${data.amount}</h1>
        <h3 class="status">Payment Failed</h3>
        <p class = transaction>Transaction ID: <span class="id">${
          Math.floor(Math.random() * 90000000) + 10000000
        }</span></p>
        <p class = "byapp">Google Pay</p>
        <button class="reset" onclick="window.location.reload()">try again</button>`;
        result.querySelector(".result img").style.width = "30%";
        result.querySelector(".result img").style.margin = "2rem";
        result.querySelector(".status").style.color = "red";
      });
    result.style.display = "flex";
    loader.style.display = "none";
    nav.style.display = "none";
  }, Math.floor(Math.random()*2000)+1000);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.children[0].children[1].value;
  let amountpaid = e.target.children[1].children[1].value;
  paymentProcess(name, amountpaid);
});

payNowBtn.addEventListener("click", () => {
  startWindow.style.display = "none";
  paymentWindow.style.display = "block";
  result.style.display = "none";
  form.style.display = "flex";
});
backBtn.addEventListener("click", () => {
  paymentWindow.style.display = "none";
  startWindow.style.display = "block";
});
