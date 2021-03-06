import * as React from 'react';

function SvgStar(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.8 15.465a.534.534 0 01-.255-.064l-4.543-2.522-4.542 2.516a.533.533 0 01-.789-.57l1.013-5.049L.16 6.246a.533.533 0 01.325-.911l5.022-.501L7.512.318a.533.533 0 01.976 0l2.004 4.516 5.028.5a.533.533 0 01.325.907l-3.53 3.53 1.019 5.054a.534.534 0 01-.533.64zm-4.798-3.732c.09 0 .178.025.256.069l3.791 2.1-.848-4.195a.534.534 0 01.144-.48l2.938-2.938-4.201-.42a.533.533 0 01-.432-.315L8.002 1.848l-1.647 3.7a.533.533 0 01-.432.315l-4.212.42L4.65 9.223a.533.533 0 01.144.48l-.842 4.206 3.79-2.1a.533.533 0 01.261-.075z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgStar;
