import * as React from 'react';

function SvgLoading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.5 8A7.5 7.5 0 118 .5" stroke="#000" />
    </svg>
  );
}

export default SvgLoading;
