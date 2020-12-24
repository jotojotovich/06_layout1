
let buttonChangeView = document.querySelector('#change-view');

function changeView() {
    let container = document.querySelector('.container');
    let navigationItem = document.querySelectorAll('.navigation-item');
    let footerNavigationItem = document.querySelectorAll('.footer-navigation-item');

    for (let i = 0; i < navigationItem.length; i++){
        navigationItem[i].style.fontSize = '10px';
        footerNavigationItem[i].style.fontSize = '10px';
    }
    
    container.classList.toggle('container-active');

    if (buttonChangeView.innerText == '[ ]') {
        buttonChangeView.innerText = '] [';
        for (let i = 0; i < navigationItem.length; i++) {
            navigationItem[i].style.fontSize = '10px';
        }
    }
    else {
        buttonChangeView.innerText = '[ ]';
        for (let i = 0; i < navigationItem.length; i++) {
            navigationItem[i].style.fontSize = '12px';
            footerNavigationItem[i].style.fontSize = '12px';
        }
    }
}

buttonChangeView.addEventListener('click', function () {
    changeView();
})




//
console.log('b' + 'a' + + 'a' + 'a');