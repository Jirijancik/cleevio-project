import * as React from 'react';

function SvgAustria(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21.378 15.478A9.978 9.978 0 0022 12c0-1.223-.22-2.395-.622-3.478L12 7.652l-9.378.87A9.979 9.979 0 002 12c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87z"
        fill="#fff"
      />
      <path
        d="M12 22c4.3 0 7.965-2.714 9.378-6.522H2.622A10.004 10.004 0 0012 22zM12 2C7.7 2 4.035 4.714 2.622 8.522h18.756A10.004 10.004 0 0012 2z"
        fill="#D80027"
      />
    </svg>
  );
}

export default SvgAustria;
