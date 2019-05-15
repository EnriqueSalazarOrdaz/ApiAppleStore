const express = require('express');
const bodyParser= require('body-parser');
const exphbs=require('express-handlebars');

const path=require('path');

const nodemailer=require('nodemailer');

const app=express();

//view engine
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

//static folder
app.use('/public',express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req, res) =>{
res.render('contact');
});


app.post('/send',(req,res)=>{
    const output=`
    <p> you have a new support ticket</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>E-mail: ${req.body.email}</li>
    <li>Company: ${req.body.company}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

      // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sergiosao5@hotmail.com', 
      pass: 'arik1340' 
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Applestore user 👻" <sergiosao5@hotmail.com', // sender address
    to: "sergiosalazarordaz@gmail.com", // list of receivers
    subject: "Applestore Support Ticket", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent'});
});


    
    });

app.listen(3001,()=>console.log('server started...'));