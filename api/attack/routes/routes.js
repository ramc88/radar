import * as express from '@awaitjs/express';
import { getObjetive } from '../controller/controller.js';

const router = express.Router();

router.postAsync('/', getObjetive);

export default router;