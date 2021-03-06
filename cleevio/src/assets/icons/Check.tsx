import * as React from 'react';

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.753 1.22c.279-.278.348-.695.07-.973-.278-.279-.695-.348-.974-.07L4.21 9.426 1.22 5.81C.942 5.53.525 5.462.247 5.74c-.279.278-.348.695-.07.974l3.477 4.172a.79.79 0 00.556.208c.14 0 .348-.07.487-.139L15.753 1.22z"
        fill="#1C252B"
      />
    </svg>
  );
}

export default SvgCheck;
