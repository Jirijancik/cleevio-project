import React from 'react';
import PropTypes from 'prop-types';
import { FlagsName, IconsAndFlagsMap, IconsName } from 'constants/index';

export interface IIconProps {
  readonly iconName?: IconsName | FlagsName;
  readonly size?: number;
}

const propTypes = {
  iconName: PropTypes.oneOf([...IconsAndFlagsMap.keys()]),
  size: PropTypes.number,
};

export const Icon: React.FC<IIconProps> = (props) => {
  const {
    iconName = FlagsName.Czechia,
    size,
  } = props;

  const SvgIcon = ((iconName && IconsAndFlagsMap.has(iconName))
    ? IconsAndFlagsMap.get(iconName) : <div>X</div>) as React.ElementType;

  return (
    <div style={{ fontSize: size, display: 'grid' }}>
      <SvgIcon />
    </div>
  );
};

Icon.displayName = 'Icon';
Icon.propTypes = propTypes;
