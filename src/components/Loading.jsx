import React from "react";
import Logo from "../assets/logo.svg";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <img src={Logo} alt="" className="h-[140px] w-[140px]" />
        <div class="loader"></div>
        <style jsx>{`
          .loader {
            width: 90px;
            aspect-ratio: 1;
            --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
            background: var(--_c) top, var(--_c) left, var(--_c) right,
              var(--_c) bottom;
            background-size: 22px 22px;
            animation: l7 1s infinite;
          }
          @keyframes l7 {
            to {
              transform: rotate(0.5turn);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;
