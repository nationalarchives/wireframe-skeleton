/**
 * Created by gjones on 06/01/2015.
 */

//  The purpose of this script is to override the standard behaviour of
//  user interface elements that are not relevant to the prototype tasks

$('a', '#holds-breadcrumb, #page-header').on('click', function(e) {
    console.log('Click default prevented by prototype-overrides.js');
    e.preventDefault();
})