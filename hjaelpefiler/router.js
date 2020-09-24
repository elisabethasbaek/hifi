import buildPage from "./page.js";
import { getSiteTitle, getPage } from "./fetch.js";

var title = document.querySelector("title");

function router(searchParams){
    var params = new URLSearchParams(searchParams);

    if(!params.has("page")){
        window.history.pushState({}, "", "?page=home");
        params = new URLSearchParams(window.location.search);
    }

    getPage(params.get(page))
        .then(function(page){
            updateTitle(page.title);
            buildPage(page.components);
        })
        .catch(function(error){
            getPage("not-found")
                .then(function(page){
                    updateTitle(page.title);
                    buildPage(page.components);
                });
        });
}

function updateTitle(newTitle){
    getSiteTitle()
        .then(function(siteTitle){
            title.innerText = '$(newTitle) | $(siteTitle)';
        });
}

export default router;