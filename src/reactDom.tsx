import * as ReactDOMServer from "react-dom/server";
import React from "react";

export interface InlineSVGElement {
  src: string;
  class?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    "svg-inline": InlineSVGElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "svg-inline": InlineSVGElement;
    }
  }
}

const Header = () => <header className="header">Header</header>;
const Content = ({ name }: { name: string }) => (
  <section className="content">Content:{name}</section>
);
const Footer = () => <footer className="footer">Footer</footer>;
const SvgInline = () => <svg-inline src="https://yrobot.top/icons/svg-inline.svg"></svg-inline>;
const Page = () => (
  <div className="page">
    <Header />
    <Content name="yrobot" />
    <SvgInline />
    <Footer />
  </div>
);

console.log(<Page />);

// const Page = require("./components/Footer").default;
const html = ReactDOMServer.renderToString(<Page />);

export default html;
