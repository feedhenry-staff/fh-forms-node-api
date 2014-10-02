fh-forms-node-api
====

Module contains functons wrapping all $fh.forms node api's for ease of use in future projects.

####How to install

```shell
npm install git+https://github.com/feedhenry-staff/fh-forms-node-api.git --save
```

####How to use?

Each function takes 2 parameters, fiirst param is an object of properties for given API and second param is a callback function
to handle responce from request. For more information on $fh.forms API visit the Docs section.

```javascript
// require module
var forms = require('fh-forms-node-api');

// expose the functions as endpoints
// to call using $fh.act or $fh.cloud
exports.getForm = forms.getForm;
exports.getForms = forms.getForms;
exports.getTheme = forms.getTheme;
exports.getAppClientConfig = forms.getAppClientConfig;
exports.submitFormData = forms.submitFormData;
exports.getSubmissionStatus = forms.getSubmissionStatus;
exports.submitFormFile = forms.submitFormFile;
exports.completeSubmission = forms.completeSubmission;
```

