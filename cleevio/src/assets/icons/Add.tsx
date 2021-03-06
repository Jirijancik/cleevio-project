import * as React from 'react';

function SvgAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.467 7.467H8.533V.533a.533.533 0 10-1.066 0v6.934H.533a.533.533 0 100 1.066h6.934v6.934a.533.533 0 001.066 0V8.533h6.934a.534.534 0 000-1.066z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAdd;
