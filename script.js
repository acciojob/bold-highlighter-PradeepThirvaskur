 let strong = document.querySelectorAll("strong");
    function highlight(){
    strong.forEach(element => {
           element.style.color="green" 
        });
    }

    function return_normal(){
        strong.forEach(element => {
           element.style.color="" 
        }); 
    }
