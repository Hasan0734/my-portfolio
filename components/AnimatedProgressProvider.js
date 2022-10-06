import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
export default function AnimatedProgressProvider(props) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let interval;
    if (props.repeat) {
      interval = setInterval(() => {
        setIsAnimated(!isAnimated);
      }, props.duration * 1000);
    } else {
      setIsAnimated(!isAnimated);
    }
    interval = clearTimeout(interval);
  }, [isAnimated, props.repeat, props.duration]);

  return (
    <Animate
      start={() => ({
        value: props.valueStart,
      })}
      update={() => ({
        value: [isAnimated ? props.valueEnd : props.valueStart],
        timing: {
          duration: props.duration * 1000,
          ease: props.easingFunction,
        },
      })}
    >
      {props.children}
    </Animate>
  );
}
