const btnCalculate = document.querySelector('.btn-calculate');
const inputsList = document.querySelectorAll('.client-type input[type=radio]');
let clientType = null;
let error = false;

function calculateInterest(clientType) {
     const valueElementInput = document.querySelector('#values').value; //valor
     const portionElementInput = document.querySelector('.portion').value;  //taxa juros
     const result = document.querySelector('.result');
     if (clientType == 'standard') {
          TaxaJuros = 2.5;
     }
     if (clientType == 'platinum') {
          TaxaJuros = 1.99;
     }
     if (clientType == 'gold') {
          TaxaJuros = 1.2;
     }

     const amount = valueElementInput * (1 + ((TaxaJuros/100) * portionElementInput));
     const portion = amount / portionElementInput;

     
    result.innerText = 
        `Valor total a ser pago: R$${amount.toFixed(2)} \n
        Valor de cada parcela R$${portion.toFixed(2)}`;
     

}


function getClientType(){
     inputsList.forEach((itemList) => {
          if (itemList.checked) {
               clientType = itemList.id;
          }
     })

}

btnCalculate.addEventListener('click', () => {
     getClientType()
     calculateInterest(clientType)
     error = false;
})