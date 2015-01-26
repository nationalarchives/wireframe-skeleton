//Modenizr test for data URI support
(function () {
    if (Modernizr === undefined) {
        return;
    }
    var data = new Image();
    data.onload = data.onerror = function () {
        var img = this;
        Modernizr.addTest('datauri', function () {
            return (img.width === 1 && img.height === 1);
        });
    };
    data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
})();

$(function () { // All content must be placed within this IIFE.
    $.polyfillPlaceholder({ targetElement: '#tnaSearch' });
    $.polyfillPlaceholder({ targetElement: '#query' });

    // Search expander
    $('<span>', {
        html: "&nbsp;",
        id: "search-expander"
    }).css({
        position: "absolute",
        right: "5px"
    }).appendTo('#logo-holder');

    // Cookie notification
    if (!tnaCheckForThisCookie("dontShowCookieNotice")) {
        $('<div class="cookieNotice">We use cookies to improve services and ensure they work for you. Read our <a href="http://www.nationalarchives.gov.uk/legal/cookies.htm">cookie policy</a>. <a href="#" id="cookieCutter">Close</a></div>').css({
            padding: '5px',
            "text-align": "center",
            backgroundColor: '#FCE45C',
            position: 'fixed',
            bottom: 0,
            'font-size': '14px',
            width: '100%',
            display: 'none'
        }).appendTo('body');

        setTimeout(function () {
            $('.cookieNotice').slideDown(1000); 
        }, 1000);
    }

    // JavaScript to be run on the home page only

    // Functionality being replicated in experiment.js
    // Uncomment this block of code when that is no longer being used. 

    //if ($('#home-page').length) {
    //    $("ul[role='tablist'] li a").tabify({ customEvent: true });
    //}

    // JavaScript to handle 'sorting' message - it seems overly complicated to address this on the back-end
    if ($('#sort-form select:disabled').length) {
        var k = $('#sort-form').find('.emphasis-block');
        k.remove();
        k.insertAfter('#search-control-panel');
    }

    $('#scope-selector').click();

});   // All content must be placed within this IIFE. 

