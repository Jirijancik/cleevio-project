import * as React from 'react';

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14.163a.558.558 0 00-.79 0L.163 8.35A.558.558 0 000 8.744v2.977c0 .309.25.558.558.558h2.977c.148 0 .29-.059.395-.163l8.186-8.186a.558.558 0 000-.79L9.139.163zm-8.024 11V8.976l7.628-7.629 2.188 2.188-7.628 7.628H1.116zm12.838 3.72H.558a.558.558 0 100 1.117h13.396a.558.558 0 100-1.116z"
        fill="#76787B"
      />
    </svg>
  );
}

export default SvgEdit;
