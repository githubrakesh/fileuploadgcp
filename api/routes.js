const express = require('express');
const storageSvc = require('./storage');
const router = express.Router();


router.get('/api/url/:key', async (req, res, next) => {
    const [resp] = await storageSvc.generateV4SignedPolicy(req.params.key);
    res.send([resp]);
});
router.get('/api/buckets', async (req, res, next) => {
    const resp = await storageSvc.listBuckets();
    res.send(resp);
});

module.exports = router;