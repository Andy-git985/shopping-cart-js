const shop = document.querySelector('#shop');

const shopItemsData = [
  {
    id: 'cgbpkywbtx',
    name: 'Casual Shirt',
    price: 45,
    desc: 'A casual oxford button dowwn suitable for any occasion.',
    img: 'images/img-1.jpg',
  },
  {
    id: 'wcmrjsupoc',
    name: 'Office Shirt',
    price: 100,
    desc: 'Office shirt great with a flashy tie.',
    img: 'images/img-2.jpg',
  },
  {
    id: 'fdrydindhn',
    name: 'T Shirt',
    price: 25,
    desc: 'Comfortable 100% cotton crewneck T-shirt.',
    img: 'images/img-3.jpg',
  },
  {
    id: 'eygiazhcay',
    name: 'Mens Suit',
    price: 300,
    desc: 'When you are looking to nail that promotion or interview, reach for this.',
    img: 'images/img-4.jpg',
  },
];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      const { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
      <img width="223" src="${img}" alt="" />
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
        <h2>$${price}</h2>
        <div class="buttons">
          <i class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
    `;
    })
    .join(''));
};

generateShop();
