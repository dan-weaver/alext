import React from "react";
import Link from "gatsby-link";

const IssueCard = ({ issue }) => {
  const type = issue.cardType || "normal";

  const classMap = {
    normal: "w-third-l",
    horizontal: "w-two-thirds-l"
  };

  return (
    <div
      style={{ height: 200 }}
      className={`
        relative fl pa2 w-50-l w-100-m ${classMap[type]} gray
        issue-card
      `}
      onclick="location.href='Issues/economy.html'"
    >
      <div
        className={`bg-light-gray hover-bg-alext-blue pa3 br2 h-100 issue-card-content`}
      >
        <Link
          className="absolute top-0 right-0 left-0 bottom-0"
          to={`/issues/${issue.link}`}
        />
        <h2 className="b">
          {issue.cardTitle}
        </h2>
        <br />
        <br />
        <p>{issue.cardContent}</p>
        <div>
          READ MORE
        </div>
      </div>
    </div>
  );
};

export default class Issues extends React.Component {
  render() {
    const issues = this.props.data.issueInfo.issues;
    return (
      <div>
        <section className="policies">
          <div className="container">
            <p className="title">Issues</p>
            <p style={{ textAlign: "center", fontWeight: 300 }}>
              Click on a policy area to learn more
            </p>

            <br />
            <br />
            <p style={{ fontWeight: 300 }}>
              {this.props.data.issueInfo.mainContent.mainContent}
            </p>
          </div>
        </section>
        <section className="policiesBlock">
          <div className="mw8 center cf">
            {issues.map(issue => <IssueCard issue={issue} />)}
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="image" />
            <div className="box">
              <span>PAID FOR BY ALEX T FOR CONGRESS</span>
            </div>
            <div>
              <p>PO Box 25345, Houston, TX 77265</p>
              <p>
                <a href="tel:8327791878">832.779.1878</a> <span>|</span>{" "}
                <a href="mailto:info@alextfortexas.com">
                  info@alextfortexas.com
                </a>
              </p>
              <p>
                <a href="http://mouthwateringmedia.com/" target="_blank">
                  Website Design by Mouth Watering Media
                </a>
              </p>
            </div>
          </div>
          <ul className="nav">
            <li>
              <a
                href="https://secure.actblue.com/contribute/page/alexthomepage"
                className="btn btn-red"
                target="_blank"
              >
                Contribute
              </a>
            </li>
            <li>
              <ul>
                <li className="social twitter">
                  <a href="https://twitter.com/AlexTforTexas" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="-9 11 30 30"
                      enable-background="new -9 11 30 30"
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
                      enable-background="new -9 11 30 30"
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
                      enable-background="new -9 11 30 30"
                    >
                      <g fill="#fff">
                        <path d="m6 16.4c3.1 0 3.5 0 4.7.1 1.1.1 1.8.2 2.2.4.5.2.9.5 1.3.9s.7.8.9 1.3c.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.1-.2 1.8-.4 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.1-.1-1.8-.2-2.2-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.1.2-1.8.4-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.7-.1m0-2.1c-3.2 0-3.6 0-4.8.1-1.2.1-2.1.3-2.8.5-.8.3-1.4.7-2.1 1.4-.7.7-1.1 1.3-1.4 2.1-.3.7-.5 1.6-.5 2.8-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.2.3 2.1.5 2.8.3.8.7 1.4 1.4 2.1.7.7 1.3 1.1 2.1 1.4.7.3 1.6.5 2.8.5 1.2.1 1.6.1 4.8.1 3.2 0 3.6 0 4.8-.1 1.2-.1 2.1-.3 2.8-.5.8-.3 1.4-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.7.5-1.6.5-2.8.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8-.3-2.1-.5-2.8c-.3-.8-.7-1.4-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.7-.3-1.6-.5-2.8-.5-1.2-.1-1.6-.1-4.8-.1z" />
                        <path d="m6 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 9.9c-2.2 0-3.9-1.7-3.9-3.9s1.7-3.9 3.9-3.9c2.2 0 3.9 1.7 3.9 3.9s-1.7 3.9-3.9 3.9" />
                        <circle cx="12.2" cy="19.8" r="1.4" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IssuesQuery {
    issueInfo: contentfulIssueInfo {
      id
      mainContent { mainContent }
      issues {
        pageTitle
        cardContent
        buttonTitle
        cardTitle
        cardType
        link
      }
    }
  }
`;
