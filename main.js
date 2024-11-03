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
// Task 3: Display Product Details Dynamically
    .then(products => { //If the fetch is successful, extracts the product details and display them on the webpage.
        products.forEach(product => {
            const listItem = document.createElement('li');
            
            listItem.innerHTML = `
    <img src="${product.fields.image[0].url}" 
     alt="${product.fields.name}">
    <p>Name: ${product.fields.name}</p>
    <p>Company: ${product.fields.company}</p>
    <p>Price: $${(product.fields.price / 100).toFixed(2)}</p>
        `;
        productList.appendChild(listItem); // Adds each product to the list
            console.log(product); // Logs each product in the console for reference
        });
        
    })
// Task 4: Handle Errors Gracefully
.catch(error => {
    console.error('Failed to load products. Please try again later.', error);
}); // Returns an error message if failed to load products

    

