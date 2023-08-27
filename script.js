// const container=document.querySelector(".container"),
//     privacy=container.querySelector(".privacy"),
//     arrowBack=container.querySelector(".arrow-back");


//     privacy.addEventListener("click",() =>{
//         container.classList.add("active");

//     });

//     arrowBack.addEventListener("click",() =>{
//         container.classList.remove("active");

//     });

// var btn1=document.querySelector('.like1');

// btn1.onclick=function(){
//      btn1.style.color="blue"
// }  
// var btn2=document.querySelector('.like2');

// btn2.onclick=function(){
//      btn2.style.color="blue"
// }   
// var btn3=document.querySelector('.like3');

// btn3.onclick=function(){
//      btn3.style.color="blue"
// }   
// var btn4=document.querySelector('.like4');

// btn4.onclick=function(){
//      btn4.style.color="blue"
// }   
// var btn5=document.querySelector('.like5');

// btn5.onclick=function(){
//      btn5.style.color="blue"
// } 


const btn=document.querySelectorAll('.like1')
for(let i of btn)
{
     console.log(i);
     i.addEventListener('click',function(){
          i.style.color="blue";
     });
}
let requests = document.querySelector('#button-block');
let req=document.querySelector('.all-requests')
let deleterequest = document.getElementById('delete');
deleterequest.addEventListener('click', ()=>{
  req.remove();
  
})

let confirmrequest = document.getElementById('confirm');
confirmrequest.addEventListener('click', ()=>{
  deleterequest.style.display = 'none';
  confirmrequest.innerHTML = "Confirmed";
})