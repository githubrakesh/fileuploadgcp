
const { Storage } = require('@google-cloud/storage');

const projectId = 'project-name';
const keyFile = './key/projkeyfile-d62ec82041ef.json';
const bucketName = 'bucket-upload';

var config = {
    projectId: projectId,
    keyFilename: keyFile
};
const storage = new Storage(config);
const storageSvc = {};

storageSvc.generateV4SignedPolicy = async function (filename) {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(filename);

    const expires = Date.now() + 10 * 60 * 1000; //  10 minutes
    const options = {
        expires,
        fields: { 'success_action_status': '201' }
    };
    // Get a v4 signed policy for uploading file
    return await file.generateSignedPostPolicyV4(options);
};

storageSvc.listBuckets = async function () {
    try {
        return await storage.getBuckets();
    } catch (err) {
        console.error('ERROR:', err);
    }
};
module.exports = storageSvc;