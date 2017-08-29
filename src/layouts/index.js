import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import $ from "jquery";
import { slide as Menu } from "react-burger-menu";

import "../css/theme.css";
import "tachyons";

const burgerMenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    right: "36px",
    top: "20px",
    cursor: "pointer"
  },
  bmBurgerBars: {
    cursor: "pointer",
    background: "#FFF"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#FFF"
  },
  bmMenu: {
    background: "#1b3c6c",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false
    };
  }

  onBurgerStateChange(state) {
    this.setState({ isOpen: state.isOpen });
  }

  closeBurger() {
    this.setState({ burgerOpen: false });
  }

  openBurger() {
    this.setState({ burgerOpen: true });
  }

  isBurgerOpen() {
    return this.state.burgerOpen;
  }

  componentDidMount() {
    $(window).scroll(function() {
      var scrollBanner = $("section.banner").height() + 40;
      console.log(scrollBanner);
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
              Texas's 7th Congressional District
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
                      <Link to="/news">News</Link>
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
                <li className="social">
                  <a
                    href="https://www.youtube.com/channel/UCOH_pjm7JutFDgbxQ801Wwg"
                    target="_blank"
                  >
                    <svg
                      height="40px"
                      version="1.1"
                      viewBox="0 0 60 60"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        id="black"
                        stroke="none"
                        stroke-width="1"
                      >
                        <g
                          id="slice"
                          transform="translate(-500.000000, -100.000000)"
                        />
                        <g
                          fill="#FFF"
                          id="youtube"
                          transform="translate(10.000000, 16.000000)"
                        >
                          <path
                            d="M38.7915918,6.76160896 C38.7915918,6.76160896 38.4166292,4.11897479 37.2666018,2.95488634 C35.8089347,1.42776592 34.1740125,1.42052232 33.4245134,1.33104261 C28.0582872,0.942871094 20.0085219,0.942871094 20.0085219,0.942871094 L19.9914781,0.942871094 C19.9914781,0.942871094 11.9421389,0.942871094 6.57548658,1.33104261 C5.82598746,1.42052232 4.19191748,1.42776592 2.73339817,2.95488634 C1.58337082,4.11897479 1.2092604,6.76160896 1.2092604,6.76160896 C1.2092604,6.76160896 0.825775918,9.86485061 0.825775918,12.9680923 L0.825775918,15.8778873 C0.825775918,18.9807028 1.2092604,22.0839445 1.2092604,22.0839445 C1.2092604,22.0839445 1.58337082,24.7265786 2.73339817,25.8906671 C4.19191748,27.4182136 6.10806161,27.3692128 6.96152762,27.5294241 C10.0298296,27.823855 20,27.9150391 20,27.9150391 C20,27.9150391 28.0582872,27.9026823 33.4245134,27.5149369 C34.1740125,27.4254572 35.8089347,27.4182136 37.2666018,25.8906671 C38.4166292,24.7265786 38.7915918,22.0839445 38.7915918,22.0839445 C38.7915918,22.0839445 39.1742241,18.9807028 39.1742241,15.8778873 L39.1742241,12.9680923 C39.1742241,9.86485061 38.7915918,6.76160896 38.7915918,6.76160896 Z M16.0411619,19.4029619 L16.0394575,8.6283262 L26.4012082,14.0341791 L16.0411619,19.4029619 Z"
                            id="Fill-195"
                          />
                        </g>
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
                <Link to="/#involved">Get Involved</Link>
              </li>
              <li>
                <a
                  href="https://secure.actblue.com/contribute/page/alexthomepage"
                  target="_blank"
                >
                  Contribute
                </a>
              </li>
            </ul>
            <Menu right styles={burgerMenuStyles} isOpen={this.isBurgerOpen()}>
              <Link className="pv3 white" onClick={this.closeBurger.bind(this)} to="/#about">
                ABOUT
              </Link>
              <Link className="pv3 white" onClick={this.closeBurger.bind(this)} to={`/issues`}>
                ISSUES
              </Link>
              <Link className="pv3 white" onClick={this.closeBurger.bind(this)} to={`/news`}>
                NEWS
              </Link>
              <a
                className="pv3 white"
                href="https://secure.actblue.com/contribute/page/alexthomepage"
                target="_blank"
              >
                CONTRIBUTE
              </a>
            </Menu>
          </header>
        </div>
        {this.props.children()}
      </div>
    );
  }
}
