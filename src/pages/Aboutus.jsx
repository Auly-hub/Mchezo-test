import React, { Fragment } from 'react';
import "../components/styles/Aboutus.scss";
import storyImage from '../assets/img/Senegalese.webp';
import investmentIcon from '../assets/img/icons8-investment-32.png';
import innovationIcon from '../assets/img/icons8-innovation-24.png';
import integrityIcon from '../assets/img/icons8-integrity-30.png';
import chiefOfStaff from '../assets/img/Chief of Staff.webp';
import managingDirector from '../assets/img/Managing Director.webp';
import chiefBrandOfficer from '../assets/img/Chief Brand Officer.webp';
import  chiefMarketingOfficer from '../assets/img/Chief Marketing Officer.webp';
import Footer from '../components/Footer';
import NavT from '../components/NavT';




const Aboutus = () => {
    return (
        <div className="Aboutus">
            <NavT />
                <section className="stories-section">
                    <div className="stories-content">
                        <div className="stories-container">
                            <div className="stories_text">
                                <h2>Mchezo Story</h2>
                                <p>
                                    Mchezo was established in Kigali, Rwanda in 2022, as part of a move to bring the focus of our global operations closer to our franchisees. As 
                                    <span className="bleu"> the owner of the betPawa brand,</span>
                                    the placement of our HQ at the heart of the African continent, is a way for us to continue and accelerate growth, by being closer to the action.
                                    <br />
                                    <br />
                                    A investment hub and head office was built to better centralise and streamline our services to the rest of the continent, and to capitalise on the opportunities in new industries.
                                    <br />
                                    <br />
                                    One of the roles of Mchezo is to reinvest betPawa’s revenue into diverse development opportunities across Africa. Mchezo has begun actively investing in the future of sport, entertainment and financial inclusion technology in Africa.
                                </p>
                                <h1>As we stride forward, our objective is clear: to invest, innovate, and ignite inspiration across Africa.</h1>
                            </div>
                            <div className="stories-image">
                                <div className="stories-image">
                                    <img src={storyImage} alt="Grande Image" />
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
                
                <section className="Value-section">
                        <div className="Value_text">
                            <h2 >OUR VALUES</h2>
                            <h1 >What Mchezo stands for</h1>
                            <p >
                                Mchezo plays an active role in pushing for a more transparent industry. We believe that a level playing field ensures that the ultimate beneficiaries are those players and communities we exist to serve.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="Investment-value">
                                <img src={investmentIcon} alt="Investment Icon" width="30" />
                                <div className="text-value">
                                    <h2>Investment</h2>
                                    <p>We strive for sustainable growth by investing in industries and ideas that provide value to African consumers.</p>
                                </div>
                            </div>
                            <div className="Innovation-value">
                                <img src={innovationIcon} alt="Innovation Icon" width="30" />
                                <div className="text-value">
                                    <h2>Innovation</h2>
                                    <p>Being market leaders requires thinking differently. Staying ahead means new collaborations and ideas.</p>
                                </div>
                            </div>
                            <div className="Integrity-value">
                                <img src={integrityIcon} alt="Integrity Icon" width="30" />
                                <div className="text-value">
                                    <h2>Integrity</h2>
                                    <p>We are guided by being open and honest about our intentions at all times, as integrity keeps our goals sustainable.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                <section className="sion-section">
            <div className="sion-container">
                <div className="sion-text">
                    <h1>Mchezo Mission and Vision</h1>
                </div>
                <div className="sion-cards">
                    <div className="sion-card">
                        
                                <h3>Mission</h3>
                        <p>
                            To revolutionize the sports betting entertainment landscape by investing in the future of sport, entertainment, and financial inclusion technology across Africa.
                        </p>
                        
                        
                    </div>
                    <br />
                    <div className="sion-card">
                        
                            <h3>Vision</h3>
                            <p>
                            To be the leading and most trusted brand in sportsentertainment, fostering growth, innovation, and inclusivity across the African continent.
                            </p>   
                       
                        
                    </div>
                </div>
            </div>
        </section>
                <section className="team-section">
            <div className="team-text">
                <h1 className="my-heading">OUR LEADERSHIP TEAM</h1>
                <p className="bg-content">
                    Working to support the services we provide across the markets we
                    operate in, from our head offices in Rwanda.
                </p>
            </div>

            <div className="team-card">
                <div className="team-one">
                    <div className="chief-card cards">
                        <img src={chiefOfStaff} alt="Chief of Staff" width="100" />
                        <div className="text">
                            <h3>Jean Luc Cyusa</h3>
                            <p>Chief of Staff</p>
                        </div>
                    </div>
                    <div className="chief-card cards">
                        <img src={managingDirector} alt="Managing Director" width="100" />
                        <div className="text">
                            <h3>Ntoudi Mouyelo</h3>
                            <p>Managing Director</p>
                        </div>
                    </div>
                </div>
                <div className="team-two">
                    <div className="chief-card cards">
                        <img src={chiefBrandOfficer} alt="Chief Brand Officer" width="100" />
                        <div className="text">
                            <h3>Spencer Okach</h3>
                            <p>Chief Brand Officer</p>
                        </div>
                    </div>
                    <div className="chief-card cards">
                        <img src={chiefMarketingOfficer} alt="Chief Marketing Officer" width="100" />
                        <div className="text">
                            <h3>Hannah Clifford</h3>
                            <p>Chief Marketing Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <Footer /> 
        </div>
    )
}

export default Aboutus;