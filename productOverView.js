function product_over_view(item) {
  const productOverPage = document.getElementById("productOverPage");

  productOverPage.innerHTML = `
    <div class="product-card">

      <div class="product-card__image-container">
        <img
          class="product-card__image"
          src="${item.image}"
          alt="${item.title}"
        />
      </div>

      <div class="product-card__content">

        <span class="product-card__category">
          ${item.category}
        </span>

        <h2 class="product-card__title">
          ${item.title}
        </h2>

        <p class="product-card__description">
          ${item.description}
        </p>

        <div class="product-card__footer">

          <span class="product-card__price">
            $${item.price}
          </span>

          <div class="product-card__rating">

            <span class="product-card__rating-star">
              ⭐
            </span>

            <span class="product-card__rating-rate">
              ${item.rating.rate}
            </span>

            <span class="product-card__rating-count">
              (${item.rating.count} Reviews)
            </span>

          </div>

        </div>

      </div>

    </div>
  `;
}
