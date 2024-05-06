// script.js
// made by itzxyloyt

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

// Load Google AdSense script
const adsenseScript = document.createElement('script');
adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9451736546409463";
adsenseScript.crossorigin = "anonymous";
adsenseScript.async = true;
document.head.appendChild(adsenseScript);

// Initialize Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-77ZE0DPN37');

// AdBlocker warnings
const fundingChoicesScript = document.createElement('script');
fundingChoicesScript.async = true;
fundingChoicesScript.src = "https://fundingchoicesmessages.google.com/i/pub-9451736546409463?ers=1";
fundingChoicesScript.nonce = "kxAH6LY9FSGC95FCmed1LA";
document.head.appendChild(fundingChoicesScript);

const googlefcPresentScript = document.createElement('script');
googlefcPresentScript.nonce = "kxAH6LY9FSGC95FCmed1LA";
googlefcPresentScript.innerHTML = `
(function() {
  function signalGooglefcPresent() {
    if (!window.frames['googlefcPresent']) {
      if (document.body) {
        const iframe = document.createElement('iframe');
        iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
        iframe.style.display = 'none';
        iframe.name = 'googlefcPresent';
        document.body.appendChild(iframe);
      } else {
        setTimeout(signalGooglefcPresent, 0);
      }
    }
  }
  signalGooglefcPresent();
})();
`;
document.head.appendChild(googlefcPresentScript);
