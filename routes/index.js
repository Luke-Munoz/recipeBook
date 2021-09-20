const router = require('express').Router();

const apiRoutes = require('/api', apiRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('You have an error');
});

module.exports = router;