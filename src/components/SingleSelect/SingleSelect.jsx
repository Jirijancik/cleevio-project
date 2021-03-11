/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useSelectState } from '@react-stately/select';
import React from 'react';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { useButton } from '@react-aria/button';
import { Icon } from 'components/Icon';
import { IconsName } from 'constants/index';
import { StyledButton } from './components/StyledButton';
import { ListBoxPopup } from './components/ListBoxPopup';

export function Select(props) {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = React.useRef();
  const {
    labelProps, triggerProps, valueProps, menuProps,
  } = useSelect(
    props,
    state,
    ref,
  );

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <StyledButton {...buttonProps}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : <span>{props.placeholder}</span>}
        </span>
        <Icon iconName={IconsName.ChevronDown} />
      </StyledButton>
      {state.isOpen && <ListBoxPopup {...menuProps} state={state} />}
    </div>
  );
}
