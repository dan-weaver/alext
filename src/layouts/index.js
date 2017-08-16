import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import $ from "jquery";

import "../css/theme.css";
import "tachyons";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  componentDidMount() {
    $(window).scroll(function() {
      var scrollBanner = $("section.banner").height() + 40;
      if ($(document).scrollTop() > scrollBanner) {
        $("header.default").addClass("scroll");
      } else {
        $("header.default").removeClass("scroll");
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Alex T for Texas | Alex Triantaphyllis Texas 7th Congressional District"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <div className="header-container">
          <header className="default">
            <Link to={"/"} className="logo-white" />
            <Link to={"/"} className="logo-white-small" />
            <div className="tagline">
              Candidate for Texas Congressional District 7
            </div>
            <nav>
              <ul className="nav">
                <li>
                  <ul>
                    <li>
                      <Link to="/#about">About Alex</Link>
                    </li>
                    <li>
                      <Link to="/#involved">Get Involved</Link>
                    </li>
                    <li>
                      <Link to={"/issues"}>
                        ISSUES
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="contribute">
                  <a
                    href="https://secure.actblue.com/contribute/page/alexthomepage"
                    className="btn btn-red"
                    target="_blank"
                  >
                    Contribute
                  </a>
                </li>
                <li className="social twitter">
                  <a href="https://twitter.com/AlexTforTexas" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="-9 11 30 30"
                      enableBackground="new -9 11 30 30"
                    >
                      <g fill="#fff">
                        <path d="m2 36.2c8.8 0 13.6-7.3 13.6-13.6 0-.2 0-.4 0-.6.9-.7 1.7-1.5 2.4-2.5-.9.4-1.8.6-2.7.8 1-.6 1.7-1.5 2.1-2.6-.9.5-1.9.9-3 1.2-.9-.9-2.1-1.5-3.5-1.5-2.6 0-4.8 2.1-4.8 4.8 0 .4 0 .7.1 1.1-4-.2-7.5-2.1-9.9-5-.4.5-.6 1.3-.6 2.2 0 1.7.8 3.1 2.1 4-.8 0-1.5-.2-2.2-.6 0 0 0 0 0 .1 0 2.3 1.6 4.3 3.8 4.7-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.1-.1 2.1 1.4 4.6 2.2 7.3 2.2" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="social facebook">
                  <a
                    href="http://www.facebook.com/AlexTforTexas"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="-9 11 30 30"
                      enableBackground="new -9 11 30 30"
                    >
                      <g fill="#fff">
                        <path d="m7.5 36.5v-9.6h3.2l.5-3.8h-3.7v-2.4c0-1.1.3-1.8 1.9-1.8h2v-3.4c-.3 0-1.5-.1-2.9-.1-2.9 0-4.8 1.8-4.8 5v2.8h-3.2v3.8h3.2v9.6l3.8-.1" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="social instagram">
                  <a
                    href="https://www.instagram.com/AlexTforTexas/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="-9 11 30 30"
                      enableBackground="new -9 11 30 30"
                    >
                      <g fill="#fff">
                        <path d="m6 16.4c3.1 0 3.5 0 4.7.1 1.1.1 1.8.2 2.2.4.5.2.9.5 1.3.9s.7.8.9 1.3c.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.1-.2 1.8-.4 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.1-.1-1.8-.2-2.2-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.1.2-1.8.4-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.7-.1m0-2.1c-3.2 0-3.6 0-4.8.1-1.2.1-2.1.3-2.8.5-.8.3-1.4.7-2.1 1.4-.7.7-1.1 1.3-1.4 2.1-.3.7-.5 1.6-.5 2.8-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.2.3 2.1.5 2.8.3.8.7 1.4 1.4 2.1.7.7 1.3 1.1 2.1 1.4.7.3 1.6.5 2.8.5 1.2.1 1.6.1 4.8.1 3.2 0 3.6 0 4.8-.1 1.2-.1 2.1-.3 2.8-.5.8-.3 1.4-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.7.5-1.6.5-2.8.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8-.3-2.1-.5-2.8c-.3-.8-.7-1.4-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.7-.3-1.6-.5-2.8-.5-1.2-.1-1.6-.1-4.8-.1z" />
                        <path d="m6 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 9.9c-2.2 0-3.9-1.7-3.9-3.9s1.7-3.9 3.9-3.9c2.2 0 3.9 1.7 3.9 3.9s-1.7 3.9-3.9 3.9" />
                        <circle cx="12.2" cy="19.8" r="1.4" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="social medium">
                  <a href="https://medium.com/@alextfortexas">
                    <svg style={{paddingLeft: 8}} width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff">
                        <path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <header className="mobile">
            <ul className="nav">
              <li>
                <Link to="/#about">About Alex</Link>
              </li>
              <li>
                <Link to={`/#involved`}>
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to={`/issues`}>
                  ISSUES
                </Link>
              </li>
            </ul>
          </header>
          <div style={{ zIndex: 50000 }} className="dn-l contribute-header">
            <a
              href={`https://secure.actblue.com/contribute/page/alexthomepage`}
              style={{ cursor: "pointer" }}
              className="bg-red pa3 db br0 w-100 v-mid w-100 tc white hover-white"
            >
              CONTRIBUTE
            </a>
          </div>
        </div>
        {this.props.children()}
      </div>
    );
  }
}
