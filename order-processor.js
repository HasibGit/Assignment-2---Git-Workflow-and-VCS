function createOrder(userId, items) {
  return {
    orderId: `ORD-${Date.now()}`,
    userId,
    items,
    status: 'CREATED',
    createdAt: new Date(),
  };
}
