async function reloadPage() {
    const contents = document.getElementById("content");

    await setFrame(contents.src);
}