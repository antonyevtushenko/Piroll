const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

let scrollPosition = 0;
let ticking = false;


function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show")
}

function showModalByScroll(){
    if (window.scrollY > document.body.offsetHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener('scroll', showModalByScroll)

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e){
    if (e.target == modal){
        closeModal();
    }
})


