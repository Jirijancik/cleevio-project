import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { StyledLink } from './components/StyledLink';
import { LinkState } from './linkStateEnum';
import { getButtonColor } from './utils/getButtonCollor';

export interface IButtonProps {
  readonly text: string;
  readonly linkPath: string;
  readonly state?: LinkState;
}

const propTypes = {
  text: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  state: PropTypes.oneOf(Object.values(LinkState)),
};

export const Link: React.FC<IButtonProps> = (props) => {
  const {
    text,
    linkPath,
    state = LinkState.Default,
  } = props;

  return (
    <ThemeProvider theme={() => getButtonColor(state)}>
      <StyledLink exact to={linkPath}>{text}</StyledLink>
    </ThemeProvider>
  );
};

Link.displayName = 'Link';
Link.propTypes = propTypes;
