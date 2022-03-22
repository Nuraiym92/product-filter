const products = [
    {
      id: 1,
      title: "Платье принт",
      category: "Платья",
      price: 2870,
      img: "https://static.zara.net/photos///2022/V/0/3/p/2211/537/701/2/w/380/2211537701_6_1_1.jpg?ts=1644332434260",
    },
    {
      id: 2,
      title: "Куртка Puffer",
      category: "Куртки",
      price: 2980,
      img: "https://static.zara.net/photos///2022/V/0/3/p/7901/556/712/2/w/286/7901556712_6_1_1.jpg?ts=1644489033673",
      
    },
    {
      id: 3,
      title: "Малиновое платье",
      category: "Платья",
      price: 2000,
      img: "https://static.zara.net/photos///2022/V/0/3/p/1639/019/630/2/w/217/1639019630_6_1_1.jpg?ts=1644857983230",
      
    },
    {
      id: 4,
      title: "Куртка Floral",
      category: "Куртки",
      price: 4500,
      img: "https://static.zara.net/photos///2022/V/0/3/p/1164/365/676/2/w/750/1164365676_6_1_1.jpg?ts=1645610888210",
      
    },
  ];
  
  window.addEventListener("load", function () {
    const productsInner = document.querySelector(".products__inner");
    const filtersContainer = document.querySelector(".products__filters");
  
    displayProductsItems(products);
    displayFilterBtns();
  
    function displayProductsItems(products) {
      let displayProducts = products.map(function (item) {
        return `<article key="${item.id}" class="products__item">
        <img
          class="products__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="products__item-info">
          <header>
            <h3>${item.title}</h3>
            <span class="products__item-price">${item.price}сом</span>
          </header>
         
        </div>
      </article>`;
      });
  
      displayProducts = displayProducts.join("");
      productsInner.innerHTML = displayProducts;
    }
  
    function displayFilterBtns() {
      const categories = products.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["все"]
      );
  
      const categoryBtns = categories
        .map(function (category) {
          return `
          <button class="products__filters-btn" type="button" data-cat="${category}">
            ${category}
          </button>
        `;
        })
        .join("");
  
      filtersContainer.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".products__filters-btn");
  
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.cat;
          const productCategory = products.filter(function (item) {
            if (item.category === category) {
              return item;
            }
          });
          if (category === "все") {
            displayProductsItems(products);
          } else {
            displayProductsItems(productCategory);
          }
        });
      });
    }
  });