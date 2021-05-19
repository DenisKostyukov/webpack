function user (name, surname){
  const user = document.createElement('h2');
  user.textContent = `${name} ${surname}`;
  return user;
}
export default user;