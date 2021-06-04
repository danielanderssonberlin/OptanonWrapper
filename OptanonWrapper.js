let executed = 0;
function OptanonWrapper() {
    if (!OneTrust.IsAlertBoxClosedAndValid()) {
        // Hide the banner on the geolocation rule first!
        var prefpc = document.getElementById("onetrust-pc-sdk");
        prefpc.style = "display: block !important;";
    }
    if(executed == 0){
        let clone = document.querySelector('.save-preference-btn-handler').cloneNode( true );
        document.querySelector ('.ot-sdk-column ').style.display = "flex";
        document.querySelector('.ot-sdk-column').appendChild( clone );
        var events = getEventListeners(document.querySelectorAll('.save-preference-btn-handler')[1]);
        for(var p in events) {
        events[p].forEach(function(ev) {
                document.querySelector('.save-preference-btn-handler').addEventListener(p, ev.listener, ev.useCapture);
            });
        }
    executed = 1;
    }
}
