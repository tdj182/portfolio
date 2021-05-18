import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles/Contact.css';

function Contact() {
  const [form, setFormData] = useState({username: "", email:"", message: ""});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  //Will Send the email
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occurred:', err))
  }

  //Gathers form data and calls email function
  async function handleSubmit(e, data,) {
    e.preventDefault();
    alert(`Thank you for your message from ${form.email}`)
    const templateId = 'template_q2f0g8w';
    const serviceID = 'my_gmail';
    sendFeedback(serviceID, templateId, { from_name: form.username, message_html: form.message, reply_to: form.email })
  }

  const {username, email, message} = form;

  return (
    <div className="Contact container mt-5 mx-auto">
      <Form className="Contact-form mx-auto" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Name</Label>
          <Input
            name="username"
            id="username"
            type="text"
            onChange={handleChange}
            value={username}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            onChange={handleChange}
            value={email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            name="message"
            id="message"
            type="textarea"
            onChange={handleChange}
            value={message}
            required
          />
        </FormGroup>
        <Button className="Contact-submit mt-2">Send Message</Button>
      </Form>
    </div>
  );
}

export default Contact;
