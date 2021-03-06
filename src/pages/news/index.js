import React from "react";
import Link from "gatsby-link";
import $ from "jquery";
import moment from 'moment';


const Loading = ({}) => {
  return <div>loading</div>;
};

const Post = ({ data: { title, description, pubDate, link }, feed }) => {

  const postLink = link;

  const style = {
    boxShadow: "0 1px 4px rgba(0,0,0,.04)"
  };
  return (
    <div style={style} className="pa4 mv3 bg-white br5 ba b--light-gray">
      <div className="cf">
        <div className="fl">
          <a href={postLink} className="dib" target="_blank">
            <img
              className="pointer"
              style={{ borderRadius: "100%", height: 36, width: 36 }}
              src={feed.image}
            />
          </a>
        </div>
        <div className="fl pl2">
          <div>
            <a href={postLink} style={{color: '#00ab6b'}} className="pointer fw1 dim" target="_blank">Alex Triantaphyllis</a>
          </div>
          <div>
           {moment(pubDate).format('MMM DD')}
          </div>
        </div>
      </div>
      <a href={postLink} className="pointer" target="_blank"><h3 className="b f4 mt2 near-black">{title}</h3></a>
      <div className="medium-post-content" style={{overflow:"hidden"}} dangerouslySetInnerHTML={{__html: description}}>
      </div>
    </div>
  );
};

const Content = ({ children }) => {
  return (
    <div className="center mw7">
      {children}
    </div>
  );
};

export default class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      feed: null,
      posts: []
    };
  }
  componentDidMount() {
    const that = this;
    $.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40alextfortexas",
      res => {
        console.log(res);
        this.setState({
          feed: res.feed,
          posts: res.items,
          loading: false
        });
      }
    );
  }
  render() {
    return (
      <div>
        <div
          style={{
            fontFamily: '"clarendon-text-pro", serif',
            fontSize: "35px"
          }}
          className="bg-alext-blue tc white pa3 i fw5"
        >
          News
        </div>
        <div className="bg-near-white pt4 pb4">
          <Content>
            {this.state.loading
              ? <Loading />
              : this.state.posts.map(p =>
                  <Post data={p} feed={this.state.feed} />
                )}
          </Content>
        </div>
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
