import React from "react";
import "../components/styles/Contact.scss";
// import { Container, Row, Col } from "react-bootstrap";
import NavT from '../components/NavT';
import twitterIcon from '../assets/img/icons8-twitter-logo-30.png';
import linkedinIcon from '../assets/img/icons8-linkedin-logo-32.png';
import instagramIcon from '../assets/img/icons8-instagram-logo-30.png';
import YoutubeIcon from '../assets/img/icons8-youtube-30.png';
import MyMap from "./MyMap";
import Swal from 'sweetalert2';
import Footer2 from '../components/footer2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bde51f45-9eac-4ba4-9f84-4b7547b9a1b9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Message send successfully!",
            icon: "success"
            });

        }
      };
    

    return (
        <>
            <NavT />
                <div className="Contact-section">
                    <div className="contact-form">
                        <form className="contact_form" onSubmit={onSubmit}>
                            <div className="lg-01" >
                                    <p>Contact Us</p>
                            </div>
                            <div className="forme-groupe">
                                
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter your name "
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control "
                                        name="email"
                                        placeholder="Enter your Email"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>
                           
                            <textarea
                                className="form-control "
                                name="message"
                                placeholder="Enter your message"
                                Rows="5"
                                required
                            ></textarea>
                            <button className="btn ac_btn">
                                Send
                            </button>
                        </form>
                    </div>
                    
                    <div classNameii="mb-6">
                        <h3>Get in touch</h3>
                        <p>
                            If you’re interested in becoming a betPawa brand franchise holder, 
                            would like to discuss partnership opportunities, or have media queries, we’d love to hear from you.
                        </p>
    
                            <h3 className="color-4">Address</h3>
                            <p>Nyarugenge, City of Kigali, Rwanda</p>
                            <h2 className="color-4">e: press@mchezo.rw</h2>
                            <div className="social5">
                                <img src={twitterIcon} width="28px" alt="Twitter" />
                                <img src={linkedinIcon} width="28px" alt="LinkedIn" />
                                <img src={instagramIcon} width="28px" alt="Instagram" />
                                <img src={YoutubeIcon}  width="28px" alt="Youtube" />
                            </div>

                    </div>
                </div>
            
            <MyMap />
            <Footer2 />
        </>
    );
};

export default Contact;
