const slides = document.querySelectorAll(".carousel img");
const toggle= document.querySelector(".menu-toggle");
const navbar=document.querySelector(".navbar");
const offertBtn = document.querySelectorAll(".btn-primary")
const offertBox = document.getElementById("offert-box");
const overlay = document.getElementById("modal-overlay")


let index =0;

setInterval(()=>{
    slides[index].classList.remove("active");
    index = (index+1) % slides.length;
    slides[index].classList.add("active")
},4000);

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

offertBtn.forEach(btn => {
btn.addEventListener("click", (e)=>{
    e.preventDefault();

    offertBox.style.display="block";
    overlay.style.display="block";
    
    setTimeout(() => {
    offertBox.classList.add("show");
}, 10);

     document.body.style.overflow = "hidden";
    
    offertBox.innerHTML="";

    const closeBtn= document.createElement("span")
    closeBtn.textContent="x";
    closeBtn.classList.add("modal-close-x")
    closeBtn.addEventListener("click", closeModal)

    const form = document.createElement("form")

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Namn";
    const nameInput = document.createElement("input");
    nameInput.type="text"
    nameLabel.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type="email"
    emailLabel.appendChild(emailInput);

    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Beskrivning"
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = "5"
    descriptionLabel.appendChild(descriptionInput)

    const actions = document.createElement("div")
    actions.classList.add("modal-actions")

    const submitBtn = document.createElement("button");
    submitBtn.textContent ="Skicka";
    submitBtn.type="button";

    submitBtn.addEventListener("click", (e)=>{
        alert("Tack!Vi återkommer.")
        closeModal()
    });

    const closeButton = document.createElement("button");
        closeButton.textContent = "Stäng";
        closeButton.type = "button";
        closeButton.classList.add("close-btn");
        closeButton.addEventListener("click", closeModal)
   

    actions.append(submitBtn, closeButton)
   
    form.append(nameLabel, emailLabel, descriptionLabel, actions);
    
    
    
    offertBox.append(closeBtn,form);
});
});

function closeModal() {
    offertBox.style.display = "none";
    overlay.style.display = "none";
    offertBox.classList.remove("show");
    document.body.style.overflow="";
}