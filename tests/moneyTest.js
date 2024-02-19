import {formatCurrency} from '../scripts/utils/money.js';

console.log('ctest suite: formatCurrency');

console.log('convets cents to dollars');
if(formatCurrency(2095 === '20.95')){
    console.log('pass');
}else{
    console.log('fail');
}


console.log('rworks with 0');

if(formatCurrency(0) === '0.00'){
    console.log('pass');
}else{
    console.log('fail');
}


console.log('rounds up to nearet cent');

if (formatCurrency(200.5 === '20.01')){
console.log('pass');
}else{
    console.log('fail');
}

console.log('rounds up to nearet cent');

if (formatCurrency(200.4 === '20.00')){
    console.log('pass');
    }else{
        console.log('fail');
    }

console.log('rounds up to nearet cent');

    if (formatCurrency(200.6 === '20.01')){
        console.log('pass');
        }else{
            console.log('fail');
        }



        