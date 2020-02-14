

module.exports = {
    test: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory().then((products) => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    post: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, price, img } = req.body
        dbInstance.create_product(name, price, img).then(res.sendStatus(200))

    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { deleteId } = req.params
        dbInstance.delete(deleteId).then(res.sendStatus(200)).catch(err => console.log(err))
    }
}