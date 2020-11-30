# AnylineJS

Anyline is a mobile OCR SDK, which can be customized to scan all kinds of numbers, characters, text and codes.

AnylineJS is a standalone Anyline version for the browser.

Not included in the bundle are the Example Sheets with testing material. They can be downloaded here: [https://anyline.com/samples](https://anyline.com/samples)

In its inital version the UI is hard wired into the SDK. Using custom user interfaces will be supported in the coming releases. AnylineJS has to be served from a web server that supports HTTPS. (Don't forget to add 'https://' if you are testing AnylineJS).

For full documentation visit: [https://documentation.anyline.com/toc/platforms/javascript/index.html](https://documentation.anyline.com/toc/platforms/javascript/index.html)

**The license included in the AnylineJS Repository only allows AnylineJS to run on 127.0.0.1**

# Install

copy the `anylinejs` into the public folder of your webapp.

import `anyline.js` via the script tag into your html

alternatively you can also copy the content of this folder into `node_modules/anyline-js`
and use `import { init, errorCodes } from 'anyline-js'`;

# Usage

```javascript
const { init, errorCodes } = window.anylinejs;

const viewConfig = {
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

const anylicense =
  'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE4LTEwLTE0IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJjb2duZXguYXBwIl0sImFuZHJvaWRJZGVudGlmaWVyIjpbImNvZ25leC5hcHAiXSwid2luZG93c0lkZW50aWZpZXIiOlsiY29nbmV4LmFwcCJdfQptQVZ5Tm5UbVlJUlVlVUZNamhjbGRCMmc4Q1VON0lnUkVjQmU0OTRlUml5bjdMM2M2WS9HTTE1ak1ZdGJ4dElLUUdLUU9KQ3pGZjZGNm1nMHp2eVJ3ejZOdjhLcjgvcHNTL1c2N3JHbVR0L3hQaE5LL1Z2Z2czSWZvMWNhbXUzWExpWWhJS3NubUcxZzNUUlZ5VURieHBhL2pmZ3NTWHdCMk9IMkJQMzVlVjR6Q0tFbGFabVhwT0tlTjcxRFBNMGZzMVQxQlZ4TEtGWTBjZjhFTTRuTmdyRTZGU1pLVUJKbEN3VjdaVkc4aEtKTGZhbUtDWWNlMGVScC9VUTlGa2tvM2lOUU4rQ25ZenZVemhnUXU4ZXNsV3JadjFkZ2dabXJDUEt4c1pDV015SThLNkwrZmM5N3A1aFdKbCtVOU5MT0lkY1o3WTZ3NmFQZzdPUVNFa0lYYXc9PQ==';

const root = document.getElementById('root');

const Anyline = init({
  preset: 'meter', // or id, ocr, eCard
  viewConfig,
  license: anylicense,
  element: root,
  anylinePath: 'anylinejs',
});

Anyline.onResult = result => {
  console.log('Result: ', result);
  let msg = JSON.stringify(result.result);
  alert(msg);
};

Anyline.onReport = msg => {
  console.log('Report: ', msg);
};

Anyline.onError = ({ code, message }) => {
  if (code === errorCodes.WEBCAM_ERROR) {
    console.error('webcam error: ', message);
  }
  //....
};

Anyline.onLoad = () => {
  console.log('ANYLINE LOADED on main thread');
};

Anyline.startScanning();
```

## Demo

`npm start demo`

open https://127.0.0.1:8000/demo/integrated/

or https://127.0.0.1:8000/demo/fullscreen/
