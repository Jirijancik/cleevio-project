/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { useFocus } from '@react-aria/interactions';

export function Option({ item, state }) {
  // Get props for the option element
  const ref = React.useRef();
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref,
  );

  // Handle focus events so we can apply highlighted
  // style to the focused option
  const [isFocused, setFocused] = React.useState(false);
  const { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected
          ? 'blueviolet'
          : isFocused
            ? 'gray'
            : 'transparent',
        color: isSelected || isFocused ? 'white' : 'black',
        padding: '12px 20px',
        outline: 'none',
        cursor: 'pointer',

      }}
    >
      {item.rendered}
    </li>
  );
}
