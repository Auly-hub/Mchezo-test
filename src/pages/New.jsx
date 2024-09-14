import React from 'react';
import "../components/styles/New.scss";
import img1 from '../assets/img/news/eQxQFGElyh1O0QJuzuBXPQVNI0.jpg';
import img2 from '../assets/img/news/BM8RQXiRPt7xkamcuWjkkK0dVM.jpg';
import img3 from '../assets/img/news/SzyX6t2NUb5nsAcffugxBjHLQ.jpg';
import img4 from '../assets/img/news/AbOEtZuQIgkSSJJbmWlxHPRs.webp';
import img5 from  '../assets/img/news/R5JtqO3w9YkeafdARuSBkSifw7M.webp';
import img6 from '../assets/img/news/FjmQqkiIaRpyFQjwKMwvRojuc.webp';
import img7 from '../assets/img/news/5Dv9ARaeAyNLwOPVHch1jSHAgx0.webp';
import img8 from '../assets/img/news/qlisM6Fy4zW5HpnasJmsW8xkQrw.webp';
import img9 from '../assets/img/news/py3d9O26OuelBgxK6STASlIs12g.webp';
import img10 from '../assets/img/news/4ErxYJzk4XyVeAOaAzJ5XNeXS6w.webp';
import NavT from '../components/NavT';
import Footer2 from '../components/footer2';

const cardsData = [
    {
        imgSrc: img1,
        title: "Mchezo-sponsored athlete Michelle Tau, qualifies for Paris 2024 Olympics",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img2,
        title: "Mchezo to support Lesotho's taekwondo star in road to olympics 2024",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img3,
        title: "Mchezo's Impactful Presence at the 13th Inter-Parliamentary Games",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img4,
        title: "Monumental Partnership to Ignite Ugandan Football",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img5,
        title: "betPawa unveiled as title sponsor for Playoffs",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img6,
        title: "FERWABA, betPawa enter a landmark deal",
        // description: "In betting and beyond, betPawa empower people by providing opportunities to change their lives. Perhaps the greatest example was the Dream Maker campaign, in which dozens of life-changing dreams were fulfilled across four countries, helping to transform entire communities."
    },
    {
        imgSrc: img7,
        title: "Pawaring dreams across Kenya",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img8,
        title: "betPawa 6-a-side tournaments generate millions for local teams",
        // description: "Build a unique experience by mixing and matching components."
    },
    {
        imgSrc: img9,
        title: "betPawa’s BIG push to help boda boda riders and food market vendors",
        // description: "betPawa prides itself on offering its customers the best client services in the industry. A dedicated team of agents, speaking over 200 languages between them, work around-the-clock to offer localised support in each of the countries the brand operates in."
    },
    {
        imgSrc: img10,
        title: "betPawa paint 8 markets green to support local vendors",
        // description: "In betting and beyond, betPawa empower people by providing opportunities to change their lives. Perhaps the greatest example was the Dream Maker campaign, in which dozens of life-changing dreams were fulfilled across four countries, helping to transform entire communities."
    }
];

const New = () => {
    return (
        <div className='New'>
            <NavT/>
            <section className="find-text">
                <div className="Find-container">
                    <h1>News</h1>
                    <p>Find all of our latest stories and news<br /> about Mchezo.</p>
                </div>
            </section>
            <section className="ours-section">
                <div className="ours-cards">
                    {cardsData.map((card, index) => (
                        <div className="ours-image" key={index}>
                            <img src={card.imgSrc} alt={card.title} />
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer2 />
        </div>
    )
}

export default New;
