import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-child">
                <h1 className="footer-heading">Contact Info</h1>
                <p className="footer-text">Email: <a href="mailto:sabahnooor.002@gmail.com">sabahnooor.002@gmail.com</a>
                </p>
                <p className="footer-text">Phone number: <a href="tel:+923162135083">+923162135083</a></p>
                <h1 className="footer-heading">Important Links</h1>
                <div className='icons'>
             <a href="https://www.linkedin.com/in/noor-us-sabah-shahid-7b04502b9/" target="_blank">
             <FaLinkedinIn />
             </a>
             <a href="https://github.com/noorussabah123" target="_blank" rel="noopener noreferrer">
             <FaGithub />
             </a>
             </div>
            </div>
            <p className='copy-right'>© 2024 Noor-us-Sabah. All Rights Reserved.</p>
        </div>
    )
}