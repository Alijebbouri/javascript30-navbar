const products = document.querySelector('.products');
const productsDropDown = document.querySelector('.products-dropdown')
const closeIcon = document.querySelector('.close');
products.addEventListener('click',()=>{
    productsDropDown.style.display = 'block';
});
closeIcon.addEventListener('click', () => {
    productsDropDown.style.display='none';
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active'); 
});