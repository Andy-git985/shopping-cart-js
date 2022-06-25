const shop = document.querySelector('#shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      const { id, name, price, desc, img } = x;
      // ? handles the refresh
      let search = basket.find((x) => x.id === id) || [];
      // ?  Below on:  <div id=${id} class="quantity">${
      // ? search.item === undefined ? 0 : search.item
      // ? }</div> On refresh populates the quantity field without pressing the buttons, previously field was 0
      return `
    <div id=product-id-${id} class="item">
      <img width="220" src="${img}" alt="" />
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
        <h2>$${price}</h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
          <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
    `;
    })
    .join(''));
};

generateShop();

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

  localStorage.setItem('data', JSON.stringify(basket));
};
const update = (id) => {
  const search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
const calculation = () => {
  const cartIcon = document.querySelector('#cartAmount');
  cartIcon.textContent = basket.map((x) => x.item).reduce((p, c) => p + c, 0);
};

// Handles the cart amount being 0 on refresh
calculation();
