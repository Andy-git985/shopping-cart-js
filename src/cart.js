const label = document.querySelector('#label');
const shoppingCart = document.querySelector('#shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];

const calculation = () => {
  const cartIcon = document.querySelector('#cartAmount');
  cartIcon.textContent = basket.map((x) => x.item).reduce((p, c) => p + c, 0);
};

// Handles the cart amount being 0 on refresh
calculation();

const generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" src="${search.img}" alt="" />
        <div class="details">
          <div class="title-price-x"></div>
          <div class="cart-buttons"></div>
          <h3></h3>
        </div>
      </div>
      `;
      })
      .join(''));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="home-btn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();
