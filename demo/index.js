

const { init, errorCodes } = window.anylinejs;

const viewConfig = {
  // captureResolution: '1080p',
  outerColor: '000000',
  outerAlpha: 0.5,
  cutouts: [
    {
      cutoutConfig: {
        // style: 'rect',
        maxWidthPercent: '80%',
        alignment: 'top_half',
        ratioFromSize: {
          width: 300,
          height: 250,
        },
        width: 720,
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFFFF',
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        style: 'contour_point',
        strokeColor: '0099FF',
        fillColor: '300099FF',
        strokeWidth: 2,
        cornerRadius: 4,
        animationDuration: 150,
        animation: 'NONE',
      },
    },
  ],
};

const root = document.getElementById('root');
let selectedPreset = undefined;

function mountAnylineJS(preset) {
  selectedPreset = preset;
  const Anyline = init({
    config: {},
    preset: preset.value,
    viewConfig,
    license: demoLicense,
    element: root,
    debugAnyline: true,
    //anylinePath: '../../anylinejs'
  });

  let modalOpen = false;

  Anyline.onResult = result => {
    console.log('Result: ', result);
    alert(JSON.stringify(result, null, 2))
    // Anyline.stopScanning();
  };

  Anyline.onReport = msg => {
    console.log('Report: ', msg);
  };

  Anyline.onDebug = msg => {
    alert(JSON.stringify(msg));
  };

  Anyline.onError = ({ code, message }) => {
    if (code === errorCodes.WEBCAM_ERROR) {
      console.error('webcam error: ', message);
    }
  };

  Anyline.onLoad = () => {
    console.log('ANYLINE LOADED on main thread');
  };

  Anyline.startScanning();

  window.Anyline = Anyline;
}

function remountAnylineJS() {
  Anyline.stopScanning();
  Anyline.dispose();
  mountAnylineJS(selectedPreset);
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => { 
        console.log("service worker registered"); 
      })
      .catch(err => console.log("service worker not registered", err))
  })
}
