function showLoader() {
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

    document.body.appendChild(loader);

    setTimeout(() => {
        document.body.removeChild(loader);
        DotNet.invokeMethodAsync('YourAssemblyName', 'LoaderCompleted');
    }, 10000);
}
