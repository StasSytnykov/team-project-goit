
const chk = document.getElementById('chk');


chk.addEventListener('change', () => {
    

    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }

    addDarkTheme();
   
});

function addDarkTheme() {
    try {

        if (localStorage.getItem('theme') === 'dark') {

            document.body.classList.add('dark');
            // chk.classList.add('chexkbox:checked');
            chk.checked = true;
        }
        else {
            document.body.classList.remove('dark');
            chk.checked = false;
        }
        
    }catch(err) { }
}

addDarkTheme();