import { LinkState } from '../linkStateEnum';

export interface ILinkColors {
  readonly color: string;
}

const disabledCollorSchema: ILinkColors = {
  color: '#97999B',
};

const defaultCollorSchema: ILinkColors = {
  color: '#1C252B',
};

export const getLinkCollor = (state: LinkState) => {
  switch (state) {
    case LinkState.Default:
      return defaultCollorSchema;
    case LinkState.Disabled:
      return disabledCollorSchema;
    default:
      throw new Error('There was problem with button state and its color.');
  }
};
