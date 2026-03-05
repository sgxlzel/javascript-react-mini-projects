function showFields() {
    document.getElementById("card").style.display = "none";
    document.getElementById("upi").style.display = "none";
    document.getElementById("netbanking").style.display = "none";

    let mode = document.getElementById("paymentMode").value;
    if (mode) {
        document.getElementById(mode).style.display = "block";
    }
}

function makePayment() {
    let mode = document.getElementById("paymentMode").value;
    let message = document.getElementById("message");

    if (mode === "") {
        message.innerHTML = "❌ Please select a payment method";
        message.style.color = "red";
        return;
    }

    if (mode === "card") {
        let cardNumber = document.getElementById("cardNumber").value;
        let cvv = document.getElementById("cvv").value;

        if (cardNumber.length !== 16 || cvv.length !== 3) {
            message.innerHTML = "❌ Invalid card details";
            message.style.color = "red";
            return;
        }
    }

    if (mode === "upi") {
        let upi = document.getElementById("upiId").value;
        if (!upi.includes("@")) {
            message.innerHTML = "❌ Invalid UPI ID";
            message.style.color = "red";
            return;
        }
    }

    if (mode === "netbanking") {
        let bank = document.getElementById("bank").value;
        if (bank === "") {
            message.innerHTML = "❌ Please select a bank";
            message.style.color = "red";
            return;
        }
    }

    message.innerHTML = "✅ Payment Successful! Thank you for shopping.";
    message.style.color = "green";
}
