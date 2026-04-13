function createUserProfile(name, email) {
  return {
    id: 'USER' + Math.floor(Math.random() * 100000),
    name,
    email,
    createdAt: new Date(),
  };
}
