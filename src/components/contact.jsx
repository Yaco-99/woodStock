import React from 'react';

const Contact = () =>{
    return <div className="contact">
        <div className="contact_content">
          <h2>CONTACT US</h2>
        <form action="#" method="POST">
            <div className="row">
                <input type="text" name="firstName" placeholder="FIRST NAME"/>
                <input type="text" name="lastName" placeholder="LAST NAME"/>
            </div>
            <input className="email" type="email" name="email" placeholder="MAIL ADDRESS"/>
            <textarea rows="10" name="message" placeholder="MESSAGE">
            </textarea>
        </form>  
        </div>
        
    </div>;
}

export default Contact;