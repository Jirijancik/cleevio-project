/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable max-len */
import React from 'react';
import FlagsMap, { FlagsName } from './FlagsEnum';
import IconsMap, { IconsName } from './IconsEnum';

declare namespace JSX {
  interface Element {
  }
}

export const IconsAndFlagsMap = new Map<IconsName | FlagsName, (props: React.SVGProps<SVGSVGElement>) => JSX.Element>([...FlagsMap, ...IconsMap]);
export {
  IconsMap, FlagsMap, FlagsName, IconsName,
};
