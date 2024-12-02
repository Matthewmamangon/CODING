const buttons = document. quarySelectorforAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const offest = button.dataset.carouselButton === "next" ? 1 : -1 
        const slides = button 
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelectors("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) = offest
        if (newIndex < 0) newIndex = slides.children.length -1 
        if ( newIndex >= slides.children.length) newIndex = 0 

        slides.children[newIndex].dataset.active = true 
        delete activeSlide.dataset.active
    })
}) 
