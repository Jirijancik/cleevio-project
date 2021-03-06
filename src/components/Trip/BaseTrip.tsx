import React from 'react';
import { Paper } from '../Paper';

// const propTypes = {
//   country: PropTypes.string,
//   adress: PropTypes.string,
//   company: PropTypes.string,
//   date: PropTypes.instanceOf(Date),
//   // onClick: PropTypes.func.isRequired,
//   // isDisabled: PropTypes.bool,
//   // isLoading: PropTypes.bool,
//   // state: PropTypes.oneOf(Object.values(ButtonState)),
// };

export const BaseTrip = ({ render }: {render: () => any}) => {
  console.log('xx');

  return (
    <Paper>
      {render()}
    </Paper>
  );
};

BaseTrip.displayName = 'BaseTrip';
