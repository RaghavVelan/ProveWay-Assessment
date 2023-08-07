

function checkRadioBtn1(){
    const card1 = document.querySelector(".card1")
    const card2 = document.querySelector(".card2")
    const card3 = document.querySelector(".card3")
    const radioBtn = document.querySelector(".radioBtn1")
    const info1 = document.querySelector(".additional-info1")
    const info2 = document.querySelector(".additional-info2")
    const info3 = document.querySelector(".additional-info3")
   
   radioBtn.setAttribute('checked', 'true');

    
    if(radioBtn.checked){
       info1.classList.add('show-info')
       card1.classList.add('selected');
       card2.classList.remove('selected');
       card3.classList.remove('selected');
       info2.classList.remove('show-info')
       info3.classList.remove('show-info')
    }

    return
}



function checkRadioBtn2(){
    const card1 = document.querySelector(".card1")
    const card2 = document.querySelector(".card2")
    const card3 = document.querySelector(".card3")
    const radioBtn = document.querySelector(".radioBtn2")
    const info1 = document.querySelector(".additional-info1")
    const info2 = document.querySelector(".additional-info2")
    const info3 = document.querySelector(".additional-info3")
   
    radioBtn.setAttribute('checked', 'true');


    if(radioBtn.checked){
        info2.classList.add('show-info')
        card2.classList.add('selected');
        card1.classList.remove('selected');
        card3.classList.remove('selected');
        info1.classList.remove('show-info')
        info3.classList.remove('show-info')
     }

     return
 }



 function checkRadioBtn3(){
    const card1 = document.querySelector(".card1")
    const card2 = document.querySelector(".card2")
    const card3 = document.querySelector(".card3")
    const radioBtn = document.querySelector(".radioBtn3")
    const info1 = document.querySelector(".additional-info1")
   const info2 = document.querySelector(".additional-info2")
   const info3 = document.querySelector(".additional-info3")
    
   radioBtn.setAttribute('checked', 'true');


    if(radioBtn.checked){
         info3.classList.add('show-info')
         card3.classList.add('selected');
         card1.classList.remove('selected');
         card2.classList.remove('selected');
         info1.classList.remove('show-info')
         info2.classList.remove('show-info')
     }

     return
 }