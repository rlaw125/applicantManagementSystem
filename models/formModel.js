const Sequelize=require('sequelize');
const db=require('./database.js');

const Form = db.define(
  'forms',
  name: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  { timestamps: false }
);

module.exports = Form
