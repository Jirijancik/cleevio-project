import * as React from 'react';

function SvgYourTrips(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.933A6.934 6.934 0 118 1.066a6.934 6.934 0 010 13.867zm2.512-8.912a.533.533 0 010 .752L8.379 8.907a.533.533 0 01-.752 0L3.893 5.173a.533.533 0 01.752-.752L8 7.781l1.755-1.754a.533.533 0 01.757-.006zM7.467 3.2v-.533a.533.533 0 111.066 0V3.2a.533.533 0 11-1.066 0zm1.066 9.6v.533a.534.534 0 01-1.066 0V12.8a.533.533 0 111.066 0zM13.867 8a.533.533 0 01-.534.533H12.8a.533.533 0 010-1.066h.533a.534.534 0 01.534.533zM3.733 8a.533.533 0 01-.533.533h-.533a.533.533 0 110-1.066H3.2A.533.533 0 013.733 8z"
        fill="#1C252B"
      />
    </svg>
  );
}

export default SvgYourTrips;
