/* eslint-disable react/prop-types */
import { Input } from 'components/Input';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './Style/DatePicker.css';

export interface IDatePickerProps {
  readonly placeholder?: string;
  readonly isDisabled?: boolean;
  readonly label?: string;
  readonly name: string;
}

// const propTypes = {
//   text: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
//   isDisabled: PropTypes.bool,
//   isLoading: PropTypes.bool,
//   children: PropTypes.node,
//   state: PropTypes.oneOf(Object.values(ButtonState)),
//   width: PropTypes.number,
//   iconName: PropTypes.string,
// };

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CustomDatePicker: React.FC<IDatePickerProps> = (props) => {
  const {
    placeholder,
    isDisabled,
    label,
    name,
  } = props;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const CustomInput = ({ value, onClick }: any, ref: any) => (
    <Input
      name={name}
      value={value}
      onClick={onClick}
      forwardRef={ref}
      placeholder={placeholder}
      isDisabled={isDisabled}
      label={label}
    />
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
};

CustomDatePicker.displayName = 'DatePicker';
