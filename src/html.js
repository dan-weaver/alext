import React from "react";
import PropTypes from "prop-types";

const BUILD_TIME = new Date().getTime();

var ngpScriptContent = `function Ngp(win) {
  var hasLoadedNgp;
  win.nvtag_callbacks = win.nvtag_callbacks || {};
  var postRenderCallbacks = win.nvtag_callbacks.postRender = win.nvtag_callbacks.postRender || [];


  var formLookUp = {

  };

  var makeFormState = function(name, callback) {
    return {
      hasRendered: false,
      callback: callback || null
    }
  }

  var registerCallback = function(formName, callback) {
      var currentFormState = formLookUp[formName] || makeFormState(formName, callback);
      formLookUp[formName] = currentFormState;
  };

  var isFormAlreadyReady = function(name) {
    return formLookUp[name] && formLookUp[name].hasRendered;
  }

  postRenderCallbacks.push(
    function(args) {
      var currentFormState = formLookUp[args.form_definition.title] || makeFormState(name);
      formLookUp[args.form_definition.title] = currentFormState;
      if (currentFormState.callback) {
        setTimeout(currentFormState.callback, 0);
      } else {
        console.log("WARNING, form does not exist, " + " " + args.form_definition.title);
      }
      currentFormState.hasRendered = true;
    }
  );

  return {
    onFormReady(formName, callback) {
        if (isFormAlreadyReady(formName)) {
          setTimeout(function() {
            callback();
          }, 0)
        } else {
          registerCallback(formName, callback);
        }
    },
    destroy() {
      // tear down form
    }
  }
};
window.NgpForms = Ngp(window);
`;

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
          <script
            dangerouslySetInnerHTML={{
              __html: ngpScriptContent
            }}
          />
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <div style="display:none;" class="ngp-signup-holder">
                <div
                  class="ngp-form quick-signup ngp-signup-form"
                  data-labels="inline"
                  data-id="-8884102406176503296"
                  data-resource-path="/"
                  data-template="minimal"
                >
                </div>
              </div>
              <div style="display:none;" class="ngp-get-involved-holder">
                <div
                  class="ngp-form get-involved ngp-get-involved-form"
                  data-id="-7731180901569656320"
                  data-labels="inline"
                  >
                </div>
            </div>
            `
            }}
          />
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-98445661-1', 'auto');
        ga('send', 'pageview');
            `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `

            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '126121308005296');
              fbq('track', 'PageView');
              //fbq('track', 'Lead');
              fbq('track', 'CompleteRegistration');
            `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=126121308005296&ev=PageView&noscript=1"
            />
          </noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              console.log('setting up ngp form');
              window.nvtag_callbacks = window.nvtag_callbacks || {};
              window.nvtag_callbacks.onSubmit = [];
              window.nvtag_callbacks.onSubmit.push(function() {
                console.log('submitted');
                window.fbq('track', 'Lead');
              })
              `
            }}
          />
        </body>
      </html>
    );
  }
}
