import React from "react";
import PropTypes from "prop-types";

const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  };

  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css")
          }}
        />
      );
    }

    return (
      <html
        lang="en"
        class="wf-proximanova-n6-active wf-proximanova-i6-active wf-clarendontextpro-i4-active wf-active"
      >
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          {this.props.headComponents}
          <meta name="viewport" content="width=device-width" />
          <meta
            name="description"
            content="The son of a fourth-generation Texan mother and Greek immigrant father, Alex Triantaphyllis was born and raised in Houston"
          />
          <title>
            Alex T for Texas | Alex Triantaphyllis Texas 7th Congressional
            District
          </title>
          {css}
          <link
            rel="apple-touch-icon"
            href="http://www.alextfortexas.com/wp-content/themes/alex-for-congress/images/favicon-180.png"
          />
          <link
            rel="icon"
            href="http://www.alextfortexas.com/wp-content/themes/alex-for-congress/images/favicon-192.png"
          />
          <link
            rel="shortcut icon"
            href="http://www.alextfortexas.com/wp-content/themes/alex-for-congress/images/favicon.ico"
          />
          <meta
            name="description"
            content="The son of a fourth-generation Texan mother and Greek immigrant father, Alex was born and raised in Houston, where he is an active member of the community. Alex is running for Congress in Texas Congressional District 7 and is focused on working hard, being accountable, and partnering with constituents to achieve our vision together."
          />
          <meta name="robots" content="noodp" />
          <link rel="canonical" href="http://www.alextfortexas.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alex T for Texas" />
          <meta
            property="og:description"
            content="The son of a fourth-generation Texan mother and Greek immigrant father, Alex was born and raised in Houston, where he is an active member of the community. Alex is running for Congress in Texas Congressional District 7 and is focused on working hard, being accountable, and partnering with constituents to achieve our vision together."
          />
          <meta property="og:url" content="http://www.alextfortexas.com/" />
          <meta
            property="og:site_name"
            content="Alex T for Texas - Alex Triantaphyllis"
          />
          <meta
            property="og:image"
            content="http://www.alextfortexas.com/wp-content/uploads/2017/05/opengraph-logo.jpg"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="The son of a fourth-generation Texan mother and Greek immigrant father, Alex was born and raised in Houston, where he is an active member of the community. Alex is running for Congress in Texas Congressional District 7 and is focused on working hard, being accountable, and partnering with constituents to achieve our vision together."
          />
          <meta name="twitter:title" content="Alex T for Texas - Home" />
          <meta
            name="twitter:image"
            content="http://www.alextfortexas.com/wp-content/uploads/2017/05/opengraph-logo.jpg"
          />

          <link rel="dns-prefetch" href="http://s.w.org/" />
          <link rel="shortlink" href="http://www.alextfortexas.com/" />
          <link
            rel="icon"
            href="http://www.alextfortexas.com/wp-content/uploads/2017/05/favicon-180.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="http://www.alextfortexas.com/wp-content/uploads/2017/05/favicon-180.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="http://www.alextfortexas.com/wp-content/uploads/2017/05/favicon-180.png"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="https://use.typekit.net/bcw4pdn.js" />
          <script
            type="text/javascript"
            src="//d1aqhv4sn5kxtx.cloudfront.net/actiontag/at.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `try {
                Typekit.load({ async: true });
              } catch (e) {
                console.log(e.message + "cant load typekit");
              }`
            }}
          />
        </body>
      </html>
    );
  }
}
