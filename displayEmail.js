
const userEmail = localStorage.getItem('userEmail');
console.log(userEmail);

const displayMail= document.querySelector('.email_display');
displayMail.textContent=userEmail;