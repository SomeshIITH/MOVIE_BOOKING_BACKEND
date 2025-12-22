import express from 'express';
const router = express.Router();

import v1apiRoutes from './v1/index.js'

router.use('/v1',v1apiRoutes);

export default router;