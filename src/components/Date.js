import React, { useState, useRef, useEffect } from 'react';

const TimeInput = () => {
  const [time, setTime] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,

  });

  return (
    <div style={{display: "flex"}} className='bg-contrastOffWhite'>
      <TimeInputUnit
        value={time.day}
        setValue={(day) => setTime({ ...time, day })}
        maxValue={31}
      />
      <TimeInputUnit
        value={time.month}
        setValue={(months) => setTime({ ...time, months })}
        maxValue={12}
      />
    </div>
  );
};

const TimeInputUnit = ({ value, setValue, maxValue }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemHeight = 50; // assuming all items have the same height
      const threshold = 3; // number of items to show on top and bottom

      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (entry.target === container.firstChild) {
            container.scrollTop = (maxValue - threshold) * itemHeight;
          } else if (entry.target === container.lastChild) {
            container.scrollTop = threshold * itemHeight;
          }
        }
      });

      observer.observe(container.firstChild);
      observer.observe(container.lastChild);

      return () => {
        observer.disconnect();
      };
    }
  }, [containerRef]);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const itemHeight = 50; // assuming all items have the same height
      const newValue = Math.round(scrollTop / itemHeight);
      setValue(newValue);
    }
  };

  return (
    <div style={{height: "50px", overflowY: "scroll", scrollSnapType: "y mandatory"}} ref={containerRef} onScroll={handleScroll}>
      {Array.from({ length: maxValue + 1}).map((_, index) => (
        <div key={index} className="time-input-unit-item" style={{ height: "50px", scrollSnapAlign: "start", textAlign: "center", fontSize: "20px"}}>
          {index}
        </div>
      ))}
    </div>
  );
};

export default TimeInput;