"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter: React.FC<animatedCounterProps> = ({
  amount,
  decimal = ".",
  decimals = 2,
  prefix,
  duration = 2,
}) => {
  return (
    <div>
      <CountUp
        end={amount}
        decimal={decimal}
        decimals={decimals}
        prefix={prefix}
        duration={duration}
      />
    </div>
  );
};

export default AnimatedCounter;
