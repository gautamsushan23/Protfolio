document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: ["Student", "Developer", "Freelancer", "Designer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); 
    });
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields are required.");
        return false; 
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true; 
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        if (validateForm()) {
            let formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }).then(response => {
                if (response.ok) {
                    successMessage.style.display = "block";
                    form.reset();

                    setTimeout(() => {
                        successMessage.style.display = "none";
                    }, 2500);
                } else {
                    alert("There was a problem submitting the form.");
                }
            }).catch(error => alert("Error: " + error));
        }
    });
});



