import "../styles/contact.css";
export default function Contact(){
  const handleSubmit= (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };
  return(
    
    <div className="contact-page-container">
      <header className="contact-header">
        <h1 className="page-title">Contact Us</h1>
        <p className=" contact-subtitle"> We would love to hear from you!</p>
      </header>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> 123 Sweet Street, Desert City</p>
          <p><strong>Phone:</strong>70 000 111</p>
          <p><strong>Email:</strong>hello@sweetandsip.com</p>
           <p><strong>Hours:</strong>Mon-Sun, 8:00 AM-10:00 PM</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <lable>Name</lable>
            <input type="text" id="name" className="form-input" placeholder="Your Name" required />

          </div>
          <div className="form-group">
              <lable>Email</lable>
            <input type="email" id="email" className="form-input" placeholder="Your Email" required />


          </div>
           <div className="form-group">
              <lable>Message</lable>
            <input type="text" id="message" className="form-input" placeholder="How can we help you?" required />


          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

      </div>
    </div>
   
  );
}