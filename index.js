let btn = document.querySelector("[data-btn]");
let section = document.querySelector("[data-products]");

btn.addEventListener("click", async () => {
  section.innerHTML = `<div class="text-center"><h3>Loading...</h3></div>`;

  let retrieve = await data();

  section.innerHTML = retrieve.products
    .map((product) => {
      return `
          <div class="border border-border-secondary rounded-2 p-4 col-12 col-sm-6 col-md-4 col-lg-3 shadow-lg" style="width: 18rem;">
            <img
              src="${product.thumbnail}"
              class="card-img-top object-fit-contain"
            />
            <div class="card-body d-flex flex-column g-1 px-0 pb-0">
              <h5 class="card-title">${product.title}</h5>
              <p class="fw-normal text-muted mb-2">${product.category}</p>
              <p class="card-text fs-6">${product.description.slice(0, 103)}</p>
              <div class="mt-2">
                <p class="text-success fw-bold fs-5 mb-2">$${product.price}</p>
                <a class="btn btn-primary w-100">View Product</a>
              </div>
            </div>
        </div>
        `;
    })
    .join("");
});

async function data() {
  let resault = await fetch("https://dummyjson.com/products");

  return await resault.json();
}
