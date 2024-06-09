import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CheckboxIcon = (props) => {
  const id = useMemo(() => uuidv4(), []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <g clipPath={`url(#clip${id})`}>
        <path
          d="M3.82918 8.73562C3.73372 8.83164 3.60349 8.88521 3.46821 8.88521C3.33292 8.88521 3.20269 8.83164 3.10723 8.73562L0.224383 5.85231C-0.0747942 5.55313 -0.0747942 5.068 0.224383 4.76938L0.585358 4.40831C0.884628 4.10914 1.3692 4.10914 1.66838 4.40831L3.46821 6.20823L8.3316 1.34474C8.63087 1.04557 9.11591 1.04557 9.41462 1.34474L9.7756 1.70581C10.0748 2.00499 10.0748 2.49003 9.7756 2.78874L3.82918 8.73562Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`clip${id}`}>
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
