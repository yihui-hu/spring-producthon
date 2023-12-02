const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterLogos">
        <img src="/producthon-logo.svg" style={{ width: 80, height: 80 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h4 className="FooterTitle">Spring Producthon</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              fontSize: "1em",
            }}
          >
            <h4 style={{ fontSize: "1em", fontWeight: "400" }}>Organized by</h4>
            <img
              src="/product-studio-logo.png"
              style={{ width: 24, height: 24 }}
            />
            <h4 style={{ fontSize: "1em", fontWeight: "400" }}>
              Product Studio
            </h4>
          </div>
        </div>
      </div>
      <div className="FooterSocials">
        <a href="https://www.instagram.com/tuftsproductstudio/" target="_blank">
          <img src="/instagram.png" style={{ width: 32, height: 32 }} />
        </a>
        <a
          href="https://www.linkedin.com/company/tufts-product-studio/"
          target="_blank"
        >
          <img src="/linkedin.png" style={{ width: 32, height: 32 }} />
        </a>
        <a href="mailto:tuftsproductstudio@gmail.com" target="_blank">
          <img src="/email.png" style={{ width: 32, height: 32 }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
