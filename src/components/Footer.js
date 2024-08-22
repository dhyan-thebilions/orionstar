import React from "react";
import "../styles/Footer.css";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <div className="footer-img">
                    <img alt="footer-image" src="../assets/footer-image.svg" />
                </div>
                <div className="footer-txt">Copyright © 2024 Fire Kirin Online Game. All Rights Reserved.</div>
            </Container>
        </div>
    );
};

export default Footer;
