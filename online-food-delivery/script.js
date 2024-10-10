// const signUpButton=document.getElementById('signUpButton');
// const signInButton=document.getElementById('signInButton');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signup');
// const mainpage=document.getElementById('mainpage');
// const resto=document.getElementById('resto');
// const homebtn=document.getElementById('homebtn');
// const restobtn=document.getElementById('restobtn');

// signUpButton.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// signInButton.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })

document.addEventListener('DOMContentLoaded', function() {
    const mainpage = document.getElementById('mainpage');
    const resto = document.getElementById('resto');
    const homebtn = document.getElementById('homebtn');
    const restobtn = document.getElementById('restobtn');
    const cuisine = document.getElementById('Cuisi');
    const cuisinebtn = document.getElementById('cuisibtn');
    const carting = document.getElementById('btn4');
    const carts = document.getElementById('cartcontainor');
    const cartbtn = document.getElementById('btn7');
    const cartbtn1 = document.getElementById('btn8');
    const cartbtn2 = document.getElementById('btn9');
    const cartbtn3 = document.getElementById('btn3');

    homebtn.addEventListener('click', function(){
        console.log("home");
        mainpage.style.display = "block";
        resto.style.display = "none";
        cuisine.style.display = "none";
        carts.style.display = "none";
    });

    restobtn.addEventListener('click', function(){
        mainpage.style.display = "none";
        resto.style.display = "block";
        cuisine.style.display = "none";
        carts.style.display = "none";
    });

    cuisinebtn.addEventListener('click', function(){
        mainpage.style.display = "none";
        resto.style.display = "none";
        cuisine.style.display = "block";
        carts.style.display = "none";
    });

    carting.addEventListener('click', function(){
        mainpage.style.display = "none";
        resto.style.display = "none";
        cuisine.style.display = "block";
        carts.style.display = "none";
    });

    cartbtn3.addEventListener('click', function(){
        window.location.href = "cart.html"
    });
    
    cartbtn.addEventListener('click', function(){
        window.location.href = "cart.html?showC1=true";
    });

    cartbtn1.addEventListener('click', function(){
        window.location.href = "cart.html?showC2=true";
    });

    cartbtn2.addEventListener('click', function(){
        window.location.href = "cart.html?showC3=true";
    });

});

