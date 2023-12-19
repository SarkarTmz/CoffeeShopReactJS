import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/Contact.css'

export default function BasicTextFields() {
  return (
    <>
    <div className="form">
      <p>Connecting with our coffee community is a pleasure as rich and warm as your favorite cup of coffee. We welcome you to reach out and engage with us through our contact section designed to make communication as seamless as the aromas that waft through our doors.
      Have a question, suggestion, or just want to share your love for coffee? Our virtual doors are always open. Reach out to us through the provided contact form, and our dedicated team will ensure your queries are met with the same enthusiasm we pour into crafting our beverages.</p><br /><br />
      <form action="">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder='Enter your full name' name="name"/><br />
        <label for="number">Number</label>
        <input type="number" id="number" placeholder='Enter your number' name="number"/><br />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder='Enter your email' name="email"/><br />
        <label for="textarea">Message</label>
        <textarea rows="5" cols="" placeholder='Write your message...'>
        </textarea><br />
        <input type="submit" value="Submit" id='submit' />
        </form><br /><br />
        <h2>Visit Us</h2>
        <p>For those seeking a more sensory experience, we encourage you to visit our physical location. Nestled in the heart of Kathmandu, our coffee haven awaits you. Feel free to drop by, savor a cup of our finest brews, and immerse yourself in the inviting ambiance that defines our space.</p><br /><br />
        <h2>Corporate Inquiries</h2>
        <p>For business collaborations, wholesale inquiries, or any corporate-related matters, our dedicated team is ready to discuss how we can blend our passion for coffee with your business goals. Let's explore the possibilities and create something extraordinary together.</p><br />
        <p>At Mitho Coffee, the conversation extends far beyond the coffee cup. We look forward to hearing from you and continuing to brew connections that go beyond the beans. Cheers to the joy of communication and the shared love for exceptional coffee!</p><br /><br />
        <h2>Stay Connected</h2>
        <p>Coffee brings people together, and so does our online presence. Follow us on social media platforms to stay updated on the latest brews, promotions, and community events. Your virtual coffee break is just a click away.</p>
    </div>
    </>
  );
}