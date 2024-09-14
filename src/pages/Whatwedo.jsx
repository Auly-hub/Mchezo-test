import React from 'react';
import "../components/styles/Whatwedo.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImageOne from '../assets/img/what we do/Imageone.jpg';
import ImageTwo from '../assets/img/what we do/imagetwo.jpg';
import ImageThree from '../assets/img/what we do/imagethree.jpg';
import img1 from '../assets/img/what we do/D9Ah0EzOc8WFjOAaLuLugW9OXA.jpg';
import img2 from '../assets/img/what we do/XCVmwN9TkZfXmOk8E7bPKRYH70.jpg';
import img3 from '../assets/img/what we do/iyJRJGEZCatcHNxcIfKHqswr5Wg.jpg';
import img4 from '../assets/img/what we do/Ln4eI2ZSeP1vFew5KbapnbhJlY.webp';
import img5 from '../assets/img/what we do/IHr4WRCZbxhT6YtFaXxNk6ojg.webp';
import img6 from '../assets/img/what we do/C4PDs1h27tBN4iTUARcJDkN18dc.jpg';
import img7 from '../assets/img/what we do/6emhkDc04LZHFja63QhrlQOylJw.jpg';
import img8 from '../assets/img/what we do/IlrVtmczPoO6ug9P7QdZEAkBeQ.jpg';
import One from '../assets/img/what we do/D5GWyCvY3kk7JB6gw6pJuPiy9k.png';
import Two from '../assets/img/what we do/T0G5QrX0FiI4ZK3ufSulTKvMv14.png';
import NavT from '../components/NavT';
import Footer2 from '../components/footer2';

const Whatwedo = () => {

    const handleImageClick = (e) => {
        e.currentTarget.classList.toggle('clicked');
      };
    return (
        <div className='Whatwedo'>  
            <NavT />
            <div className="Slider-text">
                <div className="Slider-container">
                    <h2>MCHEZO</h2>
                    <h1>What we do</h1>
                    <p>Investing in the future of <br /> sport and technology in Africa.</p>
                </div>
            </div>

            <div className='Slider-image'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                >
                    <SwiperSlide className="slide">
                        <img src={ImageOne} alt="Slide 1"  />
                    </SwiperSlide>
                    <SwiperSlide  className="slide"> 
                        <img src={ImageOne} alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide  className="slide">  
                        <img src={ImageOne} alt="Slide 3" /> 
                    </SwiperSlide>
                    <SwiperSlide  className="slide">
                        <img src={ImageOne} alt="Slide 4" />
                    </SwiperSlide>
                    <SwiperSlide  className="slide"> 
                        <img src={ImageOne} alt="Slide 5" />
                    </SwiperSlide>
                    <SwiperSlide  className="slide">  
                        <img src={ImageOne} alt="Slide 6" /> 
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="franchising-container">
                <div className="franchising_text">
                    <h2 className="my-heading">FRANCHISING</h2>
                    <h1 className="my-header">We licence the <br /> betPawa brand</h1>
                    <p className="bg-content">
                        Mchezo partners with local franchisees that <br />
                        are regulated <br /> and licensed to conduct online gaming. <br /> 
                        <span className="bleu">Mchezo works <br /> to expand the betPawa brand</span>
                            into <br /> new territories alongside partners committed<br />
                            to good governance <br /> and business practices.
                    </p>
                </div>
                <div className="franchising-image">
                    <div className="top-image2">
                        <img src={img5} alt="Grande Image" />
                    </div>
                </div>
            </div>
            <section className="investing-section">
                <div className="investing_container">
                    <div className="invest">
                        <h1 className="my-head">Re-Investing beyond the brand</h1>
                        <div className="my-header">
                            <p>One of the roles of Mchezo is to explore new areas of <br />growth and invest into diverse projects  
                            - with a focus<br /> on sports development and financial inclusion. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="basket-section">
      <div className="basket-sport">
        <div className="basket-images">
          <div className="basket-image large" onClick={handleImageClick}>
            <img src={img6} alt="grand" className="grand" />
          </div>
          <div className="basket-image small one" onClick={handleImageClick}>
            <img src={img7} alt="moyen" className="moyen" />
          </div>
          <div className="basket-image small two" onClick={handleImageClick}>
            <img src={img8} alt="petit" className="petit" />
          </div>
        </div>
        <div className="basket-text">
          <h2>SPORTS DEVELOPMENT</h2>
          <h1>Sports in Africa</h1>
          <p className="one">
            To support the development and impact of sports,<br />
            Mchezo re-invests revenue from betting.<br />
            From partnering with national federations,<br />
            to sponsoring talented individuals - <br />
            we seek to generate value across the sports ecosystem.
          </p>
        </div>
      </div>  
    </section>
            <section className="cars-section">
                <div className="cars-container">
                    <div className="cars">
                        <div className="care-one">
                            <img src={img1} alt="Grassroots tournaments" />
                            <h3 >Grassroots<br /> tournaments</h3>
                            <p>From nationwide 6-aside cup in Kenya, to the Tennis Rwandan Children's tournament.</p>
                        </div>
                    </div>
                    
                    <div className="care">
                         <div className='care-two'>
                                <img src={img2} alt="Supporting Football Federations" />
                                <h3 >Supporting Football Federations</h3>
                                <p>Mchezo, via betPawa, has initiated game-changing partnerships in Uganda and Ghana with national football federations, aimed at impacting all levels of the game.</p>
                         </div>
                    </div>
                </div>
                <div className="cars-container">
                    <div className="care">
                        <div className='care-two'>
                            <img src={img3} alt="Players Locker-room Bonus" />
                            <h3 >Players Locker-room Bonus</h3>
                            <p>Our flagship initiative - the Locker-room Win Bonus - designed to elevate competitiveness in sports by directly and instantly rewarding players after they win a game.</p>
                        </div>
                    </div>
                        <br />
                    <div className="care">
                        <div className="care-one">
                            <img src={img4} alt="Building Pitches" />
                            <h3 >Building Pitches</h3>
                            <p>Investments that last and keep giving value after a season ends - defines the Mchezo way.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners-section">
                    <div className="partners-text">
                        <h2>SPORTS DEVELOPMENT</h2>
                        <h1>What our partners think</h1>
                    </div>
                    <div className="partners-cards">
                        <div className="partners-one">
                            <p className="part-one">
                                This isn't just about sponsorship; it's about creating a<br /> transformational change for Rwandan basketball.
                            </p>
                            <p className="part-two">
                                Desire Mugwiza <br />
                               <span>FERWABA President</span>
                            </p>
                        </div>
                        <div className="partners-one">
                            <p className="part-one">
                                This partnership marks a pivotal moment for Ugandan football.<br /> It is more than just financial support;<br /> it is a firm pledge to the future of our beloved sport,<br /> a promise to double down on our shared vision for progress.
                            </p>
                            <p className="part-two">
                                Moses Hassim Magogo 
                            <br />
                            <span>FUFA President</span>
                            </p>
                        </div>
                        <div className="partners-one">
                            <p className="part-one">
                                betPawa sponsorship of the Ghana league can be classified<br /> as the best in the past years due to its innovation of incentivizing<br /> the players who are the main products of the league
                            </p>
                        
                            <p className="part-two">
                                Joshua Addai<br />
                                <span> Karela United</span>
                            </p>
                        </div>
                    </div>
            </section>

            <section className='financial-section'>
                    <div className="financial-text">
                        <h2 className="my-heading">FINANCIAL INCLUSION</h2>
                        <h1 className="bg-contain">We're not mere<br /> observers but active<br /> innovators.</h1>
                        <p className="one">
                            Mchezo has interests in digitizing of 
                            the way services are<br /> consumed, 
                            and particularly access to tools of financial<br /> empowerment.
                        </p>
                    </div>
            </section>
        <section className="pawapass-section">
            <div className="pawapass-container">
                <div className="Pawapass-image">
                    <div className="pawa-one">
                        <img src={One} />
                    </div>
                    <div className="pawa-two">
                        <img src={Two} />
                    </div>
                </div>
                <div className="pawapass-text">
                    <h1 className="bg-contain">Pawapass</h1>
                    <p className="one">
                        Recognizing the barriers many Africans
                        face in <br /> accessing financial services,
                        Mchezo has <br /> invested in PawaPass
                        - a service specializing in <br /> user verification and
                        compliance specifically for <br /> the African consumer.
                    </p>
                </div>
            </div>
         </section>

               
            <Footer2 />
        </div>
       
    )
}

export default Whatwedo;
