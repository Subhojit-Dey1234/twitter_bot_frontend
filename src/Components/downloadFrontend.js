function downloadVideoFrontend(blob, name) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return window.navigator.msSaveOrOpenBlob(blob);
    const data = window.URL.createObjectURL(
        blob
    );
    const link = document.createElement("a");
    link.href = data;
    link.download = name;

    link.dispatchEvent(
        new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
        }),
    );
}

export default downloadVideoFrontend