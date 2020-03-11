const Sequelize=require('sequelize');
const db=require('./database.js');

const Question=db.define(
  'questions',
  formID: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  question:{
    type:Sequelize.STRING,
    allowNull:false
  },
  { timestamps:false }
);

module.exports = Question
