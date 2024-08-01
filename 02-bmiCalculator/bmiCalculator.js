const form = document.querySelector('form');

const button = document.querySelector('button')

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2);

    let result = document.querySelector("#results");

    if(height < 1 || height === '' || isNaN(height)){
        alert(`Please Give a valid Height`);
    } else if(weight < 1 || weight === '' || isNaN(weight)){
        alert(`Please Give a valid Weight`);
    } else if(bmi < 18.6) {
        result.innerHTML = `<span>Under Weight: ${bmi}</span>`
    } else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `<span>Normal Weight: ${bmi}</span>`
    } else {
        result.innerHTML = `<span>Over Weight: ${bmi}</span>`
    }
})

