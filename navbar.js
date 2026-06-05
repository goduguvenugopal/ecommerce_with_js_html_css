// nav links
const cartRoute = document.getElementById("cart");
const homeRoute = document.getElementById("home");

//  pages
const cartPage = document.getElementById("cartPage");
const productPage = document.getElementById("productPage");
const productOverPage = document.getElementById("productOverPage");

homeRoute.addEventListener("click", () => {
  navigate("carthide");
  navigate("homeshow");
  navigate("productoverviewhide")
});

cartRoute.addEventListener("click", () => {
  navigate("cartshow");
  navigate("homehide");
  navigate("productoverviewhide")

});


// reusable functions
// navigation
function navigate(value, data) {
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
    case "productoverviewshow":
      productOverPage.style.display = "block";
        navigate("homehide");
      product_over_view(data);
      break;
    case "productoverviewhide":
      productOverPage.style.display = "none";
      break;
    default:
      productPage.style.display = "block";
      productOverPage.style.display = "none";
  }
}

navigate();



 
