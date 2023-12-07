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
function copyTextClipboard(text_field_id) {
    // Get the text field
    var copyText = document.getElementById(text_field_id);
    alert(copyText);
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }