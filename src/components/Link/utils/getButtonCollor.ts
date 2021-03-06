import { LinkState } from '../linkStateEnum';

export interface IRadioButtonIconColors {
  readonly backgroundColor: string;
  readonly hoverBackgroundColor: string;
}

const primaryCollorSchema: IRadioButtonIconColors = {
  backgroundColor: '#F8D964',
  hoverBackgroundColor: '#FEC527',
};

const defaultCollorSchema: IRadioButtonIconColors = {
  backgroundColor: '#F9F9FA',
  hoverBackgroundColor: '#F6F6F5',
};

export const getButtonColor = (state: LinkState) => {
  switch (state) {
    case LinkState.Default:
      return defaultCollorSchema;
    case LinkState.Primary:
      return primaryCollorSchema;
    default:
      throw new Error('There was problem with button state and its color.');
  }
};
