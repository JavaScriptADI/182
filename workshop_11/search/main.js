
document.querySelector('input[name="search"]')
    .addEventListener('keyup', (event) => {
        // console.log(event.target.value);
        fetch(`https://dummyjson.com/products/search?q=${event.target.value}&limit=10&sortBy=title`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const list = document.querySelector('#product-search-list');
                list.innerHTML = null;
                data.products.forEach(product => {
                    const li = document.createElement('li');

                    li.innerHTML = (`
                        <li class="list-group-item" style="cursor: pointer">
                            <img src=${product.thumbnail} width="24" height="24"/>
                            ${product.title}
                        </li>
                    `);
                    list.appendChild(li);
                });
            });
    })

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });