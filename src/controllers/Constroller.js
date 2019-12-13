const Model = require('../models/Models')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const Model = mongoose.model('Model')
module.exports = {
    // o método index lista os posts
    async index(req, res) {
        const posts = await Model.find().sort('-createdAt')
        return res.json(posts)
    },
    // o método store cria os posts
    async store(req, res) {
        const { campos } = req.body;
        const { filename: image } = req.file;

        const [name, ext] = image.split('.')
        const fileName = `${name}.jpg`

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resizes', image)
            )

        fs.unlinkSync(req.file.path)
       
        const post = await Model.create({
            author, 
            place,
            description,
            hashtags,
            image: fileName
        })
        return res.json(model)
    },
    async update(req, res){
        const model = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(model)
    },
    async delete(req, res){
        await Model.findByIdAndRemove(req.params.id)
    }    
}




  