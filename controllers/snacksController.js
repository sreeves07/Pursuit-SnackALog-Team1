//DEPENDENCIES
const express = require('express')
const snacks = express.Router()
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks')

//INDEX
snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks()
    if (allSnacks[0]) {
        res.status(200).json(allSnacks)
    } else {
        res.status(500).json({ error: "server error"})
    }
})

//SHOW
snacks.get('/:id', async (req, res) => {
    const { id } = req.params
    const snack = await getSnack(id)
    if (!snack.message) {
        res.status(200).json(snack)
    } else {
        res.status(500).json({ error: 'Snack not found'})
    }
})

//CREATE
snacks.post('/', async (req, res) => {
    try {
        const snack = await createSnack(req.body)
        res.status(200).json(snack)
    } catch (error) {
        res.status(500).json({ error: 'Snack was not created'})
    }
})

//DELETE
snacks.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedSnack = await updateSnack(id)
        res.status(200).json(deletedSnack)
    } catch (error) {
        res.status(500).json({ error: 'ID not found'})
    }
})

//UPDATE
snacks.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedSnack = await updateSnack(id, req.body)
        res.status(200).json(updatedSnack)
    } catch (error) {
        res.status(500).json({ error: 'Failed to update snack'})
    }
})

//EXPORT
module.exports = snacks