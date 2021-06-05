const { Router } = require('express');

const { getUsers, getUser, newUser, updateUser, deleteUser } = require('../controller/users.controller');
const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', newUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;
