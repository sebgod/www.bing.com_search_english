// ==UserScript==
// @name        www.bing.com search english
// @namespace   Bing global
// @description Switches search result to English
// @include     http://www.bing.com/*
// @include     https://www.bing.com/*
// @include     http://cn.bing.com/*
// @include     https://cn.bing.com/*
// @include     http://www.bing.com/search*
// @include     https://www.bing.com/search*
// @version     1
// @grant       none
// ==/UserScript==

if (window.location.host != "global.bing.com") {
  console.log("host: " + window.location.host);
  var cnBingTextBox = document.getElementById("mkt_swc_v2");
  if (cnBingTextBox && cnBingTextBox.innerHTML != "中文必应") {
    var href = cnBingTextBox.href;
    console.log("href: " + href);
    console.log("window.location.href: " + window.location.href);
    if (href != window.location.href) {
      window.location.href = href;
    }
  } else {
    var cnBingLink = document.getElementById("sw_mktsw");
    if (cnBingLink) {
      window.location.href = "https://global.bing.com/?FORM=HPCNEN&setmkt=en-us&setlang=en-us";
    }
  }
}