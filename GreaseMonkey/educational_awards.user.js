// ==UserScript==
// @name Toastmasters Educational Awards
// @description Add links to e.g. http://reports.toastmasters.org/reports/dprReports.cfm?r=18&d=96&s=Name&sortOrder=0&curProgYear=2014%20-%202015
// @include http://reports.toastmasters.org/reports/dprReports.cfm?r=18&*
// @grant none
// ==/UserScript== 

"use strict";
//var strongs= document.getElementsByTagName('strong');
// for( var i=0; i<strongs.length; i++ ) { }

// Do not use XPathResult.UNORDERED_NODE_ITERATOR_TYPE, because after you modify one element, the rest of iterations fail - the iterator will be out of date. See https://developer.mozilla.org/en-US/docs/Introduction_to_using_XPath_in_JavaScript#Iterators
// TODO Docs - ThirdPartyAddOns: FirePath (for FireBug) allows logical operator 'OR', but document.evaluate() requires it to be in lowercase as 'or'
var elementSnapshots= document.evaluate(
    ".//tr[ @bgcolor='ffffff' or @bgcolor='eeeeee' ]/./td[ @class='content' and position()=1 ]",
    //"//strong",
    document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
for ( var i=0 ; i < elementSnapshots.snapshotLength; i++ ) {
    var element= elementSnapshots.snapshotItem(i);
    var clubNumber= element.innerHTML.trim();
    while( clubNumber.length<8 ) {
        clubNumber= '0' +clubNumber;
    }
    element.innerHTML= '<a href="https://www.toastmasters.org/Find-a-Club/' +clubNumber+ '-' +clubNumber+ '">'+ clubNumber+ '</a>';
}