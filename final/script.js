const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

// Animation handlers
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Registration handler
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fullName = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = signUpForm.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.email === email)) {
        alert('Email already registered!');
        return;
    }

    users.push({
        fullName,
        email,
        password
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    
    signUpForm.reset();
    container.classList.remove("sign-up-mode");
});

// Login handler
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        signInForm.reset();
        alert('Login successful! Welcome ' + user.fullName);
        window.location.href = 'home.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid email or password!');
    }
});

// Check if user is already logged in
const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    window.location.href = 'home.html'; // Redirect to home if already logged in
}