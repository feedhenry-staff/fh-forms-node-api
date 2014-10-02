module.exports = function() {

    'use strict';

    var fh = require('fh-mbaas-api');
    var logger = require('logger')();

    // get all forms
    this.getForms = function(params, cb) {
        logger('info', ':: fh forms API :: getForms endpoint request');

        fh.forms.getForms({}, function(err, data) {
            if (err) {
                logger.error(' :: fh forms API :: getForms endpoint' + JSON.stringify(err, null, 2));
                return cb(err, null);
            } else {
                return cb(null, data);
            }
        });
    };

    // get a form
    this.getForm = function(params, cb) {
        logger('info', ' :: fh forms API :: getForm endpoint request');

        if (params && params.formId) {
            fh.forms.getForm({
                '_id': params.formId
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: getForms endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: getForms endpoint : formId is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    // getTheme for form
    this.getTheme = function(params, cb) {
        logger('info', ' :: fh forms API :: getTheme endpoint request');

        fh.forms.getTheme({}, function(err, data) {
            if (err) {
                logger('error', ' :: fh forms API :: getTheme endpoint' + JSON.stringify(err, null, 2));
                return cb(err, null);
            } else {
                return cb(null, data);
            }
        });
    };

    // get client config
    this.getAppClientConfig = function(params, cb) {
        logger('info', ' :: fh forms API :: getAppClientConfig endpoint request');

        if (params && params.appId) {
            fh.forms.getAppClientConfig({
                '_id': params.appId
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: getAppClientConfig endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: getAppClientConfig endpoint : params.appId is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    // get submit Form Data
    this.submitFormData = function(params, cb) {
        logger('info', ' :: fh forms API :: submitFormData endpoint request');

        if (params && params.submission) {
            fh.forms.submitFormData({
                'submission': params.submission
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: submitFormData endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: submitFormData endpoint : params.submission is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    // get submit Form Data
    this.getSubmissionStatus = function(params, cb) {
        logger('info', ' :: fh forms API :: getSubmissionStatus endpoint request');

        if (params && params.submission) {
            fh.forms.getSubmissionStatus({
                'submission': params.submission
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: getSubmissionStatus endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: getSubmissionStatus endpoint : params.submission is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    // get submit Form Data
    this.submitFormFile = function(params, cb) {
        logger('info', ' :: fh forms API :: submitFormFile endpoint request');

        if (params && params.submission) {
            fh.forms.submitFormFile({
                'submission': params.submission
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: submitFormFile endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: submitFormFile endpoint : params.submission is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    // get submit Form Data
    this.completeSubmission = function(params, cb) {
        logger('info', ' :: fh forms API :: completeSubmission endpoint request');

        if (params && params.submission) {
            fh.forms.completeSubmission({
                'submission': params.submission
            }, function(err, data) {
                if (err) {
                    logger('error', ' :: fh forms API :: completeSubmission endpoint' + JSON.stringify(err, null, 2));
                    return cb(err, null);
                } else {
                    return cb(null, data);
                }
            });
        } else {
            var err = new Error(' :: fh forms API :: completeSubmission endpoint : params.submission is not defined');
            logger('error', err);
            return cb(err, null);
        }
    };

    return this;
};