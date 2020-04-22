const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'modi.nitin13@gmail.com',
        Subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name} .Let me know how you get along the app.`
    }).then((result)=>{
        console.log('Done');
    }).catch((error)=>{
        console.log('Error occured',error);
    });
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'modi.nitin13@gmail.com',
        subject:'Goodbye!!',
        text:`Goodbye ${name}!!, Is there any suggestion so that we could have kept you on the board.`
    }).then((result)=>{
        console.log('done');
    }).catch((error)=>{
        console.log('Error');
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}
