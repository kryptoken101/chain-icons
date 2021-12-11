import * as React from "react";
import { SVGProps } from "react";

const Maker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={300}
        y1={602}
        x2={300}
        y2={2}
        gradientTransform="matrix(1 0 0 -1 0 602)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4fa89b" />
        <stop offset={1} stopColor="#6acebb" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <circle
          cx={300}
          cy={300}
          r={300}
          style={{
            fill: "url(#a)",
          }}
        />
        <path
          d="M152.34 390V248.8l107.08 80.59V390h27.33v-66.3a15.94 15.94 0 0 0-6.35-12.7l-129.86-97.77A16 16 0 0 0 125 226v164Zm296.14 0V248.8L341.4 329.39V390h-27.33v-66.3a15.94 15.94 0 0 1 6.35-12.7l129.86-97.73A16 16 0 0 1 475.82 226v164Z"
          style={{
            fill: "#fff",
          }}
        />
      </g>
    </g>
  </svg>
);

export default Maker;
