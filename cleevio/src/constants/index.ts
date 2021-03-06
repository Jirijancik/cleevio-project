import { FlagsMap, FlagsName } from './FlagsEnum';
import { IconsMap, IconsName } from './IconsEnum';

export {
  IconsMap, FlagsMap, FlagsName, IconsName,
};
export const IconsAndFlagsMap = new Map([...FlagsMap, ...IconsMap]);
