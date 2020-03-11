const User=require('./userModel.js');
const Form=require('./formModel.js');
const Question=require('./questionModel.js');
const Response=require('./responseModel.js');

Response.belongsTo(Question);
Question.hasOne(Response);

Question.belongsTo(Form);
Form.hasMany(Question);

Form.belongsTo(User);
User.hasMany(Form);
