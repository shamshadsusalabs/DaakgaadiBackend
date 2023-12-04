

const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  service: 'gmail',
 // Use TLS

  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});



const transporter1 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

const transporter2 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

const transporter2a = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});


const transporter2b = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});


const transporter2c = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

const transporter2d = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});
const transporter2e = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});
const transporter2f = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});
const transporter3 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});


const transporter4 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

const transporter5 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

const transporter6 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});


const transporter7 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});
const transporter8 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    
    user: "daakgaadi@gmail.com",
    pass: 'ovxn iiqy ffda sxbn'
    
  }
});

router.post('/sendmail/first', async (req, res) => {


  
  let { email, subject, message, number, selectedproduct,length,width,height,actualWeight,rate,totalRate,totalActualWeight,numBoxes,volumetricWeight} = req.body;


  const mailConfigurations = {
    from: 'daakgaadi@gmail.com',
    to: email, // Set the recipient's email address
    cc: 'daakgaadi@gmail.com', // Add the admin's email as a cc recipient
    subject: subject,
    text: message,
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Product:</strong> ${selectedproduct}</p>
    <p><strong>Length:</strong> ${length}</p>
    <p><strong>Width:</strong> ${width}</p>
    <p><strong>Height:</strong> ${height}</p>
    <p><strong>Actual Weight:</strong> ${actualWeight}</p>
    <p><strong>Volumetric Weight:</strong> ${volumetricWeight}</p>
    <p><strong>Rate:</strong> ${rate}</p>
    <p><strong>Total Actual Weight:</strong> ${totalActualWeight}</p>
    <p><strong>Total Rate:</strong> ${totalRate}</p>
    <p><strong>Number of Boxes:</strong> ${numBoxes}</p>
  `
  };


  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' }); // Handle the error and send an error response
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });

 });



 router.post('/sendmail/second/booking', async (req, res) => {
  let {name,
    email,
    paddress,
    daddress,
    date,
    anumber,
    md,
    gv, } = req.body;


  const mailConfigurations1 = {
    from: 'daakgaadi@gmail.com',
    to: email, // Set the recipient's email address
    cc: 'daakgaadi@gmail.com', // Add the admin's email as a cc recipient
    subject: 'confirm booked',
    text: 'thank you for booking',
  
    html: `
    <h1>Confired Booked</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Pickup Address:</strong> ${paddress}</p>
    <p><strong>Delivery Address:</strong> ${daddress}</p>
    <p><strong>Pickup Date:</strong> ${date}</p>
    <p><strong>Alternate Number:</strong> ${anumber}</p>
    <p><strong>Material Description:</strong> ${md}</p>
    <p><strong>Good Value:</strong> ${gv}</p>
  `,

  };


  transporter1.sendMail(mailConfigurations1, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' }); // Handle the error and send an error response
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });

 });


 
 






router.post('/sendmail/third/fulltruck1', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Tata Ace 7 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2.sendMail(mailConfigurations3, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})




router.post('/sendmail/third/fulltruck2', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3a = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Boloro 7 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2a.sendMail(mailConfigurations3a, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})

router.post('/sendmail/third/fulltruck3', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3b = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Canter 14 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2b.sendMail(mailConfigurations3b, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})


router.post('/sendmail/third/fulltruck4', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3c = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Canter 17 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2c.sendMail(mailConfigurations3c, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})


router.post('/sendmail/third/fulltruck5', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3d = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (20 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2d.sendMail(mailConfigurations3d, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})


router.post('/sendmail/third/fulltruck6', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3e = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Single Xl 32 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2e.sendMail(mailConfigurations3e, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})


router.post('/sendmail/third/fulltruck7', async (req, res) => {
  let {
    email,
    number,
    name,
    distance,
    from,
    to,
    rate,
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations3f = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your calculation Details (Multiple Xl 32 ft)',
    text: 'Order details are attached below.',
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Distance:</strong> ${distance} km</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Rate:</strong> ${rate} rupees</p>
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter2f.sendMail(mailConfigurations3f, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})





router.post('/sendmail/third/fulltruck/confirm', async (req, res) => {
  let {
    email,
    number,
    name,
    
  
    // Include other necessary data here
  } = req.body;

  const mailConfigurations4 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Your order is successfull',
    text: 'Order details are attached below.',
    html: `
    <h1>your order is confirmed</h1>
    <p><strong>Your Name</strong> ${name}</p>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    
    
    <!-- Include other necessary data here -->
  `
  };

  // Use transporter1 to send the email
  transporter3.sendMail(mailConfigurations4, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})



router.post('/sendmail/warehouseStorage', async (req, res) => {
  const { name, email,subject,message, contact, area, location } = req.body;

  const mailConfigurations5 = {
    from: 'daakgaadi@gmail.com',
    to: email, 
    cc: 'daakgaadi@gmail.com',// Set the recipient's email address
    subject: subject,
    text: message,
    html: `
      <h1>WareHouse details</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Area (Sq ft):</strong> ${area}</p>
      <p><strong>Location:</strong> ${location}</p>
    `,
  };

  transporter4.sendMail(mailConfigurations5, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });
})



router.post('/sendmail/packersandmover', async (req, res) => {
  const { name, email, number,from, to, selectedBHK, rate } = req.body;

  const mailConfigurations6 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'Packer Booking Details',
    text: 'My team contact you soon',
    html: `
      <h1>Packers and mover</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email</strong> ${email}</p>
      <p><strong>Number:</strong> ${number}</p>
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>Selected BHK:</strong> ${selectedBHK}</p>
      <p><strong>Rate:</strong> Rs ${rate}</p>
    `,
  };


  transporter5.sendMail(mailConfigurations6, (error, info) => {
    if (error) {
      console.error('Error sending booking email', error);
      res.status(500).send('Error sending booking email');
    } else {
      console.log('email sent successfully', info.response);
      res.status(200).send('Booking email sent successfully');
    }
  });
});
 




router.post('/sendmail/cardetails', async (req, res) => {
  const { name, email, number,from, to, date, cardetails} = req.body;

  const mailConfigurations7 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'car details',
    text: 'My team contact you soon',
    html: `
      <h1>cardetails</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email</strong> ${email}</p>
      <p><strong>Number:</strong> ${number}</p>
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>date:</strong> ${date}</p>
      <p><strong>Rate:</strong> Rs ${cardetails}</p>
    `,
  };


  transporter6.sendMail(mailConfigurations7, (error, info) => {
    if (error) {
      console.error('Error sending booking email', error);
      res.status(500).send('Error sending booking email');
    } else {
      console.log('email sent successfully', info.response);
      res.status(200).send('Booking email sent successfully');
    }
  });
});
 


router.post('/sendmail/officefactory', async (req, res) => {
  const { name, email, number,pickupDate, pickupCity, deliveryCity, comments} = req.body;

  const mailConfigurations8 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'office factory',
    text: 'My team contact you soon',
    html: `
      <h1>office factory</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Name:</strong> ${number}</p>
      <p><strong>Email</strong> ${email}</p>
      <p><strong>Number:</strong> ${pickupDate}</p>
      <p><strong>From:</strong> ${pickupCity}</p>
      <p><strong>To:</strong> ${deliveryCity}</p>
      <p><strong>date:</strong> ${comments}</p>
    
    `,
  };


  transporter7.sendMail(mailConfigurations8, (error, info) => {
    if (error) {
      console.error('Error sending booking email', error);
      res.status(500).send('Error sending booking email');
    } else {
      console.log('email sent successfully', info.response);
      res.status(200).send('Booking email sent successfully');
    }
  });
});




router.post('/sendmail/internatinalmover', async (req, res) => {
  const { name, email, number,pickupDate, pickupCountry, deliveryCountry, comments} = req.body;

  const mailConfigurations9 = {
    from: 'daakgaadi@gmail.com',
    to: email,
    cc: 'daakgaadi@gmail.com',
    subject: 'International Movers',
    text: 'My team contact you soon',
    html: `
      <h1>office factory</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Name:</strong> ${number}</p>
      <p><strong>Email</strong> ${email}</p>
      <p><strong>Number:</strong> ${pickupDate}</p>
      <p><strong>Pickup-Country:</strong> ${pickupCountry}</p>
      <p><strong>Delivery-Country:</strong> ${deliveryCountry}</p>
      <p><strong>date:</strong> ${comments}</p>
    
    `,
  };


  transporter8.sendMail(mailConfigurations9, (error, info) => {
    if (error) {
      console.error('Error sending booking email', error);
      res.status(500).send('Error sending booking email');
    } else {
      console.log('email sent successfully', info.response);
      res.status(200).send('Booking email sent successfully');
    }
  });
});
 

module.exports = router;






