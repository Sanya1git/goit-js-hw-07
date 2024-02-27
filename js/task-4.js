const form = document.querySelector(".login-form");
const formObj = {};
const formCheck = (event) =>{
    event.preventDefault();
    const formNew = event.target;

    const emailCheck = formNew.elements.email.value.trim();   
    const passwordCheck = formNew.elements.password.value.trim(); 
   
    if (emailCheck.length < 1 || passwordCheck.length < 1 ) {
      alert('All form fields must be filled in');
    }else{
     formObj.password = passwordCheck;
      formObj.email = emailCheck;  
      console.log(formObj);     
      form.reset();
    }  
}
form.addEventListener("submit", formCheck);