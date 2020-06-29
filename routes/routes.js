module.exports=function(app, db, form, question, response, user){

  app.get('/', (req,res)=>{
    console.log(req.sessionID);
    res.send("You're logged in");
  });

  app.get('/admin', (req,res)=>{
    // after admin gets logged in and there is a dashboard
    // create middleware that ensures user is properly authenticated because navigating to this page.
    res.send('Here are your users.')
  });

  app.get('/forms', (req,res)=>{
    // admin can see the forms created and available. Pull form data created from models.
    res.send('You are at the form route');
  });

  app.get('/applicants', (req, res)=>{
    // where you get to see the list of applicants and status
    // pull list of applicants after you are logged in.
    res.send('You are at the applicant route');
  });

  app.get('/logout', (req, res)=>{
    // stop session and remove cookie?
    res.send('You are logged out!');
  });

  app.post('/forms', (req, res)=>{
    // save a new filled out form
    res.send('You saved a form!');
  });

  app.post('/admin', (res, req)=>{
    // create a new form
    res.send('You created a new form');
  });
}
