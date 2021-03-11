import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { FlagsName } from 'constants/FlagsEnum';
import { CardTrip } from './CardTrip';

export const cardTrip = () => {
  const returnCompany = text('Company', 'Artin');
  const returnCountry = text('Country', 'Germany');
  const returnAdress = text('Adress', 'Ojo street 25');
  const returnIconName = select('Icon Name', FlagsName, FlagsName.Czechia);
  return (
    <>
      <CardTrip
        company={returnCompany}
        country={returnCountry}
        adress={returnAdress}
        flagName={returnIconName}
      />
    </>
  );
};

export default {
  title: `Trip/${CardTrip.displayName}`,
  component: CardTrip,
};
