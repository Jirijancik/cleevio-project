import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StyledLink } from './components/StyledLink';
import { LinkState } from './linkStateEnum';
import { getLinkCollor } from './utils/getLinkCollor';

export interface ILinkProps {
  readonly linkPath: string;
  readonly state?: LinkState;
  readonly text: string;
}

const propTypes = {
  linkPath: PropTypes.string.isRequired,
  state: PropTypes.oneOf(Object.values(LinkState)),
  text: PropTypes.string.isRequired,
};

export const Link: React.FC<ILinkProps> = (props) => {
  const {
    linkPath,
    state = LinkState.Default,
    text,
  } = props;

  return (
    <ThemeProvider theme={() => getLinkCollor(state)}>
      <StyledLink disabled={state === LinkState.Disabled} exact to={linkPath}>{text}</StyledLink>
    </ThemeProvider>
  );
};

Link.displayName = 'Link';
Link.propTypes = propTypes;
