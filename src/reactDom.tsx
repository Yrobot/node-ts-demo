import * as ReactDOMServer from "react-dom/server";
import React from "react";

const Header = () => <header className="header">Header</header>;
const Content = () => <section className="content">Content</section>;
const Footer = () => <footer className="footer">Footer</footer>;
const Page = () => (
  <div className="page">
    <Header />
    <Content />
    <Footer />
  </div>
);

// const Page = require("./components/Footer").default;
const html = ReactDOMServer.renderToString(<Page />);

export default html;
