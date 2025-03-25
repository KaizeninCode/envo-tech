import express from 'express'
import { addMessageToDb } from '../controllers/dbController.js'

const router = express.Router()

router.post('/add-to-db', addMessageToDb)

export default router