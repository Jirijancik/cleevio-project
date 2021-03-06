import React from 'react';
// import { text, select, boolean } from '@storybook/addon-knobs';
import { text, select } from '@storybook/addon-knobs';
import { RowTrip } from './RowTrip';
import { FlagsName } from '../../../../constants/FlagsEnum';

export const rowTrip = () => {
  const returnCompany = text('Company', 'Artin');
  const returnCountry = text('Country', 'Germany');
  const returnAdress = text('Adress', 'Ojo street 25');
  const returnIconName = select('Icon Name', FlagsName, FlagsName.Czechia);
  // const returnIsLoading = boolean('Button is loading', false);
  // const returnButtonState = select('Button state',
  // Object.values(ButtonState), ButtonState.Primary);
  console.log('koko');
  return (
    <>
      <RowTrip
        company={returnCompany}
        country={returnCountry}
        adress={returnAdress}
        flagName={returnIconName}
      />
    </>
  );
};

export default {
  title: 'Trip/RowTrip',
  component: RowTrip,
};
