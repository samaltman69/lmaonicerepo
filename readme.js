// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-09
// @description  try to take over the world!
// @author       You
// @match        https://www.xrares.com/video/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

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

    function redirectToUrl1() {
        const key = getKeyValue();
        if (key) {
            const newUrl = `https://www.xrares.com/vsrc/h264/${key}/720p`;
            window.location.href = newUrl;
        } else {
            alert('Key variable not found.');
        }
    }

    function redirectToUrl2() {
        const key = getKeyValue();
        if (key) {
            const newUrl = `https://www.xrares.com/vsrc/iphone/${key}`;
            window.location.href = newUrl;
        } else {
            alert('Key variable not found.');
        }
    }

    // Function to create and add the button to the page
    function addRedirectButton() {

        const key = getKeyValue();
        const button = document.createElement('a');
        button.href = `https://www.xrares.com/vsrc/h264/${key}/HD`;
        button.innerText = 'HD';
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

        const button1 = document.createElement('a');
        button1.href = `https://www.xrares.com/vsrc/h264/${key}/720p`;
        button1.innerText = 'New';
        button1.style.position = 'fixed';
        button1.style.bottom = '80px';
        button1.style.right = '20px';
        button1.style.padding = '10px 20px';
        button1.style.backgroundColor = '#007bff';
        button1.style.color = '#fff';
        button1.style.border = 'none';
        button1.style.borderRadius = '5px';
        button1.style.cursor = 'pointer';
        button1.style.zIndex = '1000';

        const button2 = document.createElement('a');
        button2.href = `https://www.xrares.com/vsrc/iphone/${key}`;
        button2.innerText = 'Iphone';
        button2.style.position = 'fixed';
        button2.style.bottom = '150px';
        button2.style.right = '20px';
        button2.style.padding = '10px 20px';
        button2.style.backgroundColor = '#007bff';
        button2.style.color = '#fff';
        button2.style.border = 'none';
        button2.style.borderRadius = '5px';
        button2.style.cursor = 'pointer';
        button2.style.zIndex = '1000';
        // Add click event to the button

        //button.addEventListener('click', redirectToUrl);
        //button1.addEventListener('click', redirectToUrl1);
        //button2.addEventListener('click', redirectToUrl2);
        // Append the button to the body
        document.body.appendChild(button);
        document.body.appendChild(button1);
        document.body.appendChild(button2);
    }

    // Automatically add the button to the page
    addRedirectButton();
})();
