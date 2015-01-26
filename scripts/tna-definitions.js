//  Purpose:
//          Repository of utility functions (i.e. custom extentions to jQuery and ), custom event handlers and helpers created for Discovery.
//          All function definitions / custom jQuery utilities / constructors etc. must be placed within this file. 

// ------------
// 1. Utilities
// ------------
// 1.1 $.fadeToggler(passedObject) 
// 1.2 $.polyfillPlaceholder(passedObject)
// 1.3 $.displayFetchedContent(passedObject)
// 1.4 $.fetchWithAjax(passedObject)
// 1.5 $.showExpander()
// 1.6 $.setUpCheckboxTogglers()
// 1.7 $.customEventer()
// 1.8 cacheOrRetrieveSearchTerm() // Note: this is not a jQuery function.
// 1.9 $.setUpRadioRelationships()
// 1.10 $.bindToggle
// 1.11 RandomAssets() constructor
// 1.12 $.toggleDisplayOfSearchOptions()
// 1.13 $.fn.tabify()
// 1.14 $.fn.restrictText()
// 1.15 tnaLogger()
// 1.16 indexOf() 
// 1.17 $.fn.filterBehaviours()
// 1.18 setThisCookie()
// 1.19 checkForThisCookie()

// 1. Utilities
// 1.1 $.fadeToggler(passedObject) 

$.fadeToggler = function (passedObject) {
    var focussedElement, elementToFade, milliseconds;
    focussedElement = $(passedObject.focussedElement);
    elementToFade = $(passedObject.elementToFade);
    milliseconds = passedObject.milliseconds;
    if (!Modernizr.testProp('opacity')) { // Older browsers that don't support CSS opacity property
        elementToFade.hide();
        focussedElement.focus(
            function () {
                elementToFade.fadeIn(500);
            });
        focussedElement.blur(
            function () {
                elementToFade.fadeOut(500);
            });
    } else { // Newer browsers that do support CSS opacity property
        focussedElement.focus(
            function () {
                elementToFade.addClass('shown');
            });
        focussedElement.blur(
            function () {
                elementToFade.removeClass('shown');
            });
    }
};

// 1.2 $.polyfillPlaceholder(passedObject)
$.polyfillPlaceholder = function (passedObject) {
    var targetElement, placeholderText;
    targetElement = $(passedObject.targetElement);
    placeholderText = targetElement.attr('placeholder');
    if (targetElement.length && !Modernizr.input.placeholder) { // If the element is on the page and there is no support for HTML5 placeholders
        targetElement.val(placeholderText);
        targetElement.on('focus', function () {
            if (targetElement.val() === placeholderText) {
                targetElement.val("");
            }
        });
        targetElement.on('blur', function () {
            if (!targetElement.val()) {
                targetElement.val(placeholderText);
            }
        });
    }
};

// 1.3 $.displayFetchedContent(passedObject)
$.displayFetchedContent = function (passedObject) {
    var content, targetElement;
    content = passedObject.content || false;
    targetElement = passedObject.targetElement || false;
    if (content && targetElement) {
        $(targetElement).replaceWith(content);
        return true;
    } else {
        return false;
    }
};

// 1.4 $.fetchWithAjax(passedObject)
$.fetchWithAjax = function (passedObject) {
    cacheOrRetrieveSearchTerm();
    var urlToGET, targetElement, request;
    targetElement = passedObject.targetElement || false;
    urlToGET = passedObject.urlToGET || false;
    if (urlToGET && urlToGET) {
        request = $.ajax({
            url: urlToGET,
            cache: false,
            success: function (data) {
                $.displayFetchedContent({ content: data, targetElement: targetElement });
                $(document).trigger("homePageUpdated");
                cacheOrRetrieveSearchTerm();
            }
        });
        return true;
    } else {
        return false;
    }
};

// 1.5 $.showExpander()
$.showExpander = function () {
    if ($('.expander').length) {
        $('.expander').delay(200).slideDown(400);
    }
};

// 1.6 $.setUpCheckboxTogglers()
$.setUpCheckboxTogglers = function () {
    if ($('#toggler').length) {
        $('#toggler').on('change', function () { // Bind togglees to togger selection
            if ($('#toggler').prop('checked')) {
                $('.togglee').prop('checked', true);
            } else {
                $('.togglee').prop('checked', false);
            }
        });
        $('.togglee').on('change', function () { // Checking the toggler when the togglees are checked
            if (this.checked) {
                $('#toggler').prop('checked', true);
            }
        });
    }
    if ($('.clearTogglees').length) { // Clear togglees when another radio is checked 
        $('.clearTogglees').on('change', function () {
            $('.togglee').prop('checked', false);
        });
    }
};

// 1.7 $.customEventer()
$.customEventer = function (passedObject) {
    var elementIdOrClass = passedObject.elementIdOrClass,
        eventToWatch = passedObject.eventToWatch,
        customEventToTrigger = passedObject.customEventToTrigger;

    $(document).on(eventToWatch, elementIdOrClass, function () {
        $(document).trigger(customEventToTrigger);
    });
};

// 1.8 cacheOrRetrieveSearchTerm()
var cacheOrRetrieveSearchTerm = function () {
    if (!cacheOrRetrieveSearchTerm.term) { // If the property doesn't exist yet, create it. May seem odd, but necessary for memoization. 
        cacheOrRetrieveSearchTerm.term = "";
    }
    if ($('#mainSearch').val()) {
        cacheOrRetrieveSearchTerm.term = $('#mainSearch').val();
    }
    $('#mainSearch').val(cacheOrRetrieveSearchTerm.term);
};

// 1.9 $.setUpRadioRelationships()
$.setUpRadioRelationships = function () {
    $('.radioLeader, .squashRadioFollowers').on('change', function () { // The only reason classes are used here is because the ids have a specific purpose outside of JS. 
        if ($('.radioLeader').prop('checked')) {
            $('.radioFollower').prop('checked', true);
        } else {
            $('.inRadioFollowerGroup').prop('checked', false);
        }
    });
    $('.inRadioFollowerGroup').on('change', function () {
        $('.radioLeader').prop('checked', true);
    });
};

// 1.10 $.bindToggle definition (jQuery utility method) that will: 
// a. Toggle the display of togglees when a toggler is clicked.
// b. Adds a 'hasBeenInteractedWith' class to the toggler
// Note: this function uses event delegation (so that it will work for DOM elements that do not exist at time of binding)
// The following optional parameters extend the base functionality as described: 
//  -   togglerClass represents the class to be added to the toggler at times when the target is expanded. 
//      is set as 'expanded' by default but can be changed to any string. 
//  -   hideTargetOnLoad determines whether the target will be hidden on load. It defaults to true     
//  -   type allows for control over the type of toggle. The default behaviour is straight toggle but passing a value of 'slide' 
//      changes the behaviour to slideToggle. This can easily be extended to include additional options.
//  -   contextual changes the behaviour so that the target and toggler must both have the target's parent as an ancestor. 

$.bindToggle = function (options) {

    $.bindToggle.defaults = {
        togglerClass: 'expanded',
        hideTargetOnLoad: true,
        type: false,
        contextual: false
    };

    var settings = $.extend({}, $.bindToggle.defaults, options);
    if (settings.hideTargetOnLoad === true) {
        $(settings.target).hide();
    }

    $(document).on('click', settings.toggler, function (e) {
        e.preventDefault();
        var toggler = $(this), target;
        if (settings.contextual === true) {
            target = $(this).parent().find(settings.target);
        } else {
            target = $(settings.target);
        }
        switch (settings.type) {
            case 'slide':
                target.slideToggle('fast');
                break;
            default:
                target.toggle();
        }
        toggler.addClass('hasBeenInteractedWith');
        toggler.toggleClass(settings.togglerClass);
    });
};

// 1.11 Constructor for RandomAssets. This: 
//  a. should receive an array of objects represent assets 
//  b. returns an object that. 
//  c. a method is then attached to the object prototype which allows for the backstretch library to be called. 
// Note: since this is a constructor it should be used with 'new' (i.e. var p = new RandomAsset())

function RandomAsset(arrayOfAssetObjects) {
    if (Object.prototype.toString.call(arrayOfAssetObjects) === '[object Array]') {
        var randomlyIdentifiedAsset = arrayOfAssetObjects[Math.floor(Math.random() * arrayOfAssetObjects.length)];
        this.title = randomlyIdentifiedAsset.title || null;
        this.catRef = randomlyIdentifiedAsset.catRef || null;
        this.src = randomlyIdentifiedAsset.src || null;
        this.relatedLink = randomlyIdentifiedAsset.relatedLink || null;
        this.linkTitle = randomlyIdentifiedAsset.linkTitle || null;
    }
}

RandomAsset.prototype.backstretchIt = function (targetElement, optional_targetForDescription) {
    $(targetElement).backstretch(this.src);
    if (optional_targetForDescription) {
        $(optional_targetForDescription).html(this.title + " <a href='" + this.relatedLink + "' title='Image of " + this.title + " Catalogue reference: " + this.catRef + "'>" + this.catRef + "</a>");
    }
};

RandomAsset.prototype.insertAsHTMLImage = function (targetParent, optional_targetForDescription) {
    $('<img>', {
        src: this.src,
        title: this.title
    }).appendTo($(targetParent));

    if (optional_targetForDescription) {
        $(optional_targetForDescription).html(this.title + " <a href='" + this.relatedLink + "' title='" + this.linkTitle + "'>" + this.catRef + "</a>");
    }
};

// 1.12 Generic toggle method. Does not include any bindings since it is designed to be used with 
//      custom event types
$.toggleDisplayOfElement = function (passedObject) {
    $(passedObject.togglee).toggle();
    $(passedObject.toggler).toggleClass('expanded');
};

// 1.13 Tabify - jQuery plugin designed for use with an ARIA labelled tab section. 
//      Requriements for use: 
//          - The tabs must be list items within a ul that has a role attribute of 'tablist'.
//          - Only one tab/tabpanel on the page (the plugin can be extended later, if needed). 
//          - Each tab should have an id (required by ARIA)
//          - Each tab panel to have:
//              a) an 'aria-labelledby' attribute (corresponding to to tab id)
//              b) a role of tab panel
//       Usage: 
//          $("ul[role='tablist'] li").tabify();
//      Extensions: 
//          - The plugin allows for custom events to be triggered. The triggered event is equivalent to the id of the element clicked. 

$.fn.tabify = function (options) {
    var settings = $.extend({}, $.fn.tabify.defaults, options);

    $('[role="tabpanel"]:not(:first)').hide(); // Hiding all but the first tabpanel
    this.eq(0).addClass(settings.classForSelectedTab); // Adding the 'current' class to the first tab

    return this.each(function () {
        var $this = $(this),
            id = $this.attr('id');

        $this.on('click', function (e) {
            var $tabs = $('[role="tablist"] li'), $tabpanels = $('[role="tabpanel"]'), $target = $('[aria-labelledby="' + id + '"]');

            e.preventDefault();

            $tabs.removeClass(settings.classForSelectedTab).attr('aria-selected', false);
            $this.addClass(settings.classForSelectedTab).attr('aria-selected', true);

            $tabpanels.hide().attr('aria-hidden', true);
            $target.show().attr('aria-hidden', false);
        });

    });
};

$.fn.tabify.defaults = {
    'classForSelectedTab': 'selected'
};

// 1.14 $.fn.restrictText() 
//      jQuery plugin that: 
//          1.  Restricts the length of text elements to an [optional] charachter length.
//              The string is actually cut to the last space. 
//          2. Optionally adds read more/less links to toggle display
//      Example usage:  $('.elements').restrictText() // Restricts to default for plugin
//                      $('.elements').restrictText({ 'restrictTo' : 300 }) 
//                      $('.elements')..restrictText({ 'showHide' : true, 'restrictTo' : 200 });

$.fn.restrictText = function (options) {
    var settings = $.extend({}, $.fn.restrictText.defaults, options);
    // Bindings for the show/hide - this can't be in the loop (to avoid duplication of handlers)
    if (settings.showHide) {
        $(document.body).on('click', 'a.read-more', function (e) {
            var $readmore = $(this),
                $subject = $readmore.prev();
            e.preventDefault();
            if ($readmore.text() === "Hide") {
                $subject.text($subject.data('restricted-text'));
                $readmore.text('Read more');
            }
            else {
                $subject.text($subject.data('full-text'));
                $readmore.text('Hide');
            }
        });
    }

    return this.each(function () {
        $this = $(this);
        var text = $this.text();
        if (text.length > settings.restrictTo) {
            $this.data('full-text', text);
            var indexOfLastSpace = $this.data('full-text').substring(0, settings.restrictTo).lastIndexOf(' ');
            $this.data('restricted-text', $this.data('full-text').substring(0, indexOfLastSpace) + '...');
            $this.text($this.data('restricted-text'));
            if (settings.showHide) {
                $this.after($('<a class="read-more" href="#">Read more</a><div class="clr"></div>'));
            }
        }
    });
};

$.fn.restrictText.defaults = {
    'restrictTo': 150,
    'showHide': false
};

// 1.15 tnaLogger() - Simple wrapper around console.log() to prevent IE falling over when it encounters logging code
var tnaLogger = function (content) {
    if (!!console && console.log) {
        if (typeof content == "string") {
            console.log(content);
        } else {
            for (var i in content) {
                console.log(content[i]);
            }
        }
    }
};

// 1.16 indexOf() - Utility that polyfills Array.prototype.indexOf for IE < 9
// You would use it like this: 
//
//  var arr = [0, 1, 2], needle = 1, index;
//  index = indexOf.call(arr, needle); // 1

var indexOf = function (needle) {
    if (typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            var i = -1, index = -1;
            for (i = 0; i < this.length; i++) {
                if (this[i] === needle) {
                    index = i;
                    break;
                }
            }
            return index;
        };
    }
    return indexOf.call(this, needle);
};

// 1.17 $.fn.filterBehaviours plugin is used on the search results page to:
//  1.  Create an accordion-like interaction between .filter-toggler <a> elements and .filter-togglee <div> elements
//  2.  Hide 'secondary' filters based on an index being passed to the plugin as 'hideAfter'. This defaults to 3.
//          i.e.    $('.available-filters > li').filterBehaviours({ hideAfter : 2 })
//                  would have all but the first two filters hidden by default
$.fn.filterBehaviours = function (options) {
    var settings = $.extend({}, $.fn.filterBehaviours.defaults, options),
        count = 0;

    $.ariaShow = function ($el) {
        $el.slideDown(300);
        $el.attr('aria-hidden', false);
    };

    $.ariaHide = function ($el) {
        $el.slideUp(300);
        $el.attr('aria-hidden', true);
    };

    return this.each(function () {
        // Plugin logic
        var $this = $(this),
            $toggler = $this.find('.filter-toggler'),
            $togglee = $this.find('.filter-togglee');

        // Initializing all the tabs and tab panels to expanded, shown and aria-hidden=false
        $toggler.addClass('expanded');
        $.ariaShow($togglee);

        count++;

        if (count > settings.hideAfter) {
            $toggler.toggleClass('expanded');
            $.ariaHide($togglee);
        }

        $toggler.on('click', function (e) {
            e.preventDefault();
            $toggler.toggleClass('expanded');
            var expanded = $toggler.hasClass('expanded');
            if (expanded === true) {
                $.ariaShow($togglee);
            } else {
                $.ariaHide($togglee);
            }
        });

    });
};

$.fn.filterBehaviours.defaults = {
    hideAfter: 3
};

// 1.18 setThisCookie()
tnaSetThisCookie = function (name, days) {
    var d = new Date();
    d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * days);
    document.cookie = name + "=true;path=/;expires=" + d.toGMTString() + ';';
};

// 1.19 checkForThisCookie()
tnaCheckForThisCookie = function (name) {
    if (document.cookie.indexOf(name) === -1) {
        return false;
    } else {
        return true;
    }
};

// Binding to document (event delegation)
$(document).on('click', '#cookieCutter', function (e) {
    e.preventDefault();
    tnaSetThisCookie('dontShowCookieNotice', 365);
    $('.cookieNotice').hide();
});