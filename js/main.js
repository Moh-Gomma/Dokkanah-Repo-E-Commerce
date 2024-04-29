
// ===================Loader=====[1]============
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");

loader.addEventListener("transitionend", () => {
    loader.remove();
});

//==================================[2]================


// Open and Close cart

var cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active");
    updateCart();
}
function close_cart() {
    cart.classList.remove("active");
}



//================================================================
// back to top when scrolling ==================[3]===============
//================================================================

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Cart function=============================================

let cartItems = [];
let totalPrice = 0;

// Add to Cart
const addToCartButtons = document.querySelectorAll('.add-cart-btnnn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});


function addToCart() {
    const productItem = this.closest('.filter-item');
    const productName = productItem.querySelector('.product-name-a').textContent;
    const productPrice = parseFloat(productItem.querySelector('.new-price').textContent.replace('$', ''));
    const productImage = productItem.querySelector('.product-image').src;

    const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    cartItems.push(cartItem);
    updateCart();
    updateCartItemCount();
}

// Update Cart
function updateCart() {
    const cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = '';

    const emptyCartElement = document.querySelector('.empty-cart');
    const totalCartPriceElement = document.querySelector('.total-cart-price');

    const checkoutBtn = document.querySelector('.last-item-inCart');

    totalPrice = 0;

    if (cartItems.length === 0) {
        emptyCartElement.style.display = 'block';
        totalCartPriceElement.style.display = 'none';
        checkoutBtn.style.display = 'none';
    } else {
        emptyCartElement.style.display = 'none';
        totalCartPriceElement.style.display = 'flex';
        checkoutBtn.style.display = 'block';

        cartItems.forEach((item, index) => {
            const cartBox = createCartBox(item, index);
            cartContent.appendChild(cartBox);

            totalPrice += item.price * item.quantity;
        });

        displayTotalPrice();
    }
}

function createCartBox(item, index) {
    const cartBox = document.createElement('div');
    // const cartBox = document.querySelector('.cart-box');
    // cartBox.innerHTML = `
    //                 <div class="cart-box">
    //                     <!-- <img src="images/face3.jpg" class="cart-image" alt="">
    //                     <div class="detail-box">
    //                         <div class="cart-product-title">${item.name}</div>
    //                         <div class="cart-price">$${item.price.toFixed(2)}</div>
    //                         <input type="number" value="1" min="1" class="cart-quantity">
    //                     </div>
    //                     <i class="fa-solid fa-trash-can cart-remove"></i> -->

    //                 </div>
    // `
    cartBox.classList.add('cart-box');

    const cartImage = document.createElement('img');
    cartImage.src = item.image;
    cartImage.classList.add('cart-image');

    const detailBox = document.createElement('div');
    detailBox.classList.add('detail-box');

    const cartProductTitle = document.createElement('div');
    cartProductTitle.classList.add('cart-product-title');
    cartProductTitle.textContent = item.name;

    const cartPrice = document.createElement('div');
    cartPrice.classList.add('cart-price');
    cartPrice.textContent = `$${item.price.toFixed(2)}`;

    const cartQuantity = document.createElement('input');
    cartQuantity.type = 'number';
    cartQuantity.value = item.quantity;
    cartQuantity.min = '1';
    cartQuantity.classList.add('cart-quantity');
    // const cartQuantity = document.querySelector('.cart-quantity')
    cartQuantity.addEventListener('change', () => {
        cartItems[index].quantity = parseInt(cartQuantity.value);
        updateCart();
    });

    detailBox.appendChild(cartProductTitle);
    detailBox.appendChild(cartPrice);
    detailBox.appendChild(cartQuantity);
    

    const cartRemove = document.createElement('i');
    cartRemove.classList.add('fa-solid', 'fa-trash-can', 'cart-remove');
    cartRemove.addEventListener('click', () => {
        cartItems.splice(index, 1);
        updateCart();
        updateCartItemCount();
    });

    cartBox.appendChild(cartImage);
    cartBox.appendChild(detailBox);
    cartBox.appendChild(cartRemove);

    return cartBox;
}

function displayTotalPrice() {
    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}



document.querySelector('#close-cart').addEventListener('click', close_cart);

// Update Cart Item Count
function updateCartItemCount() {
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItemCountBottom = document.getElementById('cartItemCount_bottom');
    cartItemCount.textContent = cartItems.length;
    cartItemCountBottom.textContent = cartItems.length;
}



// shop Page Filteration
const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});


allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {        
        showFilteredContent(btn);
    });
});


function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}



function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}




document.getElementById('searchIcon').addEventListener('click', function () {
    $('#searchModal').modal('show');
});










document.getElementById('userIcon').addEventListener('click', function () {
    $('#userModal').modal('show');
});

document.getElementById('signInBtn').addEventListener('click', function () {
    $('#signInForm').show();
    $('#signUpForm').hide();
    $('#signInBtn').addClass('active');
    $('#signUpBtn').removeClass('active');
});

document.getElementById('signUpBtn').addEventListener('click', function () {
    $('#signInForm').hide();
    $('#signUpForm').show();
    $('#signInBtn').removeClass('active');
    $('#signUpBtn').addClass('active');
});
document.getElementById('returnToSignUp').addEventListener('click', function () {
    $('#signInForm').hide();
    $('#signUpForm').show();
    $('#signInBtn').removeClass('active');
    $('#signUpBtn').addClass('active');
});

document.getElementById('returnToSignIn').addEventListener('click', function () {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInBtn').classList.add('active');
    document.getElementById('signUpBtn').classList.remove('active');
});

