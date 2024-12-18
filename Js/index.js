'use estrict'

//Constantes y variable para menú desplegable y carrusel//
  const menuButton = document.querySelector("#menuButton")
  const accordionMenu = document.querySelector("#accordionMenu")

  const carousel = document.getElementById('carousel')
  const prevButton = document.getElementById('prev')
  const nextButton = document.getElementById('next')

  let currentIndex = 0
  const totalItems = document.querySelectorAll('#carousel > div').length
    

//Funcion para abrir y cerrar el menu//
  menuButton.addEventListener("click", () => {
    
    const isOpen = accordionMenu.classList.contains("max-h-screen")
    accordionMenu.classList.toggle("max-h-screen", !isOpen)
    accordionMenu.classList.toggle("max-h-0", isOpen)
  })

    
// Función para calcular el número de elementos visibles según el tamaño de la pantalla
function getVisibleItems() {
  return window.innerWidth < 640 ? 1 : 3
}

// Función para actualizar el carrusel
function updateCarousel() {
  const visibleItems = getVisibleItems()

  
  if (visibleItems === 3 && currentIndex > totalItems - visibleItems) {
    currentIndex = 0
  }

  const offset = -(currentIndex * (100 / visibleItems))
  carousel.style.transform = `translateX(${offset}%)`
}

//Controles del carrusel
prevButton.addEventListener('click', () => {
  const visibleItems = getVisibleItems()

  if (currentIndex === 0) {
    currentIndex = totalItems - visibleItems
  } else {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
  }

  updateCarousel()
})

nextButton.addEventListener('click', () => {
  const visibleItems = getVisibleItems()

  if (visibleItems === 3 && currentIndex >= totalItems - visibleItems) {
    currentIndex = 0
  } else {
    currentIndex = (currentIndex + 1) % totalItems
  }

  updateCarousel()
})

// Ajustar el carrusel cuando se cambie el tamaño de la ventana
window.addEventListener('resize', () => {
  updateCarousel()
})