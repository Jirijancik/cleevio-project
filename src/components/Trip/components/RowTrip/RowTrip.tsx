/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { FlagsName, IconsName } from 'constants/index';
import { IconButton } from 'components/Button/components/IconButton/IconButton';
import { Icon } from 'components/Icon';
import { ButtonState } from 'components/Button/buttonStateEnum';
import { Stack } from 'layouts/wrappers/Stack';
import { BaseTrip } from '../../BaseTrip';
import { StyledRowWrapper } from './components/StyledRowWrapper';
import { StyledInnerHeader } from './components/StyledInnerHeader';
import { StyledRowTripItem } from './components/StyledRowTripItem';

export interface IRowTripProps {
   readonly country?: string;
   readonly flagName?: FlagsName;
   readonly adress?: string;
   readonly company?: string;
   readonly date?: Date;
}

const propTypes = {
  country: PropTypes.string,
  flagName: PropTypes.oneOf(Object.values(FlagsName)),
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
        <div style={{ display: 'flex' }}>
          <div>
            <StyledInnerHeader>{country}</StyledInnerHeader>
            <StyledRowTripItem>{company}</StyledRowTripItem>
          </div>
          <Stack>
            <div style={{ marginTop: 4 }}>{date}</div>
            <div>{adress}</div>
          </Stack>
        </div>
        <div style={{
          display: 'grid', gridAutoFlow: 'column', gridGap: 20, marginLeft: 'auto',
        }}
        >
          <IconButton isDisabled onClick={() => console.log('ArrowLeft')} iconName={IconsName.Delete} state={ButtonState.Delete} />
          <IconButton isDisabled onClick={() => console.log('ArrowLeft')} iconName={IconsName.ArrowLeft} />
        </div>
      </StyledRowWrapper>
    )}
    />
  );
};

RowTrip.displayName = 'RowTrip';
RowTrip.propTypes = propTypes;
