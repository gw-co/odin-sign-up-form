let pass = document.getElementById('pass');
let confirmpass = document.getElementById('confirm-pass');

pass.addEventListener('input', processpass);
confirmpass.addEventListener('input', processpass);

function processpass(ev){
    let pv = pass.value;
    let cpv = confirmpass.value;
    let l1 = pv.length;
    let l2 = cpv.length;
    let l3 = Math.min(l1, l2);
    //check password and conform password equality
    let aresame = true;
    for(let i = 0; i < l3; i++){
        if(pv[i] !== cpv[i]){
            aresame = false;
        }
    }
    if(aresame && ev.target.value.length == l3){
        pass.classList.remove('error');
        confirmpass.classList.remove('error');
        pass.classList.add('same');
        confirmpass.classList.add('same');
    }
    else if( pv != '' && cpv != '' && pv != cpv){
        pass.classList.remove('same');
        confirmpass.classList.remove('same');
        pass.classList.add('error');
        confirmpass.classList.add('error');
    }
    
    if(pv === cpv){
        pass.classList.remove('error');
        confirmpass.classList.remove('error');
        pass.classList.remove('same');
        confirmpass.classList.remove('same');
    }
}