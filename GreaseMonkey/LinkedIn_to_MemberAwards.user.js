// ==UserScript==
// @name LinkedIn Connections to Toastmasters Member Awards
// @description Add links to e.g. https://www.linkedin.com/connected/
// @include https://www.linkedin.com/connected/*
// @grant none
// ==/UserScript== 

"use strict";

// See comments in educational_awards.user.js
//@TODO make this run & re-run everytime there are new elements (AJAX-added); but when re-running, don't re-inject
// to elements where we added already.
var elementSnapshots= document.evaluate(
    "/html/body//ul[@class='items contacts-list-view']/li/div/h3/a",
    document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
/*if( elementSnapshots.snapshotLength>0 ) {
    console.log( 'TM Monkey: ' +elementSnapshots.snapshotItem(0).innerText );
    alert( elementSnapshots.snapshotItem(i).innerText );
}*/
for ( var i=0 ; i < elementSnapshots.snapshotLength; i++ ) {
    var element= elementSnapshots.snapshotItem(i);
    var personName= element.innerText.trim();
    element.innerHTML+= ' - <a href="http://www.marshalls.org/tmtools/Club_Ed.cgi?y=&d=&Go2=Member+Awards&m=' +escape(personName)+ '">TM Awards</a>';
}