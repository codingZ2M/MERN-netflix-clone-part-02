const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin user',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Rick',
        email: 'rick@mail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Coery',
        email: 'coery@mail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
module.exports =  users;