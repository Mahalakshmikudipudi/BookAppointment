const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('productdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;