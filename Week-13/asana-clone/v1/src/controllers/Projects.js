const { insert } = require('../services/Projects');
const httpStatus = require('http-status');

const create = (req, res) => {
    insert({ name: "Test Project" }).then(response => {
        res.status(httpStatus.CREATED).send(response);
    }).catch(error => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    })
    res.status(200).send("Project Create");
};

const index = (req, res) => {
    res.status(200).send("Project Index");
};

module.exports = { 
    create,
    index
 };