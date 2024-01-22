import { useState } from "react";

type FAQContainerProps = {
  question: string;
  answer: string;
};

const FAQContainer = (props: FAQContainerProps) => {
  const { question, answer } = props;
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div
      className="FAQItem"
      style={{
        backgroundColor: opened ? "#1E563C" : "",
        padding: 20,
        transition: "0.1s ease",
      }}
    >
      <h4
        onClick={() => setOpened(!opened)}
        style={{ cursor: "pointer", fontWeight: "600", fontSize: "1.2em" }}
      >
        {question}
      </h4>
      {opened ? <h4 style={{ fontWeight: "400" }}>{answer}</h4> : null}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="WhyContainer">
      <h4 className="SectionTitle">FAQ</h4>
      <div className="FAQWrapper">
        <div className="FAQContainer">
          <FAQContainer
            question="What's a Producthon?"
            answer="Producthon is a weekend-long design challenge where participants will design an app which solves an important issue in a given problem space."
          />
          <FAQContainer
            question="What will I do at Producthon? "
            answer="Participants will work through the different stages of the product development lifecycle—including problem discovery and definition, solution ideation and design, and launch readiness—which will culminate in a booth style pitch presentation where each team presents their solution to a board of judges"
          />
          <FAQContainer
            question="Who is this for?"
            answer="Producthon is for any enrolled college students studying in Boston who are interested in technology, creativity, and innovation! This is a great opportunity to gain hands-on product experience while building something awesome. Since development is not required, in our past Producthons, students who participated normally study product management, design, marketing, or research! But if you’re a developer who wants to learn the product cycle and build a product with a team, you’re more than welcome to join!"
          />
          <FAQContainer
            question="Does it cost anything?"
            answer="Admissions is completely free for all students!"
          />
          <FAQContainer
            question="Can I join if I don’t have experience in product?"
            answer="Yes!!! We created producthon for anyone who’s interested in tech, creativity, and innovation! So what really matters is your interest and passion!"
          />
          <FAQContainer
            question="Is this in person?"
            answer="Spring producthon will be in person! We haven't set the venue yet but it will be at one of the academic buildings at Tufts!"
          />
        </div>
        <div className="FAQContainer">
          <FAQContainer
            question="Do I need to be there all the time?"
            answer="Nope! You’re not confined here and please feel free to go home and get some rest. But do come to the opening ceremony, guest workshops, judging session, and closing ceremony in person!"
          />
          <FAQContainer
            question="Will you provide travel reimbursement?"
            answer="Since we're only opening up to Boston students, we won't be providing travel reimbursement."
          />
          <FAQContainer
            question="When do applications close?"
            answer="Applications close at 11:59PM, 2/19 Monday."
          />
          <FAQContainer
            question="Do I need to stay up all night for this?"
            answer="Absolutely not! In fact, our academic buildings do not allow for overnight stay. But of course if you do want to stay up all night on your projects, we won’t stop you."
          />
          <FAQContainer
            question="Will there be prizes / food?"
            answer="Yes! We’re planning to have prizes for each theme. We’re also aiming to serve food once per day (Fri dinner, Sat lunch, Sun lunch)!"
          />
          <FAQContainer
            question="How many people can be on a team?"
            answer="You may form teams of up to 4 students. Don’t have a team? We will have a Discord channel for team formation + events on day 1 to help you find team members!"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
