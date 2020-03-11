const Sequelize=require('sequelize');
const db=require('database.js');

const User=db.define(
  'users',
   name: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  { timestamps: false }
);

module.exports= User
