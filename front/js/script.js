
fetch("http://localhost:3000/api/products")
.then((resp) => resp.json())
.then(function(data) {
    const container = document.querySelector('#items');
    data.forEach((product) => {
        container.innerHTML += `<a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>`;
    }); 
})
.catch(function(error) {
  console.log(error);
});