'Use strict'

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navMenu = document.querySelector('.menu-modal');
const openModal = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.s-button');
const firstname = document.querySelector('.firstname');
const surname = document.querySelector('.surname');
const mail = document.querySelector('.mail');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.confirm');
const gender = document.querySelector('.gender');
const navButton = document.querySelector('.nav-button')
const welcomeText = document.querySelector('.bring');
const subText = document.querySelector('.sub-text');
const gridButton = document.querySelector('.grid-button');
const footer = document.querySelector('.upper-footer');
const logOut = document.querySelector('.refresh');
const mobileLogout = document.querySelector('.log-out');
const mobileButton = document.querySelector('.mobile')

//MOBILE-NAV

openNav.addEventListener('click', function(e){
    e.preventDefault();
    navMenu.classList.remove('hidden');
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
});


closeNav.addEventListener('click', function(e){
    e.preventDefault();
    navMenu.classList.add('hidden');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
});

openModal.forEach((each, i) => {
    each.addEventListener('click', function(e){
        e.preventDefault();
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
})

overlay.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

//MODAL

btn.addEventListener('click', function(e){
    e.preventDefault();
   
    if(!firstname.value || !surname.value || !gender.value || !mail.value || !password.value || !confirmpassword.value){
        alert('input field is empty');
        return;
    }

    if(password.value !== confirmpassword.value){
        alert('password must match');
        return;
    }

    alert('Account created successful');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    
    const inputvalues = {
        firstname: firstname.value,
        surname: surname.value,
        gender: gender.value,
        email: mail.value,
        password: password.value,
        confirm: confirmpassword.value,
    };
    
    if(inputvalues.gender === 'male'){
        welcomeText.textContent = `Hello Mr ${inputvalues.firstname}, Welcome to Manage!`;
    };

    if(inputvalues.gender === 'female'){
        welcomeText.textContent = `Hello Mrs ${inputvalues.firstname}, Welcome to Manage!`;
    };
    
    navButton.style.display = 'none';
    subText.textContent = 'The best software to simplify your day-to-day task for your team plan.';
    gridButton.style.display = 'none';
    footer.style.display = 'none';
    logOut.style.display = 'block'
    
    firstname.value = ""; surname.value = ""; gender.value = ""; mail.value = ""; password.value = ""; confirmpassword.value = "";
});

logOut.addEventListener('click', function(e){
    e.preventDefault();
    navButton.style.display = 'block';
    logOut.style.display = 'none';
    welcomeText.textContent = 'Bring everyone together to build better products.'
    subText.textContent = 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.';
    gridButton.style.display = 'block';
    footer.style.display = 'flex';

})

//MOBILE-MODAL

mobileButton.addEventListener('click', function(e){
    e.preventDefault;

    if(!firstname.value || !surname.value || !gender.value || !mail.value || !password.value || !confirmpassword.value){
        alert('input field is empty');
        return;
    }

    if(password.value !== confirmpassword.value){
        alert('password must match');
        return;
    }

    alert('Account created successful');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    
    const inputvalues = {
        firstname: firstname.value,
        surname: surname.value,
        gender: gender.value,
        email: mail.value,
        password: password.value,
        confirm: confirmpassword.value,
    };
    
    if(inputvalues.gender === 'male'){
        welcomeText.textContent = `Hello Mr ${inputvalues.firstname}, Welcome to Manage!`;
    };

    if(inputvalues.gender === 'female'){
        welcomeText.textContent = `Hello Mrs ${inputvalues.firstname}, Welcome to Manage!`;
    };
    
    navButton.style.display = 'none';
    subText.textContent = 'The best software to simplify your day-to-day task for your team plan.';
    gridButton.style.display = 'none';
    footer.style.display = 'none';
    
    firstname.value = ""; surname.value = ""; gender.value = ""; mail.value = ""; password.value = ""; confirmpassword.value = "";
})

mobileLogout.addEventListener('click', function(e){
    e.preventDefault();
    navMenu.classList.add('hidden');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
    logOut.style.display = 'none';
    welcomeText.textContent = 'Bring everyone together to build better products.';
    subText.textContent = 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.';
    gridButton.style.display = 'block';
    footer.style.display = 'flex';
})