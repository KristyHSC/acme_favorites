const router = require('express').Router()
const {User, Thing, Favorite} = require('./db')


router.get('/users', (req, res, next) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(next)
})

router.get('/things', (req, res, next) => {
    Thing.findAll()
        .then(things => res.json(things))
        .catch(next)
})

module.exports = router;