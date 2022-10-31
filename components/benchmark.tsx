"use client";

import React from "react";

const getLastTime = (key: string) => {
  if (typeof window === "undefined") return -1;
  const store = JSON.parse(localStorage?.getItem(`${key}store`) ?? "[]");
  const lastel = store[store.length - 1];
  return lastel;
};

export const Benchmark: React.FC<{ children: string }> = ({ children }) => {
  const lastTime = getLastTime(children);
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          placeItems: "center",
          columnGap: "10px",
        }}
      >
        Request To Render Time:{" "}
        <h4 id="givemetime">{lastTime ?? "dont know!"}</h4> ms
      </div>
      <script>
        {`
                const currentTime = new Date(); // round trip time
                const fullTime = currentTime - window.performance.timing.requestStart;
                console.log(\`It took ${children}\`, fullTime);
                document.getElementById(\`givemetime\`).innerHTML = fullTime;
                const times = JSON.parse(localStorage.getItem(\`${children}store\`)) ?? [];
                times.push(fullTime);
                localStorage.setItem(\`${children}store\`, JSON.stringify(times));
                console.table(times);
        `}
      </script>
    </div>
  );
};
