document.getElementById('home-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('first-section-block').offsetTop -100,
      behavior: 'smooth'
  });
});

document.getElementById('dropdown-home-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('first-section-block').offsetTop -100,
      behavior: 'smooth'
  });
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';
});

document.getElementById('product-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('second-section-block').offsetTop - 80,
      behavior: 'smooth'
  });
});

document.getElementById('dropdown-product-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('second-section-block').offsetTop - 80,
      behavior: 'smooth'
  });

  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';
});

document.getElementById('transaction-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('third-section-block').offsetTop - 80,
      behavior: 'smooth'
  });
});

document.getElementById('dropdown-transaction-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('third-section-block').offsetTop - 80,
      behavior: 'smooth'
  });
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';
});

document.getElementById('buyback-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('fourth-section-block').offsetTop,
      behavior: 'smooth'
  });
});

document.getElementById('dropdown-buyback-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('fourth-section-block').offsetTop,
      behavior: 'smooth'
  });
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';

});

document.getElementById('contact-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('fifth-section-block').offsetTop-100,
      behavior: 'smooth'
  });
});

document.getElementById('dropdown-contact-header').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('fifth-section-block').offsetTop,
      behavior: 'smooth'
  });
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';
});

document.getElementById('harga-emas-block').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('second-section-block').offsetTop -80,
      behavior: 'smooth'
  });
});

/*

document.getElementById('harga-buyback-block').addEventListener('click', function() {
  window.scrollTo({
      top: document.getElementById('fourth-section-block').offsetTop,
      behavior: 'smooth'
  });
});

*/


const textHome = document.querySelector('.home-header');
const textProduct = document.querySelector('.product-header');
const textTransaction = document.querySelector('.transaction-header');
const textBuyback = document.querySelector('.buyback-header');
const textContact = document.querySelector('.contact-header');

const maxHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
) - window.innerHeight;

if(window.scrollY == 0){
  textHome.classList.add('home-header-scrolled');
}

var allBlocksHeight = document.getElementById('first-section-block').offsetHeight +
 document.getElementById('second-section-block').offsetHeight + 
 document.getElementById('third-section-block').offsetHeight +
 document.getElementById('fourth-section-block').offsetHeight;
 

window.addEventListener('scroll', () => {
    if (window.scrollY == 0 || window.scrollY < document.getElementById('second-section-block').offsetTop - 120) {
        textHome.classList.add('home-header-scrolled');

        textProduct.classList.remove('product-header-scrolled');
        textTransaction.classList.remove('transaction-header-scrolled');
    } else if(window.scrollY < document.getElementById('third-section-block').offsetTop - 120){
        textProduct.classList.add('product-header-scrolled');

        textHome.classList.remove('home-header-scrolled');
        textTransaction.classList.remove('transaction-header-scrolled');
    } else if (window.scrollY < document.getElementById('fourth-section-block').offsetTop - 120){
        textTransaction.classList.add('transaction-header-scrolled');
        
        textProduct.classList.remove('product-header-scrolled');
        textBuyback.classList.remove('buyback-header-scrolled');
    }else if (window.scrollY < document.getElementById('fifth-section-block').offsetTop - 120){
        textBuyback.classList.add('buyback-header-scrolled');
        
        textTransaction.classList.remove('transaction-header-scrolled');
        textContact.classList.remove('contact-header-scrolled')
    }
    
    if(window.scrollY >= maxHeight){
        textBuyback.classList.remove('buyback-header-scrolled');
        textContact.classList.add('contact-header-scrolled');
    }
});

const toogleBtn = document.querySelector('.button-menu');
const toogleBtnIcon = document.querySelector('.menu-image');
const dropDownMenu = document.querySelector('.nav-dropdown');

toogleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toogleBtnIcon.src = isOpen ? 'assets/cross.svg' : 'assets/icon-menu.svg';
}

const firstProductContainer = document.querySelector('.product-container');
  if (firstProductContainer) {
    showBox(firstProductContainer.id);
  }

function showBox(idToShow) {
  const boxes = document.querySelectorAll('.product-container, .rp-container, .figura-container, .plakat-container, .box-container');
  const buttons = document.querySelectorAll('.lm-antam, .antam-retro-potrait, .figura, .plakat, .box');

  boxes.forEach(box => {
      if (box.id === idToShow) {
          box.classList.add('box-active');
      } else {
          box.classList.remove('box-active');
      }
  });

  buttons.forEach(button => {
    if (button.dataset.boxId === idToShow) {
      button.classList.add('button-active');
    } else {
      button.classList.remove('button-active');
    }
  });
}