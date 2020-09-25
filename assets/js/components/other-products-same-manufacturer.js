/* "See other Marantz products"

Ordet "Marantz" skal ændre sig alt efter hvilket produkt der vises og hvad det specifikke produkts "manufacturer" er i json dokumentet

Linket skal føre til oversigten over alle produkter med det specifikke produkts "manufacturer" i json dokumentet*/


function getSingleProduct(){

    var otherProducts = document.querySelector("overviewSingleProduct__link");
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
                
                otherProducts.innerText = `See other ${result.manufacturer} products`;
                otherProducts.href = `singleProduct__page.html?manufacturer=${result.manufacturer}`;
            })
    }
}

export default getSingleProduct;