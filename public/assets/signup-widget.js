(function () {

    "use strict";

    // Blink Webinars Signup Iframe events

    // bw-signup-success

    // bw-signup-get-url-data
    // bw-signup-set-url-data

    // bw-signup-get-iframe-data
    // bw-signup-set-iframe-data

    var events = {
        1: "bw-signup-success",
        2: "bw-signup-get-url-data",
        3: "bw-signup-get-iframe-data"
    };

    var _method = (window.addEventListener) ? "addEventListener" : "attachEvent";
    var _eventer = window[_method];
    var _event = (_method == "attachEvent") ? "onmessage" : "message";

    _eventer(_event, function (event) {

        var msg;

        try {
            msg = event.data;
        } catch (e) {
            return;
        }

        // Signup Success Event
        try {
            if (msg.indexOf(events[1]) === 0) {
                signupSuccess(msg);
            }
        } catch (e) {
            return;
        }

        // Get Url Data Event
        try {
            if (msg.indexOf(events[2]) === 0) {
                sendUrlData();
            }
        } catch (e) {
            return;
        }

        // Get Iframe Data Event
        try {
            if (msg.indexOf(events[3]) === 0) {
                sendIframeData();
            }
        } catch (e) {
            return;
        }

    }, false);

    function getLinkerParam() {
        try {
            return ga.getAll()[0].get("linkerParam").split("=")[1];
        } catch (e) {
            return;
        }
    }

    function getDecoratedUrl(url) {
        var linker = getLinkerParam();
        var decoratedUrl;

        if (linker) {
            try {
                decoratedUrl = new URL(url)
                decoratedUrl.searchParams.set("_ga", linker)
                decoratedUrl = decoratedUrl.href
            } catch (e) {
            }
        }

        return decoratedUrl || url
    }

    function signupSuccess(msg) {
        location.href = getDecoratedUrl(msg.replace(events[1] + ":", ""));
    }

    function sendUrlData() {
        setTimeout(function () {
            _sendData("bw-signup-set-url-data", true);
        }, 1500);
    }

    function sendIframeData() {
        setTimeout(function () {
            _sendData("bw-signup-set-iframe-data", false);
        }, 1500);
    }

    function _sendData(msg, full) {

        // Send current location data to iframes with the blinkwebinars-signup-widget css class through postMessage method
        // @param {string} msg - Response message name.
        // @param {boolean} full - Include all url data, if false, we send only the iframe item number.

        var docs = [];
        var data = [];
        var item;
        var el;
        var i;

        // Get iframe elements by id
        el = document.getElementById("blinkwebinars-signup-widget");

        if ((el) && (el.contentWindow)) {
            docs.push(el.contentWindow);
        }

        // Get iframe elements by class
        el = document.getElementsByClassName("blinkwebinars-signup-widget");

        if (el.length > 0) {
            for (i = el.length - 1; i >= 0; i--) {
                if (el[i].contentWindow) {
                    docs.push(el[i].contentWindow);
                }
            }
        }

        if (docs.length === 0) {
            return;
        }

        // Set data from current location parameters
        if (full) {
            if (location.search.substr(1)) {
                data.push(location.search.substr(1));
            }

            if (location.hash.substr(1)) {
                data.push(location.hash.substr(1));
            }
        }

        data = data.join("&");

        // Send location data
        for (i = docs.length - 1; i >= 0; i--) {
            item = "bw-signup-widgets-item=" + i;

            if (full) {
                item = item + "&" + data;
            }

            if (docs[i].postMessage) {
                try {
                    docs[i].postMessage(msg + ":" + item, "*");
                } catch (e) {
                    //
                }
            }
        }
    }

})();
