import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button';
import { FlagsName, IconsName } from 'constants/index';
import { BaseTrip } from 'components/Trip/BaseTrip';
import { Icon } from 'components/Icon';
import { Stack } from 'layouts/wrappers/Stack';
import { StyledCardWrapper } from './components/StyledCardWrapper';
import { StyledInnerHeader } from './components/StyledInnerHeader';
import { StyledCountryHeader } from '../StyledCountryHeader';

export interface ICardTripProps {
  readonly adress?: string;
  readonly company?: string;
  readonly country?: string;
  readonly date?: Date;
  readonly flagName?: FlagsName;
}

const propTypes = {
  adress: PropTypes.string,
  company: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  flagName: PropTypes.oneOf(Object.values(FlagsName)),
};

export const CardTrip: React.FC<ICardTripProps> = (props) => {
  const {
    adress,
    company,
    country,
    date = new Date().toDateString(),
    flagName,
  } = props;

  return (
    <BaseTrip render={() => (
      <StyledCardWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon iconName={flagName} size={24} />
          <StyledCountryHeader>{country}</StyledCountryHeader>
        </div>
        <Stack spacing={0}>
          <StyledInnerHeader>Company</StyledInnerHeader>
          <b>{company}</b>
          {adress}
        </Stack>
        <div>
          <StyledInnerHeader>Date</StyledInnerHeader>
          {date}
        </div>
        <Stack spacing={22}>
          <Button isDisabled onClick={() => null} iconName={IconsName.Edit} text="Edit Trip" />
          <Button isDisabled onClick={() => null} iconName={IconsName.ArrowRight} text="View trip" />
        </Stack>
      </StyledCardWrapper>
    )}
    />
  );
};

CardTrip.displayName = 'CardTrip';
CardTrip.propTypes = propTypes;
