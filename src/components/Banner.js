import React from "react";
import "../styles/Banner.css";

const Banner = () => {
    return (
        <React.Fragment>
            <div className="banner-container">
                <div className="banner-online">ONLINE SWEEPSTAKES SLOTS & FISHGAMES</div>
                <div className="banner-orion-star">Orion Stars in an all new way to play your favorite type of sweepstakes, reels, and fish games on an app! You can play the fish and sweepstakes games at your “go to spot” in your city, home, or anywhere you like. Your credits are tied to your account. Bottom line, you can play on any device, anytime, anywhere!</div>
            </div>
            <div className="banner-container-two">
                <div className="banner-button-wrapper">
                    <button className="banner-button">Download Now!</button>
                </div>
                <div className="banner-so-whats">
                    So, what’s keeping you from joining in the fun? <span className="banner-download">Download</span> Orion Stars mobile fish game app and start gaming in the palm of your hand.
                </div>
                <div className="banner-text-wrapper">
                    <div className="anydevice">ANYDEVICE!</div>
                    <div className="anytime">ANYTIME!</div>
                    <div className="anydevice">ANYWHERE!</div>
                </div>
            </div>
            <div className="banner-img-bg">
                <div className="banner-img">
                    <img alt="banner-img" src="../assets/banner-img.svg" />
                </div>
            </div>
        </React.Fragment>
    )
};

export default Banner;
