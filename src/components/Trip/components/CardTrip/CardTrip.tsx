import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'components/Button/components/IconButton/IconButton';
import { ButtonState } from 'components/Button/buttonStateEnum';
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
    date = new Date().toUTCString(),
  } = props;

  return (
    <BaseTrip render={() => (
      <StyledCardWrapper>
        <Icon iconName={flagName} size={50} />
        <div>
          <div>
            {country}
            {date}
          </div>
          <div>
            {company}
            {adress}
          </div>
        </div>
        <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: 20 }}>
          <IconButton onClick={() => console.log('ArrowLeft')} iconName={IconsName.ArrowLeft} />
          <IconButton onClick={() => console.log('ArrowLeft')} iconName={IconsName.Delete} state={ButtonState.Delete} />
        </div>
      </StyledCardWrapper>
    )}
    />
  );
};

CardTrip.displayName = 'CardTrip';
CardTrip.propTypes = propTypes;
