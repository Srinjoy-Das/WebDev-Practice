const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You Have Agreed with the Payment Terms`;
    }else{
        subResult.textContent = `You Have to Agree with the Payment Terms!!!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You have selected Visa Payment`;
    }else if(masterCardBtn.checked){
        paymentResult.textContent = `You have selected MasterCard Payment`;
    }else if(payPalBtn.checked){
        paymentResult.textContent = `You have selected PayPal Payment`;
    }else{
        paymentResult.textContent = `You have to select Payment System!!!`;
    }

}