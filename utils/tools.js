const sequelize = require('@database/mysql/connection');

if (process.env.NODE_ENV !== "development") {
    //sequelize.authentication();
    sequelize
        .sync()
        .then(() => {
            console.log("---------------------");
            console.log('Mysql Connected.');
            console.log("---------------------");
        })
        .catch(err => {
            console.log("---------------------");
            console.error('Unable to connect to the database:', console.log(err));
            console.log("---------------------");
        });
}