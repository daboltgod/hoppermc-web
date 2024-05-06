// script.js

// Load Cloudflare Beacon script
const beaconScript = document.createElement('script');
beaconScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
beaconScript.setAttribute('data-cf-beacon', '{"token": "bf83bdc5f0c84733b67e0e96769ea267"}');
beaconScript.type = "text/javascript";
beaconScript.defer = true;
document.head.appendChild(beaconScript);

// Load Cloudflare Rocket Loader script
const rocketLoaderScript = document.createElement('script');
rocketLoaderScript.src = "/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js";
rocketLoaderScript.setAttribute('data-cf-settings', 'bf707f6e3c64659fb248c819-|49');
rocketLoaderScript.defer = true;
document.head.appendChild(rocketLoaderScript);

// Load Google Tag Manager (gtag.js)
const gtagScript = document.createElement('script');
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-77ZE0DPN37";
gtagScript.async = true;
document.head.appendChild(gtagScript);

// Initialize Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-77ZE0DPN37');
