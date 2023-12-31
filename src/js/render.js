const productsSection = document.querySelector(".products__section");

export function renderLoading(loadingState) {
  const template = `
    <div class="loading__spinner flex justify-center min-h-screen items-center">
      <span class="animate-spin">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      </span>
    </div>
  `;

  if (loadingState) {
    productsSection.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading__spinner").style.display = "none";
  }
}

export function renderData(products) {
  products.forEach((product) => {
    const template = `
      <div class="m-5 border rounded-xl w-fit">
        <img src="${product?.image}" alt="${product?.title}" class="w-96 aspect-square object-cover"/>
        <h2 class="text-2xl font-semibold">${product?.title}</h2>
        <p class="text-xl">$${product?.price}</p>
      </div>
    `;

    productsSection.insertAdjacentHTML("beforeend", template);
  });
}

export function renderError(message) {
  const template = `
    <div class="min-h-screen flex justify-center items-center">
      <p class="text-rose-500">${message}</p>
    </div>
  `;

  productsSection.insertAdjacentHTML("beforeend", template);
}
