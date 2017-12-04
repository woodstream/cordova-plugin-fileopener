var exec = require('cordova/exec');

exports.canOpenFile = function (fileURL, fileName, success, error) {
    exec(success, error, "FileOpener", "canOpenFile", [fileURL, fileName]);
};

exports.openFile = function (fileURL, fileName, success, error) {
    exec(success, error, "FileOpener", "openFile", [fileURL, fileName]);
};

