// ==UserScript==
// @name         腾讯QQ链接反屏蔽
// @namespace    https://github.com/bitchAltila/tampermonkey-scripts
// @version      0.1
// @description  当从QQ打开的链接被屏蔽时，自动跳转至原地址
// @author       You
// @match        https://c.pc.qq.com/pc.html*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前页面的URL
    var currentUrl = window.location.href;

    // 使用URLSearchParams来解析URL中的参数
    var urlParams = new URLSearchParams(currentUrl.split('?')[1]);

    // 从参数中提取出编码后的URL
    var encodedUrl = urlParams.get('url');

    // 解码URL
    var decodedUrl = decodeURIComponent(encodedUrl);
    console.log(`encodedUrl: ${encodedUrl};\ndecodedUrl: ${decodedUrl}`);
    // 跳转到原始URL
    window.location.href = decodedUrl;
})();
