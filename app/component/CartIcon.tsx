import { SVGProps } from "react";

export function PhShoppingCartSimpleFill(props: SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
        {...props}
      >
        <path
          fill="#000"
          d="m239.71 74.14l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M88 200a16 16 0 1 0 16 16a16 16 0 0 0-16-16m104 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
        ></path>
      </svg>
      <div className="absolute -right-1 bottom-0 text-sm w-5 h-5 rounded-full bg-red-600 text-center text-white">
        0
      </div>
    </div>
  );
}
