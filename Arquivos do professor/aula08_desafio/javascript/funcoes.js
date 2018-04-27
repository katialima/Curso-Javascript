(function menu() {
    
var html = document.querySelector('html');
var btn = document.querySelector('button');


    
btn.addEventListener('click', function (e) {
    html.classList.toggle('menu-opened');
    // if (html.classList.contains('menu-opened')) 
    // {
    //     //html.classList.remove('menu-opened');
        
    // }
    // else{

    //     html.classList.add('menu-opened');
    // }

})
   

})()