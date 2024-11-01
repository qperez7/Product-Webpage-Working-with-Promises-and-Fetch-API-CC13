// Task 1: Setup Basic HTML Structure for Product Page (Refer to Html file)

// Task 2: Fetch Products from the API Using Fetch and Promises
const productList = document.getElementById('productList');

// Fetch data from the supplier's product API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })

    .then(products => { //If the fetch is successful, extracts the product details and display them on the webpage.
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} ${product.image} - $${product.price} `;
            productList.appendChild(listItem);
        });
    
    })
    
    

