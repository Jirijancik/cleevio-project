import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button';
import { IconsName } from 'constants/index';
import { BaseTrip } from 'components/Trip/BaseTrip';
import { Icon } from 'components/Icon';
import { StyledCardWrapper } from './components/StyledCardWrapper';

export interface ICardTripProps {
   readonly country?: string;
   readonly flagName?: string;
   readonly adress?: string;
   readonly company?: string;
   readonly date?: Date;
}

const propTypes = {
  country: PropTypes.string,
  flagName: PropTypes.string,
  adress: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export const CardTrip: React.FC<ICardTripProps> = (props) => {
  const {
    country,
    company,
    flagName,
    adress,
    date = new Date().toDateString(),
  } = props;

  return (
    <BaseTrip render={() => (
      <StyledCardWrapper>
        <div style={{ display: 'flex' }}>
          <Icon iconName={flagName} size={24} />
          {country}
        </div>
        <div>
          <div>Company</div>
          <b>{company}</b>
          <br />
          {adress}
        </div>
        <div>
          <div>Date</div>
          {date}

        </div>
        <div style={{
          display: 'flex', gap: 22, flexFlow: 'column',
        }}
        >
          <Button onClick={() => console.log('ArrowLeft')} iconName={IconsName.ArrowRight} text="Edit trip" />
          <Button onClick={() => console.log('ArrowLeft')} iconName={IconsName.Edit} text="View Trip" />
        </div>
      </StyledCardWrapper>
    )}
    />
  );
};

CardTrip.displayName = 'CardTrip';
CardTrip.propTypes = propTypes;
