function getSiteTitle(){
    return fetch("/assets/data/pages.json")
        .then(function(respone){
            if(!Response.ok){
                alert{"Noget gik galt, prøv igen senere"};
                return;
            }

            return response.json();
        })
        .then(function(data){
            return data.siteTitle;
        });
}

function getPage(permaLink){
    return fetch("/assets/data/pages.json")
        .then(function(response){
            if(!response.ok){
                alert("Noget gik galt, prøv igen senere");
                return;
            }

            return response.json();
        })
        .then(function(data){
            let index = data.pages.findIndex(page ==> page.permaLink == permaLink);
            return data.pages(index);
        });
}

export { getSiteTitle, getPage };