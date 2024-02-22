import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const About = () => {
  return (
    <div className="AboutContainer">
      <h1 className="SectionTitle">What is Producthon?</h1>
      <div>
        <h3 className="SectionDescription">
          Producthon is a weekend-long design challenge where participants will
          design an app which solves an important problem in a given space. The
          event will go from Feb 23 (Fri) 5PM to Feb 25 (Sun) 5PM!
        </h3>
        <br />
        <h3 className="SectionDescription">
          In the past, it has only been open to Tufts students. But this year,
          we’re opening up to all enrolled college students who study in Boston!
        </h3>
      </div>
      <a
        href="https://docs.google.com/document/d/1Q5ZYga-Syw_Dw2KEs76QQ6B17Cwne14ilLNHqnDl0I4/edit?usp=sharing"
        target="_blank"
      >
        <div className="AboutButton">View Past Projects</div>
      </a>
      <div className="Grid">
        <Zoom classDialog="custom-zoom">
          <img src="/about-1.png" style={{ borderRadius: "8px" }} />
        </Zoom>
        <Zoom classDialog="custom-zoom">
          <img src="/about-2.png" style={{ borderRadius: "8px" }} />
        </Zoom>
        <Zoom classDialog="custom-zoom">
          <img src="/about-3.png" style={{ borderRadius: "8px" }} />
        </Zoom>
      </div>
    </div>
  );
};

export default About;
