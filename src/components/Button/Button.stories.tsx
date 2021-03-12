/* eslint-disable no-console */
import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Button } from './Button';
import { ButtonState } from './buttonStateEnum';

export const button = () => {
  const returnSignleSelectCaption = text('Single Select Caption', 'Caption');
  const returnIsDisabled = boolean('Button is diasbled', false);
  const returnIsLoading = boolean('Button is loading', false);
  const returnButtonState = select('Button state', Object.values(ButtonState), ButtonState.Primary);
  return (
    <>
      <Button
        text={returnSignleSelectCaption}
        onClick={(e) => console.log('Button Was Clicked', e)}
        isDisabled={returnIsDisabled}
        isLoading={returnIsLoading}
        state={returnButtonState}
      />
    </>
  );
};

export default {
  title: `Button/${Button.displayName}`,
  component: Button,
};
