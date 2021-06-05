const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
	const { q, hola = 'Hola' } = req.query;

	res.json({
		msg: 'get API - Users Controller',
		q,
		hola,
	});
};

const getUser = (req, res = response) => {
	const { id } = req.params;

	res.json({
		msg: 'post API - Users Controller',
		id,
	});
};

const newUser = (req, res = response) => {
	const { name, age } = req.body;
	res.json({
		msg: 'post API - Users Controller',
		name,
		age,
	});
};

const updateUser = (req, res = response) => {
	res.json({
		msg: 'put API - Users Controller',
	});
};

const deleteUser = (req, res = response) => {
	res.json({
		msg: 'delete API - Users Controller',
	});
};

module.exports = {
	getUsers,
	getUser,
	newUser,
	updateUser,
	deleteUser,
};
