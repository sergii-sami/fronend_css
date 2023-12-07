function hideOnLoad () {
    const img = document.getElementById('figure');
    const code = document.getElementById('code');
    img.hidden = true;
    code.hidden = true;
};
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
};
function copyTextClipboard(text_field_id, code_dialog_id) {
    // Get the code text
    var copyText = document.getElementById(text_field_id).innerHTML;
  
    // Copy to clipboard
    navigator.clipboard.writeText(copyText);

    // Run showDialog function
    showDialog(code_dialog_id);
}
function showDialog (code_dialog_id) {
    var dialog = document.getElementById(code_dialog_id);
    if (dialog.open == true) {
        dialog.close();
    } else {
        dialog.show();
    };
};