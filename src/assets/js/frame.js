function frameLoad() {
    const searchbar = document.getElementById("search-bar");

    const contents = document.getElementById("content");
    searchbar.value = contents.src;
    
    //searchbar.value = contents.contentWindow.location.href;
    

    $.ajax({
        type: 'get',
        url: contents.src,
        success: function () {
            console.log("The webpage exists.");
        },
        error: function () {
            console.log("The webpage does not exist!");
            setFrame("404.html")
        }
    });
}

function setFrame(url) {
    if (!url) return;

    const contents = document.getElementById("content");
    contents.src = url;
    console.log("Frame set to " + url);
}

async function handleEnter(event) {
    const searchbar = document.getElementById("search-bar");

    if (event.key === "Enter") {

        let https = searchbar.value.slice(0, 8).toLowerCase();
        let http = searchbar.value.slice(0, 7).toLowerCase();
        if (https === 'https://' || http === 'http://') {
            await setFrame(searchbar.value);
        } else {
            await setFrame("http://" + searchbar.value);
        }
    }
}