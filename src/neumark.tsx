import * as React from "react";
import { SVGProps } from "react";

const Neumark = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#B3BA00" />
      <g fill="#FFF">
        <path d="m13.13 10.664-.13.079L19 20v-9.265L16.004 9zM13 21.165 16.136 23 19 21.328 13 12zm-3-8.809v7.288L12 21V11zM20 21l2-1.387v-7.226L20 11z" />
        <path d="M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838z" />
      </g>
    </g>
  </svg>
);

export default Neumark;
