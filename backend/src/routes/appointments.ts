import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const router = Router();
const prisma = new PrismaClient();

// Initialize Twilio client
const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Create a nodemailer transporter (Using Ethereal for testing or a placeholder for real SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER || 'test@ethereal.email', // Replace with real credentials
    pass: process.env.SMTP_PASS || 'password',
  },
});

router.post('/', async (req: Request, res: Response) => {
  const { patientName, patientEmail, patientPhone, date, time, symptoms, doctorName, speciality } = req.body;

  if (!patientName || !patientEmail || !patientPhone || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const appointment = await prisma.appointment.create({
      data: {
        patientName,
        patientEmail,
        patientPhone,
        date,
        time,
        symptoms,
        doctorName,
        speciality,
      },
    });

    // Send Email to Doctor
    const mailOptions = {
      from: '"Sylve Health App" <noreply@sylvehealth.com>',
      to: 'Gauri8476949130@gmail.com',
      subject: `New Appointment Booking - ${patientName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient:</strong> ${patientName} (${patientEmail})</p>
        <p><strong>Phone:</strong> ${patientPhone}</p>
        <p><strong>Doctor:</strong> ${doctorName || 'Not specified'}</p>
        <p><strong>Speciality:</strong> ${speciality || 'Not specified'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Symptoms/Notes:</strong> ${symptoms || 'None provided'}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent to doctor:', info.messageId);
      }
    });

    // Send WhatsApp Notification to Doctor
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      const whatsappMessage = `*New Appointment Request 🩺*
*Patient*: ${patientName} (${patientEmail})
*Phone*: ${patientPhone}
*Doctor*: ${doctorName || 'Not specified'}
*Speciality*: ${speciality || 'Not specified'}
*Date*: ${date}
*Time*: ${time}
*Symptoms/Notes*: ${symptoms || 'None provided'}`;

      try {
        // Ensure the phone number has a country code (default to +91 if missing)
        let formattedPhone = patientPhone.replace(/\D/g, ''); // Remove non-numeric characters
        if (formattedPhone.length === 10) {
          formattedPhone = '91' + formattedPhone;
        }
        
        await twilioClient.messages.create({
          body: whatsappMessage,
          from: 'whatsapp:+14155238886', // Hardcoded to guarantee correct Sandbox number
          to: `whatsapp:+${formattedPhone}` // Patient's WhatsApp number
        });
        console.log('WhatsApp notification sent successfully to patient.');
      } catch (waError) {
        console.error('Error sending WhatsApp notification:', waError);
      }
    } else {
      console.log('[WhatsApp API Mock] Missing Twilio credentials. Skipping WhatsApp notification.');
    }

    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    console.error('Create appointment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Mock route for getting available slots
router.get('/available-slots', (req: Request, res: Response) => {
  // Simple mock implementation
  res.json({ slots: ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"] });
});

export default router;
