import { ButtonState } from '../buttonStateEnum';

export interface IRadioButtonIconColors {
  readonly backgroundColor: string;
  readonly hoverBackgroundColor: string;
}

const primaryCollorSchema: IRadioButtonIconColors = {
  backgroundColor: '#F8D964',
  hoverBackgroundColor: '#FEC527',
};

const defaultCollorSchema: IRadioButtonIconColors = {
  backgroundColor: '#F1F1F2',
  hoverBackgroundColor: '#F6F6F5',
};

const deleteCollorSchema: IRadioButtonIconColors = {
  backgroundColor: '#FBEBE9',
  hoverBackgroundColor: '#FBEBE9',
};

export const getButtonColor = (state: ButtonState) => {
  switch (state) {
    case ButtonState.Default:
      return defaultCollorSchema;
    case ButtonState.Primary:
      return primaryCollorSchema;
    case ButtonState.Delete:
      return deleteCollorSchema;
    default:
      throw new Error('There was problem with button state and its color.');
  }
};
