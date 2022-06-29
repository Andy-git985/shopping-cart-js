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
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price">$ ${search.price}</p>
            </h4>
            <i class="bi bi-x-lg"></i>
          </div>

          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${item}</div>
            <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
          </div>

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

const increment = (id) => {
  const selectedItem = id;
  const search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem('data', JSON.stringify(basket));
  update(selectedItem.id);
};
const decrement = (id) => {
  const selectedItem = id;
  const search = basket.find((x) => x.id === selectedItem.id);
  // handles typeError search undefined error in console when you hit minus and nothing is in local storage
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  // Deleted items with 0 quantity from local storage
  basket = basket.filter((x) => x.item !== 0);
  // Deletes items with 0 quantity on re-render
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
};

const update = (id) => {
  const search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
