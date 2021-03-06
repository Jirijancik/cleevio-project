import * as React from 'react';

function SvgChina(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#F1F1F2"
      />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="#D80027"
      />
      <path
        d="M7.473 8.086l.863 2.656h2.793L8.87 12.387l.863 2.656-2.261-1.64-2.262 1.64.867-2.656-2.262-1.645H6.61l.864-2.656zM13.855 17.488l-.66-.812-.976.379.566-.88-.66-.816 1.012.27.57-.879.055 1.047 1.015.27-.98.374.058 1.047zM15.168 15.105l.313-1-.856-.605 1.047-.016.308-1 .34.993 1.047-.012-.84.625.336.992-.855-.605-.84.628zM16.938 9.34l-.461.941.75.73-1.036-.148-.46.938-.18-1.031-1.04-.149.93-.488-.18-1.035.75.73.927-.488zM13.883 6.488l-.078 1.043.972.395-1.02.25-.073 1.047-.551-.891-1.02.25.676-.8-.555-.887.973.394.676-.8z"
        fill="#FFDA44"
      />
    </svg>
  );
}

export default SvgChina;
