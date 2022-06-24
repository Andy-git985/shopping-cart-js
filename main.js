const shop = document.querySelector('#shop');

const shopItemsData = [
  {
    id: 'cgbpkywbtx',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: 'images/img-1.jpg',
  },
  {
    id: 'wcmrjsupoc',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: 'images/img-2.jpg',
  },
  {
    id: 'fdrydindhn',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: 'images/img-3.jpg',
  },
  {
    id: 'eygiazhcay',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    img: 'images/img-4.jpg',
  },
];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    return `
    <div class="item">
      <img width="223" src="images/img-1.jpg" alt="" />
      <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="price-quantity">
        <h2>$45</h2>
        <div class="buttons">
          <i class="bi bi-dash-lg"></i>
          <div class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
    `;
  }));
};

generateShop();
