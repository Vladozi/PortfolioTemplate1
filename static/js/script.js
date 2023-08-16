var icon = document.querySelector('.menu-con')

icon.addEventListener("click",function(){
   var menu = document.querySelector('.main-nav') 
    menu.classList.toggle('close')
    
    

})

function Change(x){
    x.classList.toggle('change')
}