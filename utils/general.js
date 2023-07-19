const express = require('express');
const routes = require('express').Router();
const app = express();
const { _ } = require('lodash');
const path = require('path');

const filterCol = (data, ...removeCol) => {
    if(Array.isArray(data))
        return data.map(obj => {
            return _.omit(obj, removeCol);
        });
    const arr = [];
    arr.push(data);

    return arr.map(obj => {
        return _.omit(obj, removeCol);
    });
}

const debugMode = (...val) => {
    if (process.env.APP_ENV !== "production") { return console.log(...val); }
    return false;
};

const respMsg = (res, status, errMsg, data=null, state=null) => {
    res.status(status).json({
        state,
        errMsg,
        data,
    });
}

const renderMsg = (res, {...otherInfo}) => {
    const { page, pageTitle, path, errors, data } = otherInfo;
    res.render(page, {
        pageTitle,
        path,
        errors,
        data,
    });
}

module.exports = {
    app,
    debugMode,
    express,
    filterCol,
    path,
    routes,
    respMsg,
    renderMsg
};
