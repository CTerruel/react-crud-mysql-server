const express = require('express')
const router = express.Router()
const userService = require('../service/userService')
const errorMessage = 'An error occurred while querying the server!'

const sendError = (res) => {
    res.status(500).send({ error: errorMessage })
}

router.get('/users/:id', async (req, res) => {
    try {
        const user = await userService.select(Number(req.params.id))
        res.json(user)
    } catch (error) {
        sendError(res)
    }
})

router.get('/users', async (req, res) => {
    try {
        const rows = await userService.selectAll()
        console.log(rows)
        res.json(rows)
    } catch (error) {
        sendError(res)
    }
})

router.post('/users', async (req, res) => {
    try {
        const users = await userService.insert(req.body)
        res.json(users)
    } catch (error) {
        sendError(res)
    }
})

router.put('/users', async (req, res) => {
    try {
        const users = await userService.update(req.body)
        res.json(users)
    } catch (error) {
        sendError(res)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const users = await userService.delete(Number(req.params.id))
        res.json(users)
    } catch (error) {
        sendError(res)
    }
})

module.exports = router