let mainProduct = document.querySelector(".main_products");
let warning = document.querySelector(".warning");

async function getData() {
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(
      (data) =>
        (mainProduct.innerHTML = data
          .map(
            (item) =>
              `
            <div class="main_products_item" data-product-id="${item.id}">
                <img
                  class="main_products_item_img"
                  src="${item.image}"
                  alt="photo"
                />
                <div class="main_products_item_bottom">
                  <p class="main_products_item_bottom_name">${item.title}</p>
                  <h2 class="main_products_item_bottom_price">
                    Cəmi ${item.price}$
                    <button class="main_products_item_bottom_price_shopBtn" href="#"
                      ><span class="material-symbols-outlined">
                        shopping_cart
                      </span>
                  </h2>
                </div>
                <button class="main_products_item_heartIcon" ><i class="fa-regular fa-heart"></i></button>
              </div>`
          )
          .join(""))
    )
    .then(() => {
      getWork();
    });
}
getData();

function getWork() {
  let count = 0;
  let shopNumber = document.querySelector(".header_nav_menu_shops_number");
  let basketBtn = document.querySelectorAll(
    ".main_products_item_bottom_price_shopBtn"
  );
  basketBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      warning.innerHTML = "Səbətə əlavə edilir...";
      btn.toggleAttribute("disabled");
      setTimeout(() => {
        warning.innerHTML = null;
        btn.toggleAttribute("disabled");
        setTimeout(() => {
          shopNumber.innerHTML = `${(count += 1)}`;
          warning.innerHTML = "Səbətə əlavə edildi";
          warning.style.color = "green";
          setTimeout(() => {
            warning.style.color = "#f27a1a";
            warning.innerHTML = null;
          }, 1000);
        }, 0);
      }, 2000);
    });
  });
}
