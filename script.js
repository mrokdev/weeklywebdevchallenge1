window.onload = load;
console.log('skrypt załadowany');

function load(){
    console.log('strona zaladowana');
    
    var placeHold = document.querySelector('input[name=user_name]');
    

    let txt = placeHold.placeholder;

    console.log(placeHold.placeholder);
    console.log(placeHold.type);
    console.log(document.forms.length);
   

    placeHold.addEventListener('focus', firstEvent, false);
    placeHold.addEventListener('blur', secondEvent, false);
    
    function firstEvent(){
        placeHold.placeholder=' ';
    }
    function secondEvent(){  
        placeHold.placeholder=txt;
    }
}
