"use client";

import { ButtonProps } from "./buttonTypes";

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
