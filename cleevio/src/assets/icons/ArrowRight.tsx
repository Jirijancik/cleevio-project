import * as React from 'react';

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.682 7.356l3.2-3.199a.4.4 0 000-.568l-3.2-3.2a.4.4 0 10-.564.565l2.516 2.52H.4a.4.4 0 000 .799h10.234L8.118 6.789a.4.4 0 00.564.567z"
        fill="#76787B"
      />
    </svg>
  );
}

export default SvgArrowRight;
