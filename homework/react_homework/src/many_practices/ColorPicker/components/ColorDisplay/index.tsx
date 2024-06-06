import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";

interface RouteParams {
  color: string;
}

export default function ColorDisplay() {
  const { color } = useParams<RouteParams>();

  return <div className={`background-color-${color} color-display`}></div>;
}
