import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/Contact.css'

export default function BasicTextFields() {
  return (
    <>
    <div className="form">
      <form action="">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder='Enter your full name' name="name"/><br />
        <label for="number">Number</label>
        <input type="number" id="number" placeholder='Enter your number' name="number"/><br />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder='Enter your email' name="email"/><br />
        <label for="textarea">Message</label>
        <textarea rows="4" cols="" placeholder='Write your message...'>
        </textarea><br />
        <input type="submit" value="Submit" />
        </form>
    </div>
    </>
  );
}