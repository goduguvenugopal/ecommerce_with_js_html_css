// nav links
const cartRoute = document.getElementById("cart");
const homeRoute = document.getElementById("home");

//  pages
const cartPage = document.getElementById("cartPage");
const productPage = document.getElementById("productPage");

homeRoute.addEventListener("click", () => {
  navigate("carthide");
  navigate("homeshow");
});

cartRoute.addEventListener("click", () => {
  navigate("cartshow");
  navigate("homehide");
});

// reusable functions

function navigate(value) {
  switch (value) {
    case "homeshow":
      productPage.style.display = "block";
      break;
    case "homehide":
      productPage.style.display = "none";
      break;
    case "cartshow":
      cartPage.style.display = "block";
      break;
    case "carthide":
      cartPage.style.display = "none";
      break;
    default:
      productPage.style.display = "block";
  }
}

navigate();
