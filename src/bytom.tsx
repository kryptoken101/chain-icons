import * as React from "react";
import { SVGProps } from "react";

const Bytom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2500}
    height={2500}
    viewBox="0 0 2000 2000"
    {...props}
  >
    <path
      d="m692.58 308.22 544.22 544.22L775.16 0 389.19 389.42l303.39-81.2zm614.84 1383.56L763.2 1147.56 1224.84 2000l385.74-389.42-303.16 81.2m-999.2-384.36 348.94-739.74-534.1 534.33L0 1224.84l389.42 385.74-81.2-303.16m1383.79-615.07-544.45 544.45L2000 775.16l-389.42-385.97 81.43 303.16"
      opacity={0.8}
      fill="#040000"
    />
    <path
      d="m1432.09 656.93-534.1-533.87L775.16 0l461.64 852.44 195.29-195.51zm-864.18 685.91L1224.84 2000 763.2 1147.56l-195.29 195.28M852.44 763.2 657.16 567.68l-348.94 739.74L852.44 763.2m490.4 668.89L2000 775.16l-852.44 461.64 195.28 195.29"
      opacity={0.8}
      fill="#323333"
    />
    <path
      d="M164 163.77 0 775.16l333.99-179.41L164 163.77zm1672.23 1672.46L2000 1224.84l-333.98 179.19 170.21 432.2M164 1836l611.16 164-179.18-334.21L164 1836zM1836.23 163.77 1224.84 0l179.19 333.99 432.2-170.22z"
      opacity={0.8}
      fill="#555"
    />
    <path
      d="M389.19 389.42 775.16 0 164 163.77l169.99 431.98 55.2-206.33zm1221.39 1221.16L1224.84 2000l611.39-163.77-170.21-432.2-55.44 206.55m-1221.16 0L0 1224.84 164 1836l431.98-170.21-206.56-55.21zM1610.58 389.19 2000 775.16l-163.77-611.39-432.2 170.22 206.55 55.2"
      opacity={0.8}
      fill="#323333"
    />
    <path
      d="M333.99 595.75 0 775.16l77.52 77.28 256.47-256.69zm1332.03 808.28L2000 1224.84l-77.52-77.28-256.46 256.47M775.16 2000l77.28-77.52-256.46-256.69L775.16 2000M1224.84 0l-77.28 77.52 256.47 256.47L1224.84 0z"
      opacity={0.8}
      fill="#040000"
    />
  </svg>
);

export default Bytom;
