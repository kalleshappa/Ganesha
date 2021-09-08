const exprss = require('express')
const router = exprss.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router