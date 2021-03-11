import React from 'react';
// import { text, select, boolean } from '@storybook/addon-knobs';
import { text, select } from '@storybook/addon-knobs';
import { FlagsName } from 'constants/FlagsEnum';
import { RowTrip } from './RowTrip';

export const rowTrip = () => {
  const returnCompany = text('Company', 'Artin');
  const returnCountry = text('Country', 'Germany');
  const returnAdress = text('Adress', 'Ojo street 25');
  const returnIconName = select('Icon Name', FlagsName, FlagsName.Czechia);
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
  title: `Trip/${RowTrip.displayName}`,
  component: RowTrip,
};
