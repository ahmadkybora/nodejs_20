const express = require('express');
const routes = require('express').Router();
const app = express();
const { _ } = require('lodash');

const filterCol = (data, ...removeCol) => {
    const arr = [];
    arr.push(data);
    
    return arr.map(obj => {
        return _.omit(obj, removeCol);
    });

    // console.log(data);

    // data.map((key) => {
    //     console.log(key[1]);
    // });

    // console.log(data)



    // console.log(newArray);
    // data.forEach(object => {
    //     delete object[removeCol];
    // });


    // for (const obj of data) {
    //     delete obj[removeCol];
    //   }

    // delete data[removeCol];
    // return newArray;



    // const dataKey = Object.keys(data);
    // console.log(dataKey[0]);
    // // console.log(data);
    // // console.log(removeCol[0]);
    // // console.log(Object.keys(data).length);
    // for(let i = 0; i < Object.keys(data).length; i++) {
    //     console.log(dataKey[removeCol[i]]);
    //     // console.log(removeCol[i]);
    //     // if(data[removeCol[i]] === removeCol[i]) {
    //     //     delete data[removeCol]; 
    //     // }
    // }
    // console.log(data);
    // delete data[removeCol];
    // return data;

    // data.map((key) => {
    //     console.log(key[removeCol])
    // })
    // for (const key in data) {
    //     // delete data[key];
    //     console.log(data[key]);
    // }

    // console.log(data);
    // console.log(removeCol);
    // return Object.keys(data).map((key) => {
    //     if(key ===)
    //     console.log(key)
    // });
    // console.log(removeCol[0]);
    // console.log(Object.entries(data));
    // const result = data.toJSON();
    // delete data[removeCol];
    // return data;
    
    // var result = Object.keys(data.toJSON()).map((key) => [key, data[key]]);
    // console.log(result);
    // console.log(Object.keys(data.toJSON()));
    // return Object.keys(data.toJSON());
    // return Object.keys(data.toJSON()).filter(res => res === removeCol);

    // const dataKeys = Object.keys(data.toJSON());
    
    // const i = Object.keys(data.toJSON()).filter(res => res === removeCol);


    // for (let i = 0; i < dataKeys.length; i += 1) {
    //     if(dataKeys[i] === removeCol[i])
    //         console.log(dataKeys);
    // }

    
    // const result1 = JSON.parse(JSON.stringify(data));
    // const result = data.toJSON();

    // console.log(Object.keys(data.toJSON()));

    // const errCount = Object.keys(err.response.data.errors).length;
    // const errValue = Object.values(err.response.data.errors);


        // if(dataKeys === removeCol) dataKeys.remove(dataKeys);
    
    
    //console.log(removeCol);
    // const dataValues = Object.values(data.toJSON());


    //console.log(dataKeys);
    // console.log(dataValues);
    
    // Object.keys(data.toJSON())
    // const r = Object.keys(data.toJSON()).map(function(el) { 
    //     // console.log(el);
    //     // delete el === removeCol;
    //     // console.log(el.Name);
    //     return delete el === removeCol; 
    // });

    // console.log(r);
    // console.log(Object.keys(result));

    // result.map((re) => {
        // console.log(re);
    //})
    // Object.keys(result).remove(function(el) { return el.Name === removeCol; });

    // console.log(typeof result);
    // console.log(result1['fullName']);

    // console.log(data.toJSON());
    // data.toJSON().then((result) => {
    //     console.log(result);
    // });

    // data.toJSON().remove(function(el) { return el.Name === removeCol; });
    // console.log(data1);
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

module.exports = {
    app,
    debugMode,
    express,
    filterCol,
    routes,
    respMsg,
};
