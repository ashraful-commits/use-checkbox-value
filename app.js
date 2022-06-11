const submit = document.getElementById('submit');
const output = document.querySelector('.output');
const totalPrice = document.querySelector('#price');


// form submit 
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let fruit = document.querySelectorAll('input[name="gender"]');
    let ul=document.createElement('ul');

    // amount how much 
    let num = document.querySelectorAll('.num');
    let amount_num = [];
    num.forEach((itm)=>{
          amount_num.push(itm.value)
    })


    // amount how much 

    let result = [];
    let price = []
    let total = 0;
    let amount = [];

    fruit.forEach((items)=>{
     if(items.checked){
         result.push(items.value)
         price.push(items.getAttribute('price'));
        //  amount.push(items.getAttribute('amount'));
     }
     })

     for(let i =0; i<=result.length-1;i++){
        let li=document.createElement('li');
        let priceamount = price[i]*amount_num[i];
        ul.appendChild(li);
        li.innerHTML =` ${result[i]} ${amount_num[i]} KG price = ${priceamount} Taka`;
        output.appendChild(ul)
        // total price 
        total+=priceamount;
        //total price
        
        }
        totalPrice.innerHTML =`<hr>Total Price = ${total} taka`;
})

