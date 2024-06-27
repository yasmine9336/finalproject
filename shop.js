document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    const loadMoreButton = document.getElementById('load-more');

    const additionalProducts = [ // Array of additional products to load dynamically
        {
            imgSrc: 'handcraft.jpg',
            title: 'Handcrafted Bracelet',
            price: '$20.00'
        },
        {
            imgSrc: 'canvas.jpg',
            title: 'Painted Canvas',
            price: '$35.00'
        },
        {
            imgSrc: 'scarf.jpg',
            title: 'Knitted Scarf',
            price: '$15.00'
        }
    ];

    loadMoreButton.addEventListener('click', function() {
        for (let i = 0; i < additionalProducts.length; i++) {
            const product = additionalProducts[i];

            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const img = document.createElement('img');
            img.src = product.imgSrc;
            img.alt = product.title;

            const h3 = document.createElement('h3');
            h3.textContent = product.title;

            const p = document.createElement('p');
            p.classList.add('price');
            p.textContent = product.price;

            const button = document.createElement('button');
            button.classList.add('add-to-cart');
            button.textContent = 'Add to Cart';

            productDiv.appendChild(img);
            productDiv.appendChild(h3);
            productDiv.appendChild(p);
            productDiv.appendChild(button);

            productGrid.appendChild(productDiv);
        }

        loadMoreButton.style.display = 'none'; // Hide load more button after products are loaded
    });
});
