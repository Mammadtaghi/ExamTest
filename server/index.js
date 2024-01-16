import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const port = 3000

const { Schema } = mongoose

const proSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
})

const Products = mongoose.model("productlarrrs", proSchema)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/pro', async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send("Error!")
    }
})


app.get('/pro/:id', async (req, res) => {
    try {
        const { id } = req.params
        const products = await Products.findById(id)
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send("Error!")
    }
})


app.delete('/pro/:id', async (req, res) => {
    try {
        const { id } = req.params
        const products = await Products.findByIdAndDelete(id)
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(500).send("Error!")
    }
})


app.post('/pro', async (req, res) => {
    try {
        const { title, price, image } = req.body
        const products = await Products.create({
            title,
            image,
            price,
        })
        res.status(200).send("Created!")
    } catch (error) {
        res.status(500).send("Error!")
    }
})


mongoose.connect("mongodb+srv://albinoni1423:xeshil@cluster0.wsbsjfu.mongodb.net/").catch(err => console.log(err))

app.listen(port, () => {
    console.log("Server online!");
})
