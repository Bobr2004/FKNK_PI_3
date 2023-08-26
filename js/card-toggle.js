const cards = document.querySelectorAll(".subject-card");

cards.forEach(card => {
    card.addEventListener('click', ()=> {
        card.classList.toggle("active")
    })
})