// ===== GLOBAL ERROR HANDLER =====
window.onerror = function(msg, url, line) {
  console.error("JS Error:", msg, "at", url, "line", line);
  return true; // prevent blank page
};

// ===== CART =====
var cart = [];
try {
  var stored = localStorage.getItem("ellabeauty-cart");
  if (stored) cart = JSON.parse(stored);
} catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem("ellabeauty-cart", JSON.stringify(cart)); } catch(e) {}
  updateCartUI();
}

function addToCart(product) {
  var existing = cart.find(function(i) { return i.id === product.id; });
  if (existing) { existing.quantity++; }
  else { cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }); }
  saveCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(function(i) { return i.id !== id; });
  saveCart();
}

function updateCartUI() {
  var count = cart.reduce(function(s, i) { return s + i.quantity; }, 0);
  var total = cart.reduce(function(s, i) { return s + i.price * i.quantity; }, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartItemCount").textContent = count;
  document.getElementById("cartTotal").textContent = "₦" + total.toLocaleString();

  var container = document.getElementById("cartItems");
  var footer = document.getElementById("cartFooter");

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    footer.style.display = "none";
  } else {
    footer.style.display = "block";
    container.innerHTML = cart.map(function(item) {
      return '<div class="cart-item">' +
        '<img src="' + item.image + '" alt="' + item.name + '" />' +
        '<div class="cart-item-info"><h4>' + item.name + '</h4><p>₦' + Number(item.price).toLocaleString() + ' × ' + item.quantity + '</p></div>' +
        '<button class="cart-remove" onclick="removeFromCart(\'' + item.id + '\')" aria-label="Remove">&#x1f5d1;</button>' +
      '</div>';
    }).join("");
  }
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartBackdrop").classList.add("open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartBackdrop").classList.remove("open");
}

// ===== INIT UI =====
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartBackdrop").addEventListener("click", closeCart);
updateCartUI();

// ===== MOBILE MENU =====
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("mobileMenu").classList.toggle("open");
});
// Close mobile menu on link click
document.querySelectorAll("#mobileMenu a").forEach(function(a) {
  a.addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("open");
  });
});

// ===== FETCH PRODUCTS =====
var API_URL = "https://ctzluwfqilwgelexslco.supabase.co/functions/v1/products-api?project_id=prime-depot-2481";

function renderProducts(products) {
  var grid = document.getElementById("productGrid");
  if (!products || products.length === 0) {
    grid.innerHTML = '<p class="loading-msg">Products are loading. Please refresh.</p>';
    return;
  }
  grid.innerHTML = products.map(function(p) {
    return '<div class="product-card">' +
      '<div class="img-wrap"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy" /></div>' +
      '<div class="product-info">' +
        '<h3>' + p.name + '</h3>' +
        '<p class="desc">' + (p.description || '') + '</p>' +
        '<div class="product-bottom">' +
          '<span class="product-price">₦' + Number(p.price).toLocaleString() + '</span>' +
          '<button class="add-btn" onclick=\'addToCart(' + JSON.stringify({ id: p.id, name: p.name, price: p.price, image: p.image }) + ')\'>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join("");
}

(function loadProducts() {
  try {
    fetch(API_URL)
      .then(function(r) {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then(function(data) {
        var list = Array.isArray(data) ? data : (data.products || data.data || []);
        renderProducts(list);
      })
      .catch(function(err) {
        console.error("Product fetch failed:", err);
        document.getElementById("productGrid").innerHTML =
          '<p class="loading-msg">Products are loading. Please refresh.</p>';
      });
  } catch (e) {
    console.error("Product fetch failed:", e);
    document.getElementById("productGrid").innerHTML =
      '<p class="loading-msg">Products are loading. Please refresh.</p>';
  }
})();
