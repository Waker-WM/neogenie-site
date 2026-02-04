window.getAspectRatio = () => {
    return window.innerWidth / window.innerHeight;
};

window.listenToResize = (dotNetHelper) => {
    window.addEventListener("resize", () => {
        const ratio = window.innerWidth / window.innerHeight;
        dotNetHelper.invokeMethodAsync("UpdateAspectRatio", ratio);
    });
};
