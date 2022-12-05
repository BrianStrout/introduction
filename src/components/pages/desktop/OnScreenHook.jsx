import React from "react";
import { useState, useRef, useMemo, useEffect } from "react";

const OnScreenHook = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries; //const entry= entries[0]
    setIsVisible(entry.isIntersecting);
  };

  //   options;
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return isVisible;
};

export default OnScreenHook;
