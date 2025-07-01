// 製品データの例
const products = [
    { name: 'Produk 1', price: 'Rp 100.000', image: 'images/produk1.jpg' },
    { name: 'Produk 2', price: 'Rp 150.000', image: 'images/produk2.jpg' },
    { name: 'Produk 3', price: 'Rp 200.000', image: 'images/produk3.jpg' },
    { name: 'Produk 4', price: 'Rp 250.000', image: 'images/produk4.jpg' },
];

// ページに商品を表示する
const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Beli Sekarang</button>
    `;
    productGrid.appendChild(productCard);
});
