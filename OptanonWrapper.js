function OptanonWrapper() {
    if (!OneTrust.IsAlertBoxClosedAndValid()) {
        // Hide the banner on the geolocation rule first!
        var prefpc = document.getElementById("onetrust-pc-sdk");
        prefpc.style = "display: block !important;";
    }
    if (!document.getElementById('ot-confirm-my-choices')) {
        var newNode = document.createElement("BUTTON");
        newNode.setAttribute('aria-label', "Confirm my choices");
        newNode.setAttribute('id', "ot-confirm-my-choices");
        newNode.setAttribute('class', "save-preference-btn-handler onetrust-close-btn-handler button-theme");
        newNode.setAttribute('tabindex', 0);
        newNode.innerHTML = "Confirm Selection";
        newNode.setAttribute('onclick', "OneTrust.Close()");
        var referenceNode = document.querySelector('.ot-sdk-column');
        referenceNode.insertBefore(newNode, referenceNode.nextSibling);
    }
}
