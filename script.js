let btn = document.querySelector(".generate-bill-btn")
let billAmount = document.querySelector('#bill-amount');
let numberofPeopleInput = document.querySelector(".no-of-people");
let eachpersonBill  = document.querySelector(".each-person-bill span");
let totalTipAmount = document.querySelector(".tip-container");
let totalAmount = document.querySelector(".tip-amount span");
let totalValue = document.querySelector(".total span");
let billtip
btn.addEventListener("click",function(){   
    let billAmountValue = parseInt(billAmount.value)
    const noofpeople  = parseInt(numberofPeopleInput.value);
    let tipamount;
    let total;
    if (billtip){
         tipamount  =  (billAmountValue * billtip/100);
        billAmountValue+= (billAmountValue * billtip/100);
    }
    totalAmount.innerHTML= tipamount ? parseInt(tipamount):0;
    const eachpersonbillValue = billAmountValue / noofpeople;
    eachpersonBill.innerHTML= (eachpersonbillValue).toFixed(2);
    totalValue.innerHTML =  billAmountValue;
 
})
totalTipAmount.addEventListener("click",(e)=>{
    Array.from(totalTipAmount.children).forEach(element => {
        element.classList.remove("selected")
    });
    e.target.classList.add("selected")
    let billAmountValue = parseInt(billAmount.value)
    billtip= parseInt(e.target.innerHTML);
})
function reset(){
    billAmount.value=='';
}
// function tip(amt){
//     console.log(amt,'amt')
//     let amount = parseInt(amt)
// }
