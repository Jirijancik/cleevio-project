import * as React from 'react';

function SvgSpain(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 12c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87A9.978 9.978 0 0022 12c0-1.223-.22-2.395-.622-3.478L12 7.652l-9.378.87A9.979 9.979 0 002 12z"
        fill="#FFDA44"
      />
      <path
        d="M21.378 8.522a10.003 10.003 0 00-18.756 0h18.756zM2.622 15.478a10.004 10.004 0 0018.756 0H2.622z"
        fill="#D80027"
      />
    </svg>
  );
}

export default SvgSpain;
