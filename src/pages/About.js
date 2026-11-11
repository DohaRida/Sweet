import cake from '../assets/minicheesecake.jpg';
import "../styles/about.css";
export default function About(){
  return(

<div className="about-page-container">
  <header className="about-header">
    <h1 className="page-title">About Sweet and Sip</h1>
    <p className="about-subtitle">Baking happiness into every bite, and brewing joy into every cup.</p>

  </header>
<section className="about-conetnt">
  <div className="about-text-section">
    <h2>Our Story</h2>
    <p>
       Sweet and Sip started with a small idea that everyone deserves a perfect pairing os artisanal sweets and handmade beverages. What began as a small passion project in our home kitchen has blossomed into a beloved local spot where friends gather, students study, and sweet cravings are always satisfied.
    </p>
     <h2>Our Quality Promise</h2>
              <p> We believe in using only the highest quality ingredients. Whether it's the rich cocoa in our cakes, or the fresh fruits, we never compromise on taste. </p>
              </div>
              <div className="about-image-wrapper">
                <img src={cake} alt="Baking Prrocess" className="about-image"/>
                
  </div>
</section>
</div>



  );
}