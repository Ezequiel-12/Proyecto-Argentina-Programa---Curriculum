let buttonFunction =document.querySelector('[data-button]');
let textFunction =document.querySelector('[data-showmore]');

        // show more button
let buttonState = 0;

buttonFunction.addEventListener('click', function(){
    if (buttonState === 0) {
        buttonFunction.style.marginBottom = 1;
        textFunction.classList.remove('hidden');
        setTimeout(function(){
            textFunction.classList.add('shown');
            buttonFunction.innerHTML = 'Show Less';
        }, 200);
        buttonState = 1;
        console.log(buttonState)
    } else if (buttonState === 1) {
        textFunction.classList.remove('shown');
        setTimeout(function(){
            textFunction.classList.add('hidden');
            buttonFunction.innerHTML = 'Show More';
        }, 400);
        buttonState = 0;
        console.log(buttonState)
    }
})