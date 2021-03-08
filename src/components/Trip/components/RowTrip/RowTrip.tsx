import React from 'react';
import PropTypes from 'prop-types';
import { StyledRowWrapper } from './components/StyledRowWrapper';
import { BaseTrip } from '../../BaseTrip';
import { IconButton } from '../../../Button/components/IconButton/IconButton';
import { IconsName } from '../../../../constants';
import { Icon } from '../../../Icon';
import { ButtonState } from '../../../Button/buttonStateEnum';

export interface IRowTripProps {
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

export const RowTrip: React.FC<IRowTripProps> = (props) => {
  const {
    country,
    company,
    flagName,
    adress,
    date = new Date().toDateString(),
  } = props;

  return (
    <BaseTrip render={() => (
      <StyledRowWrapper>
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
      </StyledRowWrapper>
    )}
    />
  );
};

RowTrip.displayName = 'RowTrip';
RowTrip.propTypes = propTypes;
