import React from "react";
import Ticker from "react-ticker";

export default function HTMLTicker() {
  return <Ticker>{({ index }) => <p>hi </p>}</Ticker>;
}
