window.hideLoader = function () {
    console.log("hideLoader");;
    document.getElementById("loader").style.display = "none";
};
// Add CSS for spin animation and fade-out effect
const style = document.createElement('style');
style.textContent = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#loader {
    opacity: 1;
    transition: opacity 1s ease-out;
}

#loader.fade-out {
    opacity: 0;
}
`;
document.head.appendChild(style);

window.showLoader = function showLoader() {
    var loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.border = '16px solid #f3f3f3';
    loader.style.borderTop = '16px solid blue';
    loader.style.borderRadius = '50%';
    loader.style.width = '120px';
    loader.style.height = '120px';
    loader.style.animation = 'spin 2s linear infinite';
    loader.style.zIndex = '1000'; // Ensure loader is on top of other elements

    document.body.appendChild(loader);

    // Fade out after 5 seconds
    setTimeout(() => {
        loader.classList.add('fade-out');

        // Remove the loader after the fade-out transition completes
        setTimeout(() => {
            document.body.removeChild(loader);
            DotNet.invokeMethodAsync('DigitalMindTest.', 'LoaderCompleted');
        }, 1000); // Duration of the fade-out effect
    }, 5000); // Duration before starting fade-out
}



