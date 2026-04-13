function calculateTotal(amount, taxRate) {
  const tax = amount * taxRate;
  return amount + tax;
}

function applyDiscount(amount, discountPercent) {
  const discount = amount * (discountPercent / 100);
  return amount - discount;
}

function processPayment(amount, paymentMethod) {
  console.log(`Processing ${amount} via ${paymentMethod}...`);

  return {
    status: 'success',
    transactionId: 'TXN' + Math.floor(Math.random() * 1000000),
  };
}

function validateCard(cardNumber) {
  return cardNumber.length === 16;
}

function refundPayment(transactionId, amount) {
  console.log(`Refunding ${amount} for transaction ${transactionId}`);

  return {
    status: 'refunded',
    transactionId,
  };
}

function calculateEMI(amount, months) {
  return amount / months;
}

function getPaymentStatus() {
  const statuses = ['pending', 'success', 'failed'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}
