import React from "react";
import Link from "gatsby-link";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

const IssueSection = ({ section }) => {
  return (
    <div className="policyDetail">
      <div className="policyLeft">
        {section.sectionTitle}
      </div>
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
            to={`/issues/${issue.link}`}
          >
            {issue.pageTitle}
          </Link>
        );
      })}
    </div>
  );
};

export default class Issue extends React.Component {
  render() {
    const issue = this.props.data.issue;
    const issues = this.props.data.issueInfo.issues;

    const nextIssue = getNextIssue(issues, issue);

    return (
      <div>
        <section className="policiesBlock">
          <div className="container">
            <p className="title">
              {issue.pageTitle}
            </p>
            {issue.section &&
              issue.section.map(s => <IssueSection section={s} />)}
          </div>
        </section>
        <section className="policyRouter">
          <div className="container">
            <div className="clickArrow">
              <Link className="db fl white hover-white fw2" to={`/issues`}>
                Back to Issues
              </Link>
              <Link className="db fr white hover-white fw2" to={`/issues/${nextIssue.link}`}>
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
    issue: contentfulIssue(id: { eq: $id }) {
      pageTitle
      section {
        sectionContent {
          sectionContent
        }
        sectionTitle
      }
    }
    issueInfo: contentfulIssueInfo {
      id
      issues {
        pageTitle
        link
      }
    }
  }
`;

function getIssueIndex(issues, issue) {
  var issueIndex;
  issues.forEach((i, idx) => {
    if (i.pageTitle === issue.pageTitle) {
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
