import React,{useState} from 'react';
import swal from 'sweetalert';
import Axios from 'axios';

const Contact = () =>{
const [name, setName] = useState();
const [email, setEmail] = useState();
const [phone, setPhone] = useState();
const [message, setMessage] = useState();

const clearState = () =>{
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
}

const handleSubmit =(event) =>{
    event.preventDefault();
    clearState();
    swal("Thank You!", "We have recieved your message!", "success");
    const details ={
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
    }
    
}
    return(
        <section id="contact">
            <div class="contact-form bg-primary p-2">
                <h2 class="m-heading">Contact Us</h2>
                   <p>Please use the form below to contact us</p>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required/>
                            </div>
                            <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email"
                             value={email}
                             onChange={e => setEmail(e.target.value)}
                             required/>
                            </div>
                            <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number"
                             value={phone}
                             onChange={e => setPhone(e.target.value)}
                             required/>
                            </div>
                            <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" placeholder="Enter Message"
                             value={message}
                             onChange={e => setMessage(e.target.value)}
                             required></textarea>
                            </div>
                            <input type="submit" value="Send" class="btn btn-dark"/>
                        </form>
            </div>
            
      </section>

    );
}

export default Contact;