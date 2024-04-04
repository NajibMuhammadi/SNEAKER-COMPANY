window.addEventListener('DOMContentLoaded', () => {
    productImage();
    initializeButtons();
    productLargeImage();
});

function initializeButtons() {
    document.querySelector('.product__button-minus').addEventListener('click', removeOrder);
    document.querySelector('.product__button-plus').addEventListener('click', addOrder);
    document.querySelector('.product__button-add').addEventListener('click', addToCartAndResetQuantity);
    document.querySelector('.header__cart-icon').addEventListener('click', emptyShoppingCart);
}

function addToCartAndShow() {
    uppdateIconText();
    showShoppingCart();
}

function addToCartAndResetQuantity() {
    addToCartAndShow();
    resetProductQuantity();
}

let totalOrder = 0;
function addOrder() {
    totalOrder++;
    updateProductText();
}

function removeOrder() {
    if (totalOrder > 0) {
        totalOrder--;
        updateProductText();
    }
}

function updateProductText() {
    const productBtn = document.querySelector('.product__button-quantity');
    productBtn.textContent = totalOrder;
}

function resetProductQuantity() {
    const productBtn = document.querySelector('.product__button-quantity');
    productBtn.textContent = totalOrder;
}
function uppdateIconText() {
    const extraText = document.querySelector('.extra__cart-text');
    extraText.textContent = totalOrder;
}

function productImage() {
    const smallImages = document.querySelectorAll('.product__small-img');
    const largeImage = document.querySelector('.product__large-img');
    smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', () => {
            smallImages.forEach(img => img.classList.remove('active'));
            smallImage.classList.add('active');
            largeImage.src = smallImage.src;
        });
    });
}

let productCardContent;
let productCardTitle = document.createElement('h2');

function showShoppingCart() {
    if (productCardContent) {
        productCardContent.remove();
        productCardContent = null;
    }
    productCardContent = document.createElement('div');
    productCardContent.classList.add('product__icon-content');

    productCardTitle.textContent = 'Cart';
    productCardTitle.classList.add('product__icon-title');

    const productCard = document.createElement('div');
    productCard.classList.add('product__icon-card');

    const productCardImg = document.createElement('img');
    productCardImg.classList.add('product__icon-img');
    productCardImg.src = './images/image-product-1.jpg';
    productCardImg.alt = 'product image';

    const productCardPriceContent = document.createElement('div');
    productCardPriceContent.classList.add('product__icon-price-content');

    const productCardSubTitle = document.createElement('p');
    productCardSubTitle.textContent = 'Fall Limited Edition Sneakers';
    productCardSubTitle.classList.add('product__icon-subtitle');

    const productCardQuantity = document.createElement('p');
    productCardQuantity.textContent = `$125.00 x ${totalOrder}`;
    productCardQuantity.classList.add('product__icon-quantity');

    const productCardPrice = document.createElement('p');
    const totalPrice = 125 * totalOrder;
    productCardPrice.textContent = ` $${totalPrice.toFixed(2)}`;
    productCardPrice.classList.add('product__icon-price');

    const productCardPriceDisplay = document.createElement('div');
    productCardPriceDisplay.classList.add('product__icon-price-display');

    const productCardDeleteIcon = document.createElement('img');
    const productCardDelete = document.createElement('button');
    productCardDeleteIcon.alt = 'delete icon';
    productCardDeleteIcon.src = './images/icon-delete.svg';
    productCardDelete.classList.add('product__icon-delete');
    productCardDelete.appendChild(productCardDeleteIcon);
    productCardDelete.addEventListener('click', () => {
        emptyShoppingCart();
        const extraText = document.querySelector('.extra__cart-text');
        extraText.textContent = 0;
        const productBtn = document.querySelector('.product__button-quantity');
        productBtn.textContent = 0;
    });


    const productCardCheckout = document.createElement('button');
    productCardCheckout.textContent = 'Checkout';
    productCardCheckout.classList.add('product__btn-checkout');

    productCardContent.appendChild(productCardTitle);
    productCard.appendChild(productCardImg);
    productCardPriceContent.appendChild(productCardSubTitle);
    productCardPriceDisplay.appendChild(productCardQuantity);
    productCardPriceDisplay.appendChild(productCardPrice);
    productCard.appendChild(productCardPriceContent);
    productCardPriceContent.appendChild(productCardPriceDisplay);
    productCard.appendChild(productCardDelete);
    productCardContent.appendChild(productCard);
    productCardContent.appendChild(productCardCheckout);
    document.body.appendChild(productCardContent);
}

function emptyShoppingCart() {
    if (!productCardContent) {
        productCardContent = document.createElement('div');
        productCardContent.classList.add('product__icon-content');

        productCardTitle.textContent = 'Cart';
        productCardTitle.classList.add('product__icon-title');

        const productCardSpan = document.createElement('span');
        productCardSpan.textContent = 'Your cart is empty';
        productCardSpan.classList.add('product__icon-empty');

        productCardContent.appendChild(productCardTitle);
        productCardContent.appendChild(productCardSpan);
        document.body.appendChild(productCardContent);
    } else {
        productCardContent.remove();
        productCardContent = null;
    }
}


function productLargeImage() {
    const largeImage = document.querySelector(".product__large-img");
    largeImage.addEventListener("click", function () {
        const maximizedImage = document.createElement("div");
        maximizedImage.setAttribute("id", "maximized-image");

        const clonedImage = largeImage.cloneNode(true);
        maximizedImage.appendChild(clonedImage);
        maximizedImage.addEventListener("click", function () {
            maximizedImage.remove();
        });

        document.body.appendChild(maximizedImage);
    });
}




