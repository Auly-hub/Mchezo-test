import React from 'react';
import "../components/styles/Betpawa.scss";
import betPawaImg1 from '../assets/img/betpawa/ad8aJ4HF47Lm5ANq78EvNvVDdk.png';
import betPawaImg2  from '../assets/img/betpawa/tzxRUIHPeyBjhiZuU4KrujffmE.png';
import betPawaAcrossImg from '../assets/img/betpawa/IucP1Hk0D22NJ3MUdcsb1cHefo.png';
import builtForAfricaImg from '../assets/img/betpawa/phone.webp';
import promotingResponsibilityImg from '../assets/img/betpawa/8efsYgfJTl17gxPSHTiAmIzf72M.webp';
import talkingTheLanguageImg from '../assets/img/betpawa/rOyqjz8uhGOMjw02V26RI6jOy4.webp';
import creatingLastingChangeImg from '../assets/img/betpawa/sIsjLUnpYGO7MI44GjcmUB6kMfc.webp';
import Footer2 from '../components/footer2';
import NavT from '../components/NavT';

const Betpawa = () => {
    return (
        <div className='Betpawa'>
            <NavT />
            <section className="betPawa-image">
                <div className="betPawa-container">
                    <div className="betPawa-bg">
                        <img src={betPawaImg1} className="bet-img" alt="BetPawa 1" />
                        <h3 >Making Betting Friendly</h3>
                        <img src={betPawaImg2} className="be-img" alt="BetPawa 2" />
                    </div>
                </div>
            </section>
            <section className="across-section">
                <div className="across-container">
                    <div className="across-text">
                        <h3>betPawa Across Africa</h3>
                        <p>Our brand is a leading mobile sports betting brand and franchise in Africa. Through the betPawa brand we are able to connect directly with tech savvy, aspiring and passionate sports fans and gaming enthusiasts. The franchise is currently operating across 12 African countries, with the brand touching over 10M users.</p>
                    </div>
                    <div className="null"></div>
                    <div className="across-image">
                        <img src={betPawaAcrossImg} alt="betPawa Across Africa" />
                    </div>
                </div>
            </section>
            <section className="built-section">
                <div className="built-container">
                    <div className="built-image">
                        <img src={builtForAfricaImg} />
                    </div>
                    <div className="built-text">
                        <h3>Built for Africa</h3>
                        <p className="p-one">
                            The simple mobile-first product with fast and secure mobile money payments and 24/7 specialist customer support, is designed with intention to provide a reliable and easy-to-use interface.
                        </p>
                        <p className="p-two">
                            betPawa offers a low-data, low-stakes experience tailored to Africa’s digital-first market, complete with a wide choice of matches and the latest customer protection technology.
                        </p>
                    </div>
                </div>
            </section>
            <section className="vision-section">
                <div className="vision-container">
                    <div className="vision-text">
                        <p className="p-one">betPawa's vision is to make betting friendly.</p>
                        <h3>and this is how we do it</h3>
                    </div>
                    <div className="vision-card">
                        <div className="vision-image">
                            <img src={promotingResponsibilityImg} alt="Promoting Responsibility" />
                            <h5 className="h-5">Promoting responsibility</h5>
                            <p className="p-one">
                                The importance of betting responsibly is constantly championed at betPawa through a combination of consistent messaging reinforcing the need to treat betting as a leisure activity, easy-to-use self-exclusion measures to help customers stop, and partnerships with independent specialists who provide compassionate counselling.
                            </p>
                        </div>
                        <div className="vision-img">
                            <img src={talkingTheLanguageImg} alt="Talking the Language" />
                            <h5 className="h-5">Talking the language</h5>
                            <p className="p-one">
                                betPawa prides itself on offering its customers the best client services in the industry. A dedicated team of agents, speaking over 200 languages between them, work around the clock to offer localised support in each of the countries the brand operates in.
                            </p>
                        </div>
                        <div className="vision-imk">
                            <img src={creatingLastingChangeImg} alt="Creating Lasting Change" />
                            <h5 className="h-5">Creating lasting change</h5>
                            <p className="p-one">
                                In betting and beyond, betPawa empowers people by providing opportunities to change their lives. Perhaps the greatest example was the Dream Maker campaign, in which dozens of life-changing dreams were fulfilled across four countries, helping to transform entire communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bet-section">
            <div className="owner">
                <h3>betPawa owner</h3>
                <p className="p-one">
                    Since 2014, when betPawa was established, Mchezo has been managing their brand, building a solid reputation as a sports betting website while promoting sports all around Africa. Currently, this bookmaker is present in more than 10 African countries, including Rwanda, Tanzania, Uganda, Kenya, Zambia, Ghana, Nigeria, and others.
                </p>
            </div>
            <div className="bet-sportsbook">
                <h3>betPawa as a sportsbook</h3>
                <p className="p-one">
                    The main focus of Mchezo's brand: betPawa is their sportsbook. They offer a wide range of worldwide sports events, including Football, Basketball, Cricket, Rugby, Tennis, Horse-racing, and Motor-racing among the most demanded sports. Each market provides a vast amount of betting markets and odds, recognized by many customers as the most competitive odds even among other bookmakers operating in Europe, America, and the rest of the world.
                </p>
            </div>
            <div className="bet-casino">
                <h3>betPawa Casino</h3>
                <p className="p-one">
                    In conjunction with the sports betting section, Mchezo has worked hard to offer betPawa customers a wide range of Casino games like Blackjack, Roulette, and Poker, including a Live Casino section. They continue expanding their offer with the newest technology games, including an array of slot games, crash games like the popular Aviator, and many other latest games that you can play either for free or gamble to win real money.
                </p>
            </div>
        </section>
         {/* <section className="new-text">
            <div className="text-container">
                <h1>News</h1>
                <p>Find all of our latest stories and news about Mchezo.</p>
            </div>
        </section> */}
        <Footer2 />
        </div>
    )
}

export default Betpawa;