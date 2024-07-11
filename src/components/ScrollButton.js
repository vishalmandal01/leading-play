import React, { useEffect, useRef, useState } from 'react'

export default function ScrollButton({ children }) {
    const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const isAtLeftEnd = container.scrollLeft === 0;
      const isAtRightEnd =
        container.scrollLeft + container.clientWidth === container.scrollWidth;

      setShowLeftButton(!isAtLeftEnd);
      setShowRightButton(!isAtRightEnd);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollByOneItem = (direction) => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.firstElementChild.clientWidth;
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
      containerRef.current.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="relative flex">
    <div className="absolute h-full flex left-0 mx-3 items-center z-10">
      {showLeftButton && (
        <button
          id="slideLeft"
          onClick={() => scrollByOneItem("left")}
          className="bg-indigo-700/50 hover:bg-indigo-700/90 h-[50px] w-[50px] sm:flex hidden items-center justify-center rounded-full"
        >
          {"<"}
        </button>
      )}
    </div>
    <div
      className="flex mt-2 overflow-auto scrollbar scroll-bar-hide"
      ref={containerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      {children}
    </div>
    <div className="absolute h-full flex right-0 z-10 mx-3 items-center">
      {showRightButton && (
        <button
          id="slideRight"
          type='button'
          onClick={() => scrollByOneItem("right")}
          className="bg-indigo-700/50 hover:bg-indigo-700/90   h-[50px] w-[50px] sm:flex hidden items-center justify-center rounded-full "
        >
          {">"}
        </button>
      )}
    </div>
  </div>
  )
}
