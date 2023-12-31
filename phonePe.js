function makePayment(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isPaymentAccepted = Math.random() > 0.5; //I used this to represent 50% chance of being success.
  
        if (isPaymentAccepted) {
          resolve({ message: "Payment iz accepted", amount });
        } else {
          reject({ message: "Payment iz rejected", amount });
        }
      }, 2000); 
    });
}

  function showProcessingUI() {
    console.log("Displaying processing UI similar to PhonePe...");
  }
  
  function showSuccessUI(message, amount) {
    console.log(`Displaying success UI: ${message} - Amount: ${amount}`);
  }
  
  function showFailureUI(message, amount) {
    console.log(`Displaying failure UI: ${message} - Amount: ${amount}`);
  }

  showProcessingUI();
  makePayment(1000)
    .then((result) => {
        showSuccessUI(result.message, result.amount);
    })
    .catch((error) => {
        showFailureUI(error.message, error.amount);
    });
  