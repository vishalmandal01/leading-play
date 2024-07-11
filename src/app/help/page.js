import React from "react";

export default function page() {
  return (
    <div>
      {[...Array(100)].map((test, i) => {
        return (
          <p key={i} className="my-1 text-indigo-500">
            {i} : Help page
          </p>
        );
      })}
    </div>
  );
}
