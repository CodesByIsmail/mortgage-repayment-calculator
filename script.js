'use strict';

const form = document.querySelector('form')
const reset = document.querySelector('.reset');

const mortgageAmountInput = document.querySelector('.mortgage__amount');
const mortgageYearInput = document.querySelector('.mortgage__year');
const interestRateInput = document.querySelector('.interest__rate');


const calculate = document.querySelector('.calculate');

const emptyResult = document.querySelector('.empty__results');
const completeResult = document.querySelector('.complete__results');

const monthlyRepayment = document.querySelector('.monthly__repayments');
const totalRepaymentInterest = document.querySelector('.totalterm__repayment');

const callToAction = document.querySelectorAll('.cta__required');
const inputWrapper = document.querySelectorAll('.input__wrapper');

let amount;
let term;
let rate;
let monthlyInterestRepayment;

const removeCallToAction = function () {
    mortgageAmountInput.classList.remove('input-error');
    mortgageYearInput.classList.remove('input-error');
    interestRateInput.classList.remove('input-error');
    for (let i = 0; i < callToAction.length; i++) {
        callToAction[i].style.display = 'none';
    }
};

function calcRepayment(principal, years, annualRate) {


    //formula is M = P ({r(1 + r)^n}/{(1 + r)^n - 1})


    const monthlyRate = annualRate / 100 / 12;
    const numberOfMonthPayment = years * 12

    // to calculate: r(1 + r)^n; where n is the number of payment, and r is the rate
    const x = Math.pow(1 + monthlyRate, numberOfMonthPayment) // (base, exponent)

    // now calculate using the formula
    const  repaymentPerMonth = (principal * monthlyRate * x) / (x - 1);

    console.log(repaymentPerMonth)
    monthlyRepayment.textContent = repaymentPerMonth.toFixed(2);
    console.log(monthlyRepayment, monthlyRepayment.textContent)

    const repaymentOverTerm = repaymentPerMonth * numberOfMonthPayment; // monthly repayment multiply by the number of month give the total payment over time
    console.log(repaymentOverTerm)
    totalRepaymentInterest.textContent = repaymentOverTerm.toFixed(2);
}

reset.addEventListener('click', function () {
    console.log('reset clicked');
    emptyResult.style.display = 'flex';
    completeResult.style.display = 'none';
    removeCallToAction();
    mortgageAmountInput.value = '';
    mortgageYearInput.value = '';
    interestRateInput.value = '';
});

const allInputs = document.querySelectorAll('input[type="text"]')

allInputs.forEach(input => {
    input.addEventListener('input', (e)=>{
        if(!input.value){
            e.preventDefault()
            // console.log(input.closest('input__wrapper'))
            input.parentElement.classList.add('input__error')
            input.parentElement.querySelector('label').classList.add('error__label')
            input.parentElement.nextElementSibling.textContent = 'This field is required'

        }

        // input.addEventListener('input', ()=>{
            if(+input.value){
                input.parentElement.classList.remove('input__error')
                input.parentElement.querySelector('label').classList.remove('error__label')
                input.parentElement.nextElementSibling.textContent = ''
            }
          
        // })

        if(!Number.isFinite(+input.value) || !(+input.value > 0)) {
            e.preventDefault()
            // console.log(input.closest('input__wrapper'))
            input.parentElement.classList.add('input__error')
            input.parentElement.querySelector('label').classList.add('error__label')
            input.parentElement.nextElementSibling.textContent = 'Valid input is required'
        }
    })

})


form.addEventListener('submit', function(e){
    e.preventDefault()
   
   completeResult.scrollIntoView({behavior: 'smooth'})
  

    if(!Number.isFinite(+mortgageAmountInput.value) || !Number.isFinite(+mortgageYearInput.value) || !Number.isFinite(+interestRateInput.value)) return
    
    allInputs.forEach(input => {
        if(!Number.isFinite(+mortgageAmountInput.value) || !Number.isFinite(+mortgageYearInput.value) || !Number.isFinite(+interestRateInput.value)){
        // if(!Number.isFinite(+input.value) || !(+input.value > 0) ) {
            // console.log(input.closest('input__wrapper'))
            input.parentElement.classList.add('input__error')
            input.parentElement.querySelector('label').classList.add('error__label')
            input.parentElement.nextElementSibling.textContent = 'Valid input is required'
        }
            if(!input.value){
                e.preventDefault()
                // console.log(input.closest('input__wrapper'))
                input.parentElement.classList.add('input__error')
                input.parentElement.querySelector('label').classList.add('error__label')
                input.parentElement.nextElementSibling.textContent = 'This field is required'}
    
        })


if(mortgageAmountInput.value === '' || mortgageYearInput.value === '' || interestRateInput.value === '') return
if(mortgageAmountInput.value === 0 || mortgageYearInput.value === 0 || interestRateInput.value === 0) return

// if(!mortgageAmountInput.value || !mortgageYearInput.value  || !interestRateInput.value) return



    // })


  


    console.log('it works');
    calcRepayment(+mortgageAmountInput.value, +mortgageYearInput.value, +interestRateInput.value);
    emptyResult.style.display = 'none';
    completeResult.style.display = 'block';



    const radiioBtn = document.querySelectorAll('input[type="radio"]')

    radiioBtn.forEach(radio => {
        radio.addEventListener('change', function(e){
            console.log(e.target)
    
            if (e.target.name === 'Repayment'){
                console.log('')
            }

            if (radio.value === 'on'){
                alert('hi')
            }
        })
    })
    
  
    // removeCallToAction();
    // monthlyRepayment.textContent = monthlyInterestRepayment;
    // totalRepaymentInterest.textContent = repaymentOverTerm;
    // console.log(monthlyRepayment.textContent); /*here*/

    // console.log(
    //     repaymentOverTerm,
    //     monthlyInterestRepayment,
    //     totalRepaymentInterest,
    //     typeof monthlyRepayment.textContent /*here*/
    // );



    // if(!mortgageAmountInput.value ||
    // !mortgageYearInput.value  ||
    // !interestRateInput.value || 
    // Number.isFinite(mortgageYearInput.value) || 
    // Number.isFinite(mortgageAmountInput.value)|| 
    // Number.isFinite(interestRateInput.value)) return

    // if (
    //     mortgageAmountInput.value !== '' ||
    //     mortgageYearInput.value !== '' ||
    //     interestRateInput.value !== '' || !+mortgageAmountInput.value  ||
    //    !+mortgageYearInput.value ||
    //     !+interestRateInput.value 
    // ) {

    // } else {
    //     console.loag(`it doesn't work`);
    //     console.log(inputWrapper);
    //     for (let i = 0; i < inputWrapper.length; i++) {
    //         // inputWrapper.classList.add('input-error');
    //         // inputWrapper.style.border = 'red 1px solid';
    //     }
    //     // mortgageYearInput.classList.add('input-error');
    //     // interestRateInput.classList.add('input-error');
    //     // callToAction.style.display = 'block';

    //     for (let i = 0; i < callToAction.length; i++) {
    //         callToAction[i].style.display = 'block';
    //     }
    // }
})


