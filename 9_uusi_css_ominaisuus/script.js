function hideOnLoad () {
    const img = document.getElementById('figure');
    const code = document.getElementById('code');
    img.hidden = true;
    code.hidden = true;
}
function showHideRegions (name) {
    const pres = document.getElementById('article');
    const img = document.getElementById('figure');
    const code = document.getElementById('code');
    if (name == 'presentation') {
        pres.hidden = false;
        img.hidden = true;
    };
    if (name == 'image') {
        pres.hidden = true;
        img.hidden = false;
    };
    if (name == 'code') {
        if (code.hidden) {
            code.hidden = false;
        } else {
            code.hidden = true;
        };
    };
}