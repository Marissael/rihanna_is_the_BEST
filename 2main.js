function toggleAccordion(index) {
    const accordionContent = document.querySelectorAll('.accordion-content');
    const accordionButton = document.querySelectorAll('.accordion-button');
  
    accordionContent[index].classList.toggle('show');
    accordionButton[index].classList.toggle('collapsed');
}
