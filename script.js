// Товары в каталоге
const products = [
    {
        id: 1,
        name: 'Классическая футболка',
        price: 599,
        category: 'Футболки',
        icon: '👕',
        rating: '★★★★★'
    },
    {
        id: 2,
        name: 'Синие джинсы',
        price: 1299,
        category: 'Джинсы',
        icon: '👖',
        rating: '★★★★☆'
    },
    {
        id: 3,
        name: 'Кожаная куртка',
        price: 2999,
        category: 'Куртки',
        icon: '🧥',
        rating: '★★★★★'
    },
    {
        id: 4,
        name: 'Черное платье',
        price: 1799,
        category: 'Платья',
        icon: '👗',
        rating: '★★★★★'
    },
    {
        id: 5,
        name: 'Белая рубашка',
        price: 899,
        category: 'Футболки',
        icon: '👕',
        rating: '★★★★☆'
    },
    {
        id: 6,
        name: 'Черные джинсы',
        price: 1199,
        category: 'Джинсы',
        icon: '👖',
        rating: '★★★★★'
    },
    {
        id: 7,
        name: 'Теплая куртка',
        price: 2199,
        category: 'Куртки',
        icon: '🧥',
        rating: '★★★★☆'
    },
    {
        id: 8,
        name: 'Вечернее платье',
        price: 2499,
        category: 'Платья',
        icon: '👗',
        rating: '★★★★★'
    }
];

// Загрузка товаров на страницу
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-rating">${product.rating}</p>
                <div class="product-price">${product.price} ₽</div>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">
                    Добавить в корзину
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Добавление товара в корзину
function addToCart(productName, price) {
    alert(`"${productName}" добавлен в корзину!\nЦена: ${price} ₽`);
}

// Прокрутка к товарам
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
