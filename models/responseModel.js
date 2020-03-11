const Sequelize=require('sequelize');
const db=require('./database.js');

const Response=db.define('responses',
{
  questionID:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  email:{
    type: Sequelize.STRING,
    allowNull:false
  },
  text:{
    type:Sequelize.TEXT,
    allowNull:false
  }
},
  { timestamps: false }
);

module.exports = Response
