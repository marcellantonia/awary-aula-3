const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", HandleContactSubmit)

function HandleContactSubmit(event)  {
    event.preventDefault();

    const name = contactForm.elements("name").value; 
    const email = contactForm.elements("email").value;
    const message = contactForm.elements("message").value;  
    
    const result = "\nNome" + name + "\nE-mail:" + email + "\nMensagem" + message;

    alert("teste");
}