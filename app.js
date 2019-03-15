const router = require('express').Router()
const {User, Thing, Favorite} = require('./db')


router.get('/users', (req, res, next) => {
    User.findAll({
        include: Thing,
        order: [['name', 'ASC']] })
        .then(users => res.json(users))
        .catch(next)
})

router.get('/favorites', (req, res, next) => {
    Favorite.findAll({
        order:[['rank', 'ASC']]
    })
        .then(favorites => res.json(favorites))
        .catch(next)
})

router.get('/things', (req, res, next) => {
    Thing.findAll({
        order: [['name', 'ASC']]
    })
        .then(things => res.json(things))
        .catch(next)
})

module.exports = router;