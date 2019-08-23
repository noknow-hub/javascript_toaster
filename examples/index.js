document.addEventListener('DOMContentLoaded', function() {

    //////////////////////////////////////////////////
    // Main process.
    //////////////////////////////////////////////////
    const form = document.forms['form'];
    const typeSlt = form['type'];
    const errorBtn = form['errorBtn'];
    const warningBtn = form['warningBtn'];
    const successBtn = form['successBtn'];

    const toaster = new Toaster({
        //'method': 'bottom-full-width-drop-up',
    });
    
    
    
    
    typeSlt.addEventListener('change', (e) => {
        const nkwToaster = document.getElementById('noknow-toaster');
        console.log(e.target.value);
        if(e.target.value === 'top-full-width-drop-down') {
            nkwToaster.classList.add('top-full-width-drop-down');
            nkwToaster.classList.remove('top-center-drop-down');
            nkwToaster.classList.remove('bottom-full-width-drop-up');
            nkwToaster.classList.remove('bottom-center-drop-up');
        } else if(e.target.value === 'top-center-drop-down') {
            nkwToaster.classList.remove('top-full-width-drop-down');
            nkwToaster.classList.add('top-center-drop-down');
            nkwToaster.classList.remove('bottom-full-width-drop-up');
            nkwToaster.classList.remove('bottom-center-drop-up');
        } else if(e.target.value === 'bottom-full-width-drop-up') {
            nkwToaster.classList.remove('top-full-width-drop-down');
            nkwToaster.classList.remove('top-center-drop-down');
            nkwToaster.classList.add('bottom-full-width-drop-up');
            nkwToaster.classList.remove('bottom-center-drop-up');
        } else if(e.target.value === 'bottom-center-drop-up') {
            nkwToaster.classList.remove('top-full-width-drop-down');
            nkwToaster.classList.remove('top-center-drop-down');
            nkwToaster.classList.remove('bottom-full-width-drop-up');
            nkwToaster.classList.add('bottom-center-drop-up');
        }
        
    }, false);
    
    errorBtn.addEventListener('click', function() {
        toaster.Error('Error', 'This is an error message.');
    }, false);
    
    warningBtn.addEventListener('click', function() {
        toaster.Warning('Warning', 'This is a warning message.');
    }, false);
    
    successBtn.addEventListener('click', function() {
        toaster.Success('Success', 'This is a success message.');
    }, false);
    
    


}, false);
