function createOrder(userId, items) {
  return {
    orderId: `ORD-${Date.now()}`,
    userId,
    items,
    status: 'CREATED',
    createdAt: new Date(),
  };
}

function calculateOrderTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function applyDiscount(total, discountPercent) {
  if (discountPercent <= 0) return total;
  return total - (total * discountPercent) / 100;
}

function processPayment(order, paymentMethod) {
  console.log(`Processing payment via ${paymentMethod}...`);
  return {
    success: true,
    transactionId: `TXN-${Date.now()}`,
  };
}
