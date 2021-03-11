/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import { StyledInput } from 'components/Input/components/StyledInput';
import { Input } from 'components/Input';
import './Style/DatePicker.css';

const momentDateFormat = 'MM/DD/YYYY';
class CustomCalendarComponent extends React.Component {
  render() {
    return (
      <Input
        onClick={this.props.onClick}
        value={this.props.ipDate}
        onChange={(e) => this.props.handleIpChange(e.target.value)}
        type="input"
        label={this.props.label}
        name={this.props.name}
      />
    );
  }
}
export class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dpDate: moment().toDate(),
      ipDate: moment().format(momentDateFormat),
    };
  }

  handleDPChange(val) {
    this.setState({ dpDate: val, ipDate: moment(val).format(momentDateFormat) });
  }

  handleIpChange(val) {
    const d = moment(val, momentDateFormat);
    if (d.isValid()) {
      this.setState({ dpDate: d.toDate() });
    }
    this.setState({ ipDate: val });
  }

  render() {
    return (
      <>
        <DatePicker
          selected={this.state.dpDate}
          onChange={(value) => this.handleDPChange(value)}
          customInput={(
            <CustomCalendarComponent
              ipDate={this.state.ipDate}
              handleIpChange={(val) => this.handleIpChange(val)}
              label={this.props.label}
              name={this.props.name}
            />
          )}
          dateFormat="MM/dd/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />

      </>
    );
  }
}

// import { Input } from 'components/Input';
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import PropTypes from 'prop-types';

// import 'react-datepicker/dist/react-datepicker.css';
// import './Style/DatePicker.css';

// export interface IDatePickerProps {
//   readonly placeholder?: string;
//   readonly isDisabled?: boolean;
//   readonly label?: string;
//   readonly name: string;
// }

// const propTypes = {
//   placeholder: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
// };

// export const CustomDatePicker: React.FC<IDatePickerProps> = (props) => {
//   const {
//     placeholder,
//     isDisabled,
//     label,
//     name,
//   } = props;

//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const CustomInput = ({ value, onClick }:any) => (
//     <Input
//       name={name}
//       value={value}
//       onClick={onClick}
//       placeholder={placeholder}
//       isDisabled={isDisabled}
//       label={label}
//     />
//   );
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date: Date) => setStartDate(date)}
//       customInput={<CustomInput value={startDate} />}
//     />
//   );
// };

// CustomDatePicker.displayName = 'DatePicker';
// CustomDatePicker.propTypes = propTypes;
