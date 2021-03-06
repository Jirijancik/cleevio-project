import * as React from 'react';

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.318.366l-3.2 3.2a.4.4 0 000 .567l3.2 3.2a.4.4 0 10.564-.564l-2.516-2.52H11.6a.4.4 0 000-.8H1.366L3.882.935a.4.4 0 10-.564-.568z"
        fill="#76787B"
      />
    </svg>
  );
}

export default SvgArrowLeft;
