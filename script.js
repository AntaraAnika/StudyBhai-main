function register(event){
    event.preventDefault();
    document.querySelector('#sign-in-section').classList.add('animation');
}

function handleGetIn(event){
    event.preventDefault();
    document.querySelector('#sign-in-section').classList.remove('animation');
}