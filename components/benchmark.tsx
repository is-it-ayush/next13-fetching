"use client";

import React from "react";

export const Benchmark: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <script>
        {`
            const currentTime = new Date();
            const fullTime = currentTime - window.performance.timing.requestStart;
            console.log("Time until first request: " + fullTime + "ms");
            document.getElementById(\'givemetime\').innerHTML = fullTime;
            const times = JSON.parse(localStorage.getItem(\'${children}store\')) ?? [];
            times.push(fullTime);
            localStorage.setItem(\'${children}store\', JSON.stringify(times));
            console.table(times);
        `}
      </script>
      <h1 className="">
        The page loaded at: <h1 id="givemetime"></h1>
      </h1>
    </>
  );
};
