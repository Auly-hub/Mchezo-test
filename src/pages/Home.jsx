import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/Home.scss";
import principal from '../assets/img/mchozo/principale.png';
import BigImage from '../assets/img/mchozo/e6m4eL8SHu0o8ivva76LuP57p8.jpg';
import smallOne from '../assets/img/mchozo/1eZjTm5DemDlNMseuKMVXUiw.png';
import smallTwo from '../assets/img/mchozo/q584ySSatbauJyuul2ZSf64jc.png';
import imgMaking from '../assets/img/mchozo/giPgIr218NceDuEEzZe3Yr7Xpqg.png';
import investmentIcon from '../assets/img/icons8-investment-32.png';
import innovationIcon from '../assets/img/icons8-innovation-24.png';
import integrityIcon from '../assets/img/icons8-integrity-30.png';
import developmentImage1 from '../assets/img/mchozo/0Z5qtNI226S0tQuWx7XnqzZTXs.jpg';
import developmentImage2 from '../assets/img/mchozo/kmVONJ7qiYVM4Den0zzqeA96l9M.jpeg';
import latestImageOne from '../assets/img/mchozo/yNqKOvhCsX702lOpFhhPODjGz8.webp';
import newsImageOne from '../assets/img/mchozo/BM8RQXiRPt7xkamcuWjkkK0dVM.jpg';
import newsImageTwo from '../assets/img/news/eQxQFGElyh1O0QJuzuBXPQVNI0.jpg';
import newsImageThree from '../assets/img/mchozo/AbOEtZuQIgkSSJJbmWlxHPRs.webp';
import newsImageFour from '../assets/img/news/SzyX6t2NUb5nsAcffugxBjHLQ.jpg';
import twitterIcon from '../assets/img/icons8-twitter-logo-30.png';
import linkedinIcon from '../assets/img/icons8-linkedin-logo-32.png';
import instagramIcon from '../assets/img/icons8-instagram-logo-30.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const Home = () => {
    return (
            <div className='section-home'>
                <Navbar />
                    <div className="hero-contain">
                        <div className="content-lg">
                            <h1>Investing in sports and technology in Africa</h1>
                        </div>
                        <div className="principal-image">
                            <img src={principal} alt="first" />
                        </div>
                    </div>
                    <div className="About-contain">
                        <p className="my-heading">MCHEZO</p>
                        <h1 className="my-header">
                            Expanding beyond gaming<br /> to grow sports and<br /> technology
                        </h1>
                        <p className="my-end">
                            We exist to champion its growth, as well as to explore and create
                            <br /> investment opportunities in sports and financial technology.
                        </p>
                    </div>
                    <div className="What-contain">
                        <div className='what-text'>
                            <h2 className="my-heading">What we do</h2>
                            <h1 className="my-header">Based in Africa</h1>
                            <p className="my-end">
                                Our head office is located in Kigali, Rwanda. From here we
                                <br /> manage the support and services offered across Africa.
                            </p>
                            <Link to="/whatwedo" className="bet-read">Read more</Link>
                        </div>
                        <div className="What-image">
                            <div className="top-image">
                                <img src={BigImage} alt="second" />
                            </div>
                            <div className="bottom-image">
                                <img src={smallOne} alt="third" />
                                <img src={smallTwo} alt="fourth" />
                            </div>
                        </div>
                    </div>
                    <div className="making-contain">
                        <div className='making-text'>
                            <h1>Making betting friendly</h1>
                            <p>
                                betPawa, a Mchezo brand, is Africa's leading online sports betting franchise. The betPawa brand is recognised and trusted for providing an optimised gaming experience. betPawa currently has presence in 11 countries.
                            </p>
                        </div>
                        <div className='making-image'>
                            <img src={imgMaking} alt="Making Betting Friendly" />
                        </div>
                        <div className="plus">
                            <Link to="/betpawa" className="read-plus">Read more on BetPawa</Link>
                        </div>
                    </div>
                    <section className="Val-section">
                        <div className="Val_text">
                            <h2 className="my-heading">OUR VALUES</h2>
                            <h1 className="my-header">What Mchezo stands for</h1>
                            <p className="bg-content">
                                Mchezo plays an active role in pushing for a more transparent industry. We believe that a level playing field ensures that the ultimate beneficiaries are those players and communities we exist to serve.
                            </p>
                            <Link to="/aboutus" className="bet-read">About us</Link>
                        </div>
                        <div className="cardex-div">
                            <div className="Investment-cardex cardexs">
                                <img src={investmentIcon} alt="Investment Icon" width="30" />
                                <div className="cardex-text">
                                    <h2>Investment</h2>
                                    <p>We strive for sustainable growth by investing in industries and ideas that provide value to African consumers.</p>
                                </div>
                            </div>
                            <div className="Innovation-cardex cardexs">
                                <img src={innovationIcon} alt="Innovation Icon" width="30" />
                                <div className="cardex-text">
                                    <h2>Innovation</h2>
                                    <p>Being market leaders requires thinking differently. Staying ahead means new collaborations and ideas.</p>
                                </div>
                            </div>
                            <div className="Integrity-cardex cardexs">
                                <img src={integrityIcon} alt="Integrity Icon" width="30" />
                                <div className="cardex-text">
                                    <h2>Integrity</h2>
                                    <p>We are guided by being open and honest about our intentions at all times, as integrity keeps our goals sustainable.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="development-section">
                        <div className="dev-sport">
                            <div className="development-image">
                                <div className="first-images">
                                    <div className="devo-image">
                                        <img src={developmentImage1} alt="Development 1" />
                                    </div>
                                    <div className="devo-image">
                                        <img src={developmentImage2} alt="Development 2" />
                                    </div>
                                </div>
                                <div className="second-images">
                                    <div className="devo-image">
                                        <img src={developmentImage1} alt="Development 3" />
                                    </div>
                                    <div className="devo-image">
                                        <img src={developmentImage2} alt="Development 4" />
                                    </div>
                                </div>
                            </div>
                            <div className="development-text">
                                <h2 className="my-heading">SPORTS DEVELOPMENT</h2>
                                <h1 className="my-header">Sports in Africa</h1>
                                <p className="bg-content">
                                    To support the development and impact of sports, Mchezo re-invests revenue from betting. From partnering with national federations, to sponsoring talented individuals - we seek to generate value across the sports ecosystem.
                                </p>
                            </div>
                        </div>
                    </section>

                <section className="lastest-section">
                    <div className="lastest-image">
                        <div className="lastest-one">
                            <div className="lastest-imgone">
                                <img src={latestImageOne} alt="Latest news image" />
                                </div>
                                    <div className="Styles">
                                        <h2>betPawa owner GamFly is Angola as base for its client services HQ</h2>
                                    </div>
                                    <div className="style">
                                        <p>Build a unique experience by mixing and matching components</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lastest-two">
                            <div className="last">
                                <h3>Latest news</h3>
                            </div>
                            <div className="lastest-card">
                                <div className="lastest-container">
                                    <img src={newsImageOne} alt="News 1" />
                               
                                <p>Mchezo-sponsored athlete Michelle Tau, qualifies for Paris 2024 Olympics</p>
                                 </div>
                            </div>
                            <div className="lastest-card">
                                <div className="lastest-container">
                                    <img src={newsImageTwo} alt="News 2" />
                                
                                <p className="bg">Mchezo to support Lesotho's taekwondo star in road to olympics 2024</p>
                                </div>
                            </div>
                            <div className="lastest-card">
                                <div className="lastest-container">
                                    <img src={newsImageThree} alt="News 3" />
                                
                                <p>Mchezo's Impactful Presence at the 13th Inter-Parliamentary Games</p>
                                </div>
                            </div>
                            <div className="lastest-card">
                                <div className="lastest-container">
                                    <img src={newsImageFour} alt="News 4" />
                                
                                <p>Monumental Partnership to Ignite Ugandan Football</p>
                                </div>
                            </div>
                        </div>
                </section>

                    <section className="touch-section">
                        <div className="touch-container">
                            <div className="touch-text">
                                <h1>Get in touch</h1>
                                <p>If you are interested in becoming a franchise holder of the betPawa brand, or for any media queries or to discuss partnership opportunities.</p>
                                <Link to="/contact">
                                    <button className="button">Contact us</button>
                                </Link>
                            </div>
                            <div className="social">
                                <img src={twitterIcon} width="40px" alt="Twitter" />
                                <img src={linkedinIcon} width="40px" alt="LinkedIn" />
                                <img src={instagramIcon} width="40px" alt="Instagram" />
                            </div>
                        </div>
                    </section>
                    <Footer />
            
            </div>
    );
};

export default Home;
