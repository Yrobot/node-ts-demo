import * as ReactDOMServer from "react-dom/server";
import React from "react";

const Component = require("./components/Footer").default;
const html = ReactDOMServer.renderToString(<Component />);

export default html;
