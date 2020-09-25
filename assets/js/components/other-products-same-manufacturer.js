
function getSingleProduct(){

    var heading = document.querySelector(".overviewSingleProduct__heading");
    var otherProducts = document.querySelector(".overviewSingleProduct__link");
    var salePrice = document.querySelector(".overviewSingleProduct__price--strike");
    var price = document.querySelector(".overviewSingleProduct__price");
    
    var url = new URLSearchParams(window.location.search);

    if (url.has("name")) {
		fetch("/assets/data/app.json")
			.then(function(res) {
				return res.json();
			})
			.then(function(data) {
				let result = data.products.find(function(product) {
				    return product.name == url.get("name");
                })
                
                heading.innerText = `${result.name}`;
                salePrice.innerText = `${result.salePrice}`;
                price.innerText = `${result.price}`;

                otherProducts.innerText = `See other ${result.manufacturer} products`;
                otherProducts.href = `category-list.html?manufacturer=${result.manufacturer}`;
            })
    }
}

export default getSingleProduct;