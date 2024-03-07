let c1 = document.getElementById('circle-1');
let c2 = document.getElementById('circle-2');
let c3 = document.getElementById('circle-3');
let a = document.getElementById("cp1");
let b = document.getElementById("cp2");
let c = document.getElementById("cp3");
let n1 = 45;
let n2 = 5;
let n3 = 30;

function changeColor(){
    setTimeout(function() {
        c1.style.opacity = "1"
        c2.style.opacity = "0.1"
        c3.style.opacity = "0.1"
        let i1 = setInterval(() => {
            a.innerHTML = n1;     
            n1--;
        }, 1000);  
        setTimeout(function(){
            n1 = 45;
            clearInterval(i1)
        }, 46000)  
    }, 39000)

    setTimeout(function() {
        c1.style.opacity = "0.1"
        c2.style.opacity = "1"
        c3.style.opacity = "0.1"
        let i2 = setInterval(() => {
            b.innerHTML = n2;     
            n2--;
        }, 1000);  
        setTimeout(function(){
            n2 = 5;
            clearInterval(i2)
        }, 6000)  
    }, 32000)

    setTimeout(function() {
        c1.style.opacity = "0.1"
        c2.style.opacity = "0.1"
        c3.style.opacity = "1"
        let i3 = setInterval(() => {
            c.innerHTML = n3;     
            n3--;
        }, 1000);  
        setTimeout(function(){
            clearInterval(i3)
            n3 = 30;
        }, 31000)  
    }, 10)
}

changeColor();
setInterval(function(){
    changeColor();
}, 86000)