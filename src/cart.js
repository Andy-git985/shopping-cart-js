let basket = JSON.parse(localStorage.getItem('data')) || [];

const calculation = () => {
  const cartIcon = document.querySelector('#cartAmount');
  cartIcon.textContent = basket.map((x) => x.item).reduce((p, c) => p + c, 0);
};

// Handles the cart amount being 0 on refresh
calculation();
