'use client';

import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("An error occurred in the ErrorComponent");
  }, []);

  return (
    <div className="text-white mt-20">
      <h2>Error</h2>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}