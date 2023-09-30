let pass = document.getElementById('pass');
let confirmpass = document.getElementById('confirm-pass');

// pass.classList.toggle('error');
// confirmpass.classList.toggle('error');

pass.addEventListener('input', processpass);
confirmpass.addEventListener('input', processpass);
// pass.addEventListener('change', processpass);

function processpass(ev){
    // console.log(ev.target.value);
    let pv = pass.value;
    let cpv = confirmpass.value;
    let l1 = pv.length;
    let l2 = cpv.length;
    let l3 = Math.min(l1, l2);
    //check password and conform password equality

    if(pv != '' && cpv != '' && pv != cpv){
        pass.classList.add('error');
        confirmpass.classList.add('error');
        // ev.target.classList.add('error');
    }
    else{
        pass.classList.remove('error');
        confirmpass.classList.remove('error');
    }
}