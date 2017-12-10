import React from "react";
import Link from "gatsby-link";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

const PolicyHeader = ({ children, main, overview, detail }) => {
  const classes = `
    f3
    tc
    i
    pa3
  `;
  const styles = {
    color: "#0A246A"
  };
  if (main)
    return (
      <h1 style={styles} className={classes}>
        {children}
      </h1>
    );
  if (overview)
    return (
      <h2 style={styles} className={classes}>
        {children}
      </h2>
    );
  if (detail)
    return (
      <h3 style={styles} className={classes}>
        {children}
      </h3>
    );
};

const IssueOverview = ({ section }) => {
  return (
    <div className={`policyMain`}>
      <PolicyHeader overview>{section.sectionTitle}</PolicyHeader>
      <div
        dangerouslySetInnerHTML={{
          __html: section.sectionContent.sectionContent
        }}
      />
    </div>
  );
};

const IssueSection = ({ section }) => {
  return (
    <div className={`policyDetail`}>
      <div className={`policyLeft`}>{section.sectionTitle}</div>
      <div
        className="policyRight"
        dangerouslySetInnerHTML={{
          __html: section.sectionContent.sectionContent
        }}
      />
    </div>
  );
};

const IssueButtons = ({ issues }) => {
  return (
    <div className="buttons">
      {issues.map((issue, idx) => {
        return (
          <Link
            className="link hover-white hover-issue-red br1 ba dib issue-button-blue white sans-serif fw4 pa2 ma2 b--transparent"
            activeClassName="issue-button-red"
            to={`/issues/${issue.node.frontmatter.path}`}
          >
            {issue.node.frontmatter.buttonTitle || issue.node.frontmatter.title}
          </Link>
        );
      })}
    </div>
  );
};

export default class Issue extends React.Component {
  render() {
    console.log(this.props.data);
    const issue = this.props.data.issue;
    const issues = this.props.data.allIssues.edges;

    const nextIssue = getNextIssue(issues, issue);

    return (
      <div>
        <section className="policiesBlock">
          <div className="container">
            <p className="title">{issue.frontmatter.title}</p>
            <div
              className="issue-markdown"
              dangerouslySetInnerHTML={{ __html: issue.html }}
            />
          </div>
        </section>
        <section className="policyRouter">
          <div className="container">
            <div className="clickArrow">
              <Link className="db fl white hover-white fw2" to={`/issues`}>
                Back to Issues
              </Link>
              <Link
                className="db fr white hover-white fw2"
                to={`/issues/${nextIssue.node.frontmatter.path}`}
              >
                Go to Next Policy
              </Link>
            </div>
            <IssueButtons issues={issues} />
          </div>
        </section>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query issuePageQuery($id: String!) {
    allIssues: allMarkdownRemark(
      sort: { fields: [frontmatter___order] }
      filter: { frontmatter: { type: { eq: "issue" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            buttonTitle
            title
            path
          }
        }
      }
    }
    issue: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      html
    }
  }
`;

function getIssueIndex(issues, issue) {
  var issueIndex;
  issues.forEach((i, idx) => {
    if (i.node.frontmatter.title === issue.frontmatter.title) {
      issueIndex = idx;
    }
  });

  return issueIndex;
}

function getNextIssue(issues, issue) {
  var idx = getIssueIndex(issues, issue);
  if (idx >= issues.length - 1) {
    return issues[0];
  } else {
    return issues[idx + 1];
  }
}
