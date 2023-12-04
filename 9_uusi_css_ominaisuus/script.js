function openMenu() {
    let menu_bar = document.getElementById("navmenu");
    if (menu_bar.hidden) {
        menu_bar.hidden = false;
    } else {
        menu_bar.hidden = true;
    }
};
function showDialog() {
    const dialog = document.getElementById("myDialog");
    if (dialog.open == true) {
        dialog.close();
    } else {
        dialog.show();
    };
};