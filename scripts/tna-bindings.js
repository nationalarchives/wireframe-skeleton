// All event bindings should be placed within this file. Place within a document.ready() block only where strictly necessary.

$.bindToggle({ toggler : '#mega-menu-pull-down button', target: '.mega-menu', type : 'slide' });
$.bindToggle({ toggler : '#search-expander', target : '#mobile-search-outer-wrapper'});
$.bindToggle({ toggler : '#show-more-options', target : '#more-options' });
$.bindToggle({ toggler : '#options-button', target : '#search-options-outer-wrapper' });
$.bindToggle({ toggler : '#signInLink', target : '#signedFormWrapper' });
$.bindToggle({ toggler : '#miniBasketLink', target : '#miniBasketWrapper' });
$.bindToggle({ toggler: '#expandOrderOptionSupplementals', target: '#orderOptionSupplementals', hideToggleeOnLoad: 'false' });

// Custom event bindings for Global Search
$.customEventer({ elementIdOrClass : '#tnaSearch', eventToWatch : 'focus', customEventToTrigger : 'toggleSearchOptionsOnce'});
$.customEventer({ elementIdOrClass : '#scope-selector', eventToWatch : 'click', customEventToTrigger : 'toggleSearchOptions'});
$.customEventer({ elementIdOrClass: '.formDestinationChanger', eventToWatch: 'click', customEventToTrigger: 'changeFormDestination' });

// Binding to document (event delegation)
$(document).on('click', '#cookieCutter', function(e){
    e.preventDefault();
    tnaSetThisCookie('dontShowCookieNotice', 365); 
    $('.cookieNotice').hide();
});

$(document).on('click', '.mega-menu h3', function(e){
    if($(window).width() < 480) {
        $(this).parents('nav').find('ul').slideToggle();  
        $(this).toggleClass('expanded');  
        e.preventDefault();     
    } else {
        return;
    }
});

if ($('#search-options-inner-wrapper').length) {
    // Binding to display expander
    $(document).on('click', '#search-options-inner-wrapper h4', function () {
        $(this).toggleClass('expanded').next().slideToggle();
    });
    // Testing to see if there's a validation error. If so, show the search options
    if ($('#search-options-inner-wrapper .field-validation-error').length) {
        $('#options-button').trigger('click');
    }
}

// Bindings to window
$(window).on({
    resize: function() {
        if($(window).width() > 480){
            $('.mega-menu ul').show();
        }
    }
});

// Global search - larger screens
$(document).one('toggleSearchOptionsOnce', function () {
    $.toggleDisplayOfElement({ toggler: '#scope-selector', togglee: '#search-options' });
});

$(document).on('toggleSearchOptions', function () {
    $.toggleDisplayOfElement({ toggler : '#scope-selector', togglee : '#search-options'});
    $(document).off('toggleSearchOptionsOnce');
});

$('.formDestinationChanger').on('click', function() {
    var placeholder = $(this).attr('data-placeholder'),
        target = $(this).attr('data-target'),
        fieldName = $(this).attr('data-fieldName');

    $.toggleDisplayOfElement({ toggler: '#scope-selector', togglee: '#search-options' });

    $('#tnaSearch').attr({'placeholder' : placeholder, 'name' : fieldName});
    $('#globalSearch').attr('action', target);
});

// Global search - smaller screens
$(document).on('change', '.mobileSearchDestinationOption', function(){ 
    var target = $(this).attr('data-target'),
        placeholder = $(this).attr('data-placeholder'),
        fieldName = $(this).attr('data-fieldName');
    $('#mobile-search-field').attr({'placeholder' : placeholder, 'name' : fieldName}).focus();
    $('#mobile-global-search').attr('action', target);
});

$(document).on('change', '#sortDrop', function () {
    $(this).closest('form').submit();
});

// Radio relationships for home page
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

