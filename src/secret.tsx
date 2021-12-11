import * as React from "react";
import { SVGProps } from "react";

const Secret = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122 122"
    style={{
      enableBackground: "new 0 0 122 122",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={61}
      cy={61}
      r={59}
      style={{
        fill: "#1b1b1b",
        stroke: "#fff",
        strokeWidth: 4,
      }}
    />
    <path
      d="M78.3 43.7c.8.8 2.1.7 2.7-.2.6-.7.5-1.8-.2-2.4-6.6-6.3-12.5-9.5-22.3-9-10.3.5-19.4 5.9-18.8 17.3.5 10.1 10.3 13.8 18.9 17.1 6.6 2.5 12.4 4.7 12.7 9.4.3 5.2-5 8.3-9.6 8.6-8.7.5-13.8-2.6-19.5-8.1-.7-.7-1.8-.7-2.5-.1-.8.7-.8 1.9-.1 2.7 6.4 6.4 13 9.6 22.6 9.1 9.6-.7 21.4-6.1 20.8-17.5-.5-9.9-9.9-13.6-18.4-16.8-7-2.7-13.5-5.2-13.8-10.9-.2-4.1 4.7-7.1 8.2-7.3 8.5-.4 13.8 2.6 19.3 8.1zm1.1 27.1c0 4.4-2.4 8.2-6 10.4l-.2-.1c1.3-1.8 1.5-4.1 1.5-6.3 0-6.5-7.1-9-14.6-11.7-8.3-3-17-6.1-17-14.9 0-4 1.8-8.3 5.3-10.3l.1.2c-.9 1.9-1.3 4-1.3 6.1 0 7.2 7.9 10.1 15.9 13.1 8.2 3 16.3 6 16.3 13.5z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
    <path
      d="M60.5 108c26.2 0 47.5-21.3 47.5-47.5S86.7 13 60.5 13 13 34.3 13 60.5 34.3 108 60.5 108z"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
      }}
    />
  </svg>
);

export default Secret;
