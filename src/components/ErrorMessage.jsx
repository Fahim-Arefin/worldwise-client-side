import React from "react";

function ErrorMessage({ message, className }) {
  return (
    <div
      className={`bg-[#42484d] px-10 py-8 space-y-6 w-full rounded-lg border-x-4 font-semibold  border-[#00c46a] ${className}`}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;
