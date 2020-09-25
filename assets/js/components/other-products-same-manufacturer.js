
function getSingleProduct(){

    var breadcrumbCategory = document.querySelector(".breadcrumb .breadcrumb__category");
    var breadcrumbProduct = document.querySelector(".breadcrumb > li:last-of-type");
    var heading = document.querySelector(".overviewSingleProduct__heading");
    var otherProducts = document.querySelector(".overviewSingleProduct__link");
    var price = document.querySelector(".overviewSingleProduct__price--strike");
    var salePrice = document.querySelector(".overviewSingleProduct__price");
    var description = document.querySelector(".overviewSingleProduct__description");

    /* additional information box: */
    var manufacturer = document.querySelector(".additionalInfo__manufacturer");
    var warranty = document.querySelector(".additionalInfo__warranty");
    /*                             */
    
    /* additional information box: */
    var manufacturer = document.querySelector(".additionalInfo__manufacturer");
    var warranty = document.querySelector(".additionalInfo__warranty");
    /*                             */

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
                
                breadcrumbProduct.innerText = `${result.name}`; /* breadcrumb: name of product */
                heading.innerText = `${result.name}`; /* heading */
                price.innerText = `${result.price}`; /* price with line through */
                salePrice.innerText = `${result.salePrice}`; /* price */
                description.innerText = `${result.description}`; /* description of product */

                breadcrumbCategory.innerText = `${result.category}`; /* breadcrumb: category of product */
                breadcrumbCategory.href = `category-list.html?category=${result.category}`;

                otherProducts.innerText = `See other ${result.manufacturer} products`; /* link for other products from same manufacturer */
                otherProducts.href = `category-list.html?manufacturer=${result.manufacturer}`;

                manufacturer.innerText = `${result.manufacturer}`; 
                warranty.innerText = `${result.freeWarranty}`; 
            })
    }
}

export default getSingleProduct;