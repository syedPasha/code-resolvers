import React from 'react';

const Contact = () =>{
    return(
        <section id="contact">
            <div class="contact-form bg-primary p-2">
                <h2 class="m-heading">Contact Us</h2>
                   <p>Please use the form below to contact us</p>
                        <form>
                            <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name"/>
                            </div>
                            <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email"/>
                            </div>
                            <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number"/>
                            </div>
                            <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" placeholder="Enter Message"></textarea>
                            </div>
                            <input type="submit" value="Send" class="btn btn-dark"/>
                        </form>
            </div>
            
      </section>

    );
}

export default Contact;