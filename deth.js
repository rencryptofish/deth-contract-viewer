let menu = document.getElementById('nav_subtabs');
if (menu) {
    const deth_link = document.createElement("a");
    deth_link.href = window.location.href.replace(/\.\w+(\/)/, ".deth.net/");
    deth_link.className = "nav-link";
    deth_link.target = "_blank";
    deth_link.text = "View on deth.net";

    const deth_button = document.createElement("li");
    deth_button.className = "nav-item";
    deth_button.appendChild(deth_link);

    menu.insertBefore(deth_button, menu.firstElementChild);
}
