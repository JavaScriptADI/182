const productsDiv = document.querySelector('#products');
const loadMoreBtn = document.querySelector('#load-more-btn');
console.log(productsDiv);

const PRODUCTS_PER_PAGE = 40;
let currentPage = 1;
let total = 0;

const star = (`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
`);

const starSolid = (`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
    </svg>
`);

function createProductCard(product) {
    const div = productsDiv.querySelector('.product-placeholder');
    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.classList.add('card-img-top');
    div.classList.remove('product-placeholder');

    const rating = Math.round(product.rating);
    const stars = starSolid.repeat(rating) + star.repeat(5 - rating);

    img.addEventListener('load', () => {
        div.innerHTML = (`
            <div class="col h-100">
                <div class="card h-100 shadow product">
                    ${img.outerHTML}
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex text-warning">
                            ${stars}
                        </div>
                    </div>
                </div>
            </div>
        `);
    })

    return div;
}

function fetchProduts(page) {
    fetch(`https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${page * PRODUCTS_PER_PAGE}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            total = data.total;
            console.log(Math.ceil(data.total / PRODUCTS_PER_PAGE));

            data.products.forEach(product => {
                productsDiv.appendChild(createProductCard(product));

            });
        })
        .catch(error => {
            productsDiv.innerHTML = "Failed to load data";

            // window.location.href = "";
        });
}


function showPlaceholders(count) {
    for (let i = 0; i < count; i++) {
        const placeholdeProductDiv = document.createElement('div');
        placeholdeProductDiv.classList.add('product-placeholder');
        placeholdeProductDiv.innerHTML = (`
        <div class=" card h-100" aria-hidden="true">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
        `);
        productsDiv.appendChild(placeholdeProductDiv);
    }
}

const loadMoreFunction = () => {
    const loadedProducts = currentPage * PRODUCTS_PER_PAGE;
    if (total <= loadedProducts) {
        alert('No more products to load')
        loadMoreBtn.classList.add('disabled');
        loadMoreBtn.removeEventListener('click', loadMoreFunction);
        return;
    }
    const placeholdersCount = Math.min(PRODUCTS_PER_PAGE, total - loadedProducts);
    showPlaceholders(placeholdersCount);

    setTimeout(() => {
        fetchProduts(currentPage);
        currentPage += 1;
    }, 2000);
};
loadMoreBtn.addEventListener('click', loadMoreFunction);


showPlaceholders(PRODUCTS_PER_PAGE);
fetchProduts(0);