
const { init, errorCodes } = window.anylinejs;

function getLicense() {
  const deployed = window.location.hostname === 'anyline.github.io';
  return deployed ? LICENSE.github : LICENSE.local;
}


const root = document.getElementById('root');
let selectedPreset = undefined;
let anyline;

function mountAnylineJS(preset) {
  try{

  selectedPreset = preset;

  anyline = window.anylinejs.init({
    config: {},
    preset: preset.value,
    license: getLicense(),
    element: root,
    debugAnyline: true,
    anylinePath: '../anylinejs'
  });

  anyline.onResult = result => {
    console.log('Result: ', result);
    alert(JSON.stringify(result.result, null, 2))
  };

  
  anyline.startScanning().catch(e => alert(e.message))

}catch(e){
  alert(e.message);
  console.error(e)
}
}

function remountAnylineJS() {
  anyline.dispose();
  mountAnylineJS(selectedPreset);
}

function enableFlash() {
  anyline.activateFlash(true);
}

function disableFlash() {
  anyline.activateFlash(false);
}