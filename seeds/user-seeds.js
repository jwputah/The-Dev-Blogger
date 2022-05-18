const sequelize = require('../config/connection');
const { User, } = require('../models');

const userData = [{
    username: 'josh',
    password: 'password123'

},
{
    username: 'ben',
    password: 'password123'
},
{
    username: 'jill',
    password: 'password123'
}
];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;