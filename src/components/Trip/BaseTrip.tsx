import React from 'react';
import { Paper } from '../Paper';

export const BaseTrip = ({ render }: {render: () => any}) => (
  <Paper>
    {render()}
  </Paper>
);

BaseTrip.displayName = 'BaseTrip';
