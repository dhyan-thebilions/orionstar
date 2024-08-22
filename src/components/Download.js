import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "../styles/Download.css";

const Download = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="download-app">
                    Download the App
                </div>
                <div className="follow-these">
                    Follow these steps to download and install the app on your device
                </div>
            </Container>

            <Container>
                <Row className="g-4">

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-img-wrapper">
                                <img
                                    alt="google-play"
                                    className=""
                                    loading="lazy"
                                    src="../assets/google-play.svg"
                                />
                                <img
                                    alt="google-play"
                                    className="qr-image"
                                    loading="lazy"
                                    src="../assets/qr-code.svg"
                                />
                            </div>
                            <div className="download-for">
                                Download for Android
                            </div>
                            <ol className="click-on-the-container">
                                <li>
                                    Click on the link or scan the QR code with your camera. (Avoid using Google Chrome; use the standard Android browser.)
                                </li>
                                <li>Click "DOWNLOAD."</li>
                                <li>
                                    Approve the download when prompted.
                                </li>
                                <li>
                                    Approve the file size download.
                                </li>
                                <li>Allow installation from unknown sources in your settings if prompted. (Go to Settings {">"} Security {">"} Install unknown apps.)</li>
                                <li>
                                    Open the downloaded file from your web browser. (Google Chrome won't have this option; use the standard Android browser.)
                                </li>
                                <li>Click "INSTALL."</li>
                                <li>
                                    Open the app once installed.
                                </li>
                                <li>
                                    Allow or deny call permissions as per your preference.
                                </li>
                                <li>Log in and start playing the game!</li>
                            </ol>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-img-wrapper">
                                <img
                                    alt="app-store"
                                    className=""
                                    loading="lazy"
                                    src="../assets/app-store.svg"
                                />
                                <img
                                    alt="google-play"
                                    className="qr-image"
                                    loading="lazy"
                                    src="../assets/qr-code.svg"
                                />
                            </div>
                            <div className="download-for">Download for iOS</div>
                            <ol className="click-on-the-container">
                                <li>
                                    Click on the link to download the app.
                                </li>
                                <li>
                                    Press "Download" to start the process.
                                </li>
                                <li>
                                    Follow the on-screen instructions to complete the
                                    installation.
                                </li>
                                <li>
                                    Finish installing Orion Stars.
                                </li>
                                <li>
                                    Enter the download code provided by your account holder.
                                </li>
                                <li>Start playing Orion Stars.</li>
                            </ol>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-img-wrapper">
                                <img
                                    alt="google-play"
                                    className="qr-image"
                                    loading="lazy"
                                    src="../assets/windows-logo.svg"
                                />
                            </div>
                            <div className="download-for">Download for Windows</div>
                            <ol className="click-on-the-container">
                                <li>
                                    Go to your browser and download Bluestacks from
                                    {' '}<span className="this-link">this link</span>{' '}
                                    . Click "Download Bluestacks."
                                </li>
                                <li>
                                    Open the file after the download completes.
                                </li>
                                <li>Click "Install Now."</li>
                                <li>
                                    Allow any prompts asking to make changes to your
                                    computer during installation.
                                </li>
                                <li>
                                    Skip signing into Google Play by selecting "I’ll do it
                                    later."
                                </li>
                                <li>
                                    In your browser, visit
                                    {' '}<span className="this-link">this link</span>{' '}
                                    and click "Download."
                                </li>
                                <li>
                                    Open the downloaded file.
                                </li>
                                <li>
                                    The app icon will appear on your screen, ready to use.
                                    Remove the Bluestacks shortcuts from your desktop if you
                                    wish, but keep the Orion Stars app icon. Click the icon
                                    to start the program.
                                </li>
                            </ol>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className="h-100 download-card-override">
                            <div className="download-for">Minimum Requirements</div>
                            <ul className="click-on-the-container">
                                <li>
                                    OS: Microsoft Windows 7 or newer.
                                </li>
                                <li>Processor: Intel or AMD.</li>
                                <li>
                                    RAM: At least 2GB of RAM (Note: Disk space is not a
                                    substitute for RAM).
                                </li>
                                <li>
                                    HDD: 5GB of free disk space.
                                </li>
                                <li>
                                    Permissions: You must have Administrator rights on your
                                    PC.
                                </li>
                                <li>
                                    Graphics: Up-to-date graphics drivers from Microsoft or
                                    your chipset vendor.
                                </li>
                            </ul>

                            <div className="download-for">Minimum Requirements</div>
                            <ul className="click-on-the-container">
                                <li>OS: Microsoft Windows 10</li>
                                <li>{`Processor: Intel or AMD Multi-Core Processor with a Single Thread PassMark score > 1000 and virtualization extensions enabled in the BIOS (See help). [Check your processor's Single Thread PassMark score here.](Insert link)`}</li>
                                <li>
                                    Graphics: Intel/Nvidia/ATI, Onboard or Discrete
                                    controller with a PassMark score ≥ 750. [Check your
                                    graphics controller's PassMark score here.](Insert link)
                                </li>
                                <li>RAM: 8GB or higher</li>
                                <li>
                                    Storage: SSD (or Fusion/Hybrid Drives)
                                </li>
                                <li>
                                    Internet: Broadband connection for accessing games,
                                    accounts, and related content.
                                </li>
                                <li>
                                    Graphics Drivers: Ensure your graphics drivers are
                                    up-to-date from Microsoft or the chipset vendor.
                                </li>
                            </ul>
                        </Card>
                    </Col>

                    <div className="download-bg" />
                </Row>
            </Container>
            {/* </div> */}
        </React.Fragment>
    )
};

export default Download;
