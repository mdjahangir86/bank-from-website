
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if( email === 'jahangir@gmail.com' && password === 'secret'){

        window.location.href = 'bank.html'
    }
    else{
        alert('tui password vule gesos!!! ami tejioo gosona korlam')
    }
})