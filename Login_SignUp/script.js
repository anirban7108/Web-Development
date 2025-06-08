const container=document.querySelector('.container');
const btnRegister=document.querySelector('.btnRegister');
const btnLogin=document.querySelector('.btnLogin');

btnRegister.addEventListener('click',()=>{
    container.classList.add('active');
})

btnLogin.addEventListener('click',()=>{
    container.classList.remove('active');
})