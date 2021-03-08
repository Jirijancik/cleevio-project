import React from 'react';
import PropTypes from 'prop-types';
import { IconsAndFlagsMap } from 'constants/index';

export interface IIconProps {
  readonly iconName?: string;
  readonly size?: number;
}

const propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.number,
};

export const Icon: React.FC<IIconProps> = (props) => {
  const {
    iconName,
    size,
  } = props;

  console.log();

  const SvgIcon = IconsAndFlagsMap.has(iconName) ? IconsAndFlagsMap.get(iconName) : <div>Neni</div>;

  // eslint-disable-next-line quotes

  return (
    <>
      <div style={{ fontSize: size }}>

        <SvgIcon />
      </div>
    </>
  );
};

Icon.displayName = 'Icon';
Icon.propTypes = propTypes;

//
