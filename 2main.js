function toggleAccordion(index) {
    const accordionContent = document.querySelectorAll('.accordion-content'); /* Selecciona todos los elementos con la clase 'accordion-content' */
    const accordionButton = document.querySelectorAll('.accordion-button'); /* Selecciona todos los elementos con la clase 'accordion-button' */
  
    accordionContent[index].classList.toggle('show'); /* Agrega la clase 'show' al contenido del índex o pagina.html */
    accordionButton[index].classList.toggle('collapsed'); /* Agrega o remueve la clase 'collapsed' al botón del índice proporcionado */
  }
  