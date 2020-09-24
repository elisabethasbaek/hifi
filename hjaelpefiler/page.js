function buildPage(content) {
    var mainContent = document.querySelection(".mainContent");

    content.forEach(function(element) {
        mainContent.appendChild(buildElement(element));
    })
}

function buildElement(element) {
    var htmlElement = document.createElement(element.type);
    if(element.type == "h1") {
        htmlElement.className = "articleHeading";
    }

    htmlElement.innerText = element.text;
    return htmlElement;
}

export default buildPage;

export { buildElement };