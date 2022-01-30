const addEventListenerBtnsAddCart = () => {
  let btnsAddCart = document.querySelectorAll('.list-products a');

  [...btnsAddCart].map((btn) => {
    btn.addEventListener('click', function (event) {
      event.preventDefault();

      let name_product = this.parentElement.querySelector('legend').textContent;

      if (this.hasDataAttribute('add-cart')) {
        this.removeDataAttribute('add-cart');
        this.style.transform = "rotateY(360deg)";
        alert(`Produto ${name_product} removido do carrinho`);
      } else {
        this.setDataAttribute('add-cart');
        this.style.transform = "rotateY(180deg)";
        alert(`Produto ${name_product} adicionado ao carrinho`);
      }

    });
  });
}

addEventListenerBtnsAddCart();