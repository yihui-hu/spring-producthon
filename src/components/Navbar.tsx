import ProducthonLogo from "./ProducthonLogo";

type NavbarProps = {
  aboutRef: React.MutableRefObject<null | HTMLDivElement>;
  whyRef: React.MutableRefObject<null | HTMLDivElement>;
  themesRef: React.MutableRefObject<null | HTMLDivElement>;
  scheduleRef: React.MutableRefObject<null | HTMLDivElement>;
  sponsorRef: React.MutableRefObject<null | HTMLDivElement>;
  faqRef: React.MutableRefObject<null | HTMLDivElement>;
};

const Navbar = (props: NavbarProps) => {
  const { aboutRef, whyRef, themesRef, scheduleRef, sponsorRef, faqRef } =
    props;
  return (
    <div className="NavbarContainer">
      <ProducthonLogo />
      <div className="NavbarLinks">
        <h4
          onClick={() =>
            aboutRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          About
        </h4>
        <h4
          onClick={() =>
            whyRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          Why?
        </h4>
        <h4
          onClick={() =>
            themesRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          Themes
        </h4>
        <h4
          onClick={() =>
            scheduleRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          Schedule
        </h4>
        <h4
          onClick={() =>
            sponsorRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          Sponsor
        </h4>
        <h4
          onClick={() =>
            faqRef!.current!.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          FAQ
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
