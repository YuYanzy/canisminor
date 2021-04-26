import styled, { css } from 'styled-components';
import { Style, View, Motion, Button } from '../../components';
import { Component } from 'react';
import { Link } from 'dva/router';

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const Download = styled(View)`
  padding: 0 4rem;
  margin-bottom: 6rem;
`;

const Inner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(Button)`
  margin: 0.5rem 1rem;
  @media ${Style.media('S')} {
    margin: 0.5rem 0;
    width: 100%;
    flex: 1;
  }
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

export default class extends Component {
  render() {
    return (
      <Motion mode="lazyScroll">
        <Download key="download" css={Inner}>
          <View.Row>
            <a
              href="https://oss.canisminor.cc/CanisMinor%27s%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Btn type="black">Download Resume</Btn>
            </a>
            <Link to="projects">
              <Btn>View My Works</Btn>
            </Link>
          </View.Row>
        </Download>
      </Motion>
    );
  }
}
