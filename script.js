let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartEl = document.getElementById('cart');
  const list = document.getElementById('cart-items');
  const total = document.getElementById('total');
  list.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ${item.price} RON`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum;
  cartEl.style.display = 'block';
}

function checkout() {
  alert('Mulțumim pentru comandă! Vă vom contacta pentru detalii.');
  cart = [];
  updateCart();
  document.getElementById('cart').style.display = 'none';
}
