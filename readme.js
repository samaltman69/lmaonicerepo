// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-09
// @description  try to take over the world!
// @author       You
// @match        https://xrares.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openuserjs.org
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    console.clear = function() {
        console.log("console.clear() was called but has been overridden.");
    };
    // Function to get the value of the `key` variable from the page's scripts
    function getKeyValue() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const scriptContent = script.innerHTML || script.textContent;
            const keyMatch = scriptContent.match(/var\s+evideo_vkey\s*=\s*["']([^"']+)["']/);
            if (keyMatch && keyMatch[1]) {
                return keyMatch[1];
            }
        }
        return null;
    }

    // Function to perform the redirect
    function redirectToUrl() {
        const key = getKeyValue();
        if (key) {
            const newUrl = `https://www.xrares.com/vsrc/h264/${key}/HD`;
            window.location.href = newUrl;
        } else {
            alert('Key variable not found.');
        }
    }

    // Function to create and add the button to the page
    function addRedirectButton() {
        const button = document.createElement('button');
        button.innerText = 'Redirect to New URL';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.padding = '10px 20px';
        button.style.backgroundColor = '#007bff';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.zIndex = '1000';

        // Add click event to the button
        button.addEventListener('click', redirectToUrl);

        // Append the button to the body
        document.body.appendChild(button);
    }

    // Automatically add the button to the page
    addRedirectButton();

})();
