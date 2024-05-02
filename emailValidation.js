
const email = document.getElementById('email');
const submitBtn = document.querySelector('.submit_btn');
const errorMessage = document.querySelector('.error_message');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const display= document.querySelector('.email_display');

   

if(submitBtn){
    submitBtn.addEventListener('click', (e) => {
        if (!email.value.match(mailformat)) {
            errorMessage.style.display = 'block';
            email.classList.add('error');
            e.preventDefault();
           
        } else {
            errorMessage.style.display = 'none';
            email.classList.remove('error');
            
          
        
        }
    
       
        
    });
}


