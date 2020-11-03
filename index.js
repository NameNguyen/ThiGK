const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { tableName, docClient, dynamoDB } = require('./crudaws')
const app = express()
const port = process.env.PORT || 8000
const publicPath = path.join(__dirname, './public')


app.use(express.static(publicPath))
app.use(express.json())


app.get('', function (req, res) {
    res.sendFile(publicPath + '/html/index.html', {})
})

app.post('/sanpham', (req, resp) => {

    const params = {
        TableName: tableName,
        Item: {
            ...req.body
        }
    }
    docClient.put(params, (err, data) => {
        if (err) {
            return resp.status(500).send(JSON.stringify(err, null, 3))
        } else {
            return resp.status(201).send({ ...req.body })
        }
    })
})

app.listen(port, () => {
    console.log(`listen host ${port}`)
})