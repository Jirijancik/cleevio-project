import * as React from 'react';

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6.59a.401.401 0 00-.284.116L5.99 6.038.662.706a.4.4 0 00-.566.566l5.612 5.611a.4.4 0 00.566 0l5.611-5.611a.4.4 0 00-.284-.682z"
        fill="#76787B"
      />
    </svg>
  );
}

export default SvgChevronDown;
