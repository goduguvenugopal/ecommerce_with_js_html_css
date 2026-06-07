const API = "https://fakestoreapi.com/products";

let products = [];
let cartProducts = [];
let singleProduct = {};

// home page
const loginModal = document.getElementById("main-login-modal");
const productMainCard = document.getElementById("product-main-card");
const skeletonMainCard = document.getElementById("skeleton-main-card");
skeletonMainCard.style.display = "flex";
skeleton();

function skeleton() {
  skeletonMainCard.innerHTML = Array.from({ length: 12 })
    .map(
      (_, index) => `
      <div data-key="${index + 1}" class="skeleton-item">
        <div class="skeleton-image"></div>
        <div class="title-section">
          <p></p>
        </div>
      </div>
    `,
    )
    .join("");
}

// login
const loginBtn = document.getElementById("loginBtn");
const login = document.getElementById("login");

// navbar
loginBtn.onclick = openLoginModal;
login.onclick = closeLoginModal;

function openLoginModal() {
  loginModal.style.display = "flex";
}

function closeLoginModal() {
  loginModal.style.display = "none";
}

// fetch products

async function fetchProducts() {
  try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const parsedData = await res.json();

    window.products = parsedData;

    parsedData.forEach(mapItems);
  } catch (error) {
    console.error(error);
  } finally {
    skeletonMainCard.style.display = "none";
  }
}

// iterate arrray of item with map function
function mapItems(item) {
  const itemCard = document.createElement("div");
  itemCard.className = "item-card";
  itemCard.dataset.id = item.id;
  itemCard.addEventListener("click", () => {
    navigate("productoverviewshow", item);
  });

  const imgTag = document.createElement("img");
  imgTag.setAttribute("loading", "lazy");
  imgTag.src = item.image;
  imgTag.className = "item-image";

  const itemTitleCard = document.createElement("div");
  itemTitleCard.className = "title-section";

  const itemTitle = document.createElement("p");
  itemTitle.textContent = `${item.title.substring(0, 12)}...`;

  const addCartBtn = document.createElement("button");
  addCartBtn.textContent = "Add To Cart";
  addCartBtn.className = "btn-blue";
  addCartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartProducts.push(item);
    renderCart();

    addCartBtn.textContent = "Go To Cart";
    addCartBtn.style.backgroundColor = "green";
    addCartBtn.disabled = true;
    addCartBtn.onclick.addEventListener("click", () => {});
  });

  itemTitleCard.appendChild(itemTitle);
  itemCard.appendChild(imgTag);
  itemCard.appendChild(itemTitleCard);
  itemTitleCard.appendChild(addCartBtn);
  productMainCard.appendChild(itemCard);
}

// simulate like server takes much time to give response
setTimeout(() => {
  fetchProducts();
}, 100);
