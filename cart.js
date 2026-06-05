const cartMainCard = document.getElementById("cart-main-card");

function renderCart() {
  cartMainCard.innerHTML = "";
  cartProducts.forEach(mapCartItems);
}

// iterate arrray of item with map function
function mapCartItems(item) {
  const itemCard = document.createElement("div");
  itemCard.className = "item-card";

  const imgTag = document.createElement("img");
  imgTag.src = item.image;
  imgTag.className = "item-image";

  const itemTitleCard = document.createElement("div");
  itemTitleCard.className = "title-section";

  const itemTitle = document.createElement("p");
  itemTitle.textContent = `${item.title.substring(0, 12)}...`;

  const addCartBtn = document.createElement("button");
  addCartBtn.textContent = "Remove";
  addCartBtn.className = "btn-yellow";
  addCartBtn.addEventListener("click", function () {
    removeItem(item);
  });

  itemTitleCard.appendChild(itemTitle);
  itemCard.appendChild(imgTag);
  itemCard.appendChild(itemTitleCard);
  itemTitleCard.appendChild(addCartBtn);
  cartMainCard.appendChild(itemCard);
}

// remove item
function removeItem(item) {
  cartProducts = cartProducts.filter((prod) => prod !== item);
  renderCart()
}
