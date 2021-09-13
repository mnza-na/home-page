var language = (window.navigator.userLanguage || window.navigator.language);

window.onload = async () => {
    document.body = await root()
};