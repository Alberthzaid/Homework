
const btn_1 = document.querySelector('.Encriptar')
const btn_2 = document.querySelector('.Desencriptar')
const app = document.querySelector('.Result')

btn_1.addEventListener('click',(e)=>{
    e.preventDefault()
    const text = document.querySelector('#user').value
    const text_Encrip = 
    text.replace(/a/gi,'ai')
    .replace(/e/gi,'enter')
    .replace(/i/gi,'imes')
    .replace(/o/gi,'ober')
    .replace(/u/gi,'ufat')
    app.innerHTML= text_Encrip
    
})

btn_2.addEventListener('click', (e)=>{
    e.preventDefault()
    const text = document.querySelector('#user').value
    const text_Desencrip= 
    text.replace(/ai/gi,'a')
    .replace(/enter/gi,'e')
    .replace(/imes/gi,'i')
    .replace(/ober/gi,'o')
    .replace(/ufat/gi,'u')
    app.innerHTML= text_Desencrip
    
})