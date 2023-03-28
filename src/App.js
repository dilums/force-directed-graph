import React, { useEffect } from "react";
import { useSprings, a } from "@react-spring/web";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter
} from "d3-force";
import data from "./data";
import "./styles.css";

const width = 600;
const height = 600;

const centerX = width * 0.5;
const centerY = height * 0.5;

const createSimulation = () => {
  const links = [...data.links];
  const nodes = [...data.nodes];
  const simulation = forceSimulation(nodes)
    .force(
      "link",
      forceLink(links).id((d) => d.id)
    )
    .force("charge", forceManyBody())
    .force("center", forceCenter(centerX, centerY));

  return simulation;
};

export default function App() {
  const [springs, api] = useSprings(data.nodes.length, (index) => ({
    x: centerX,
    y: centerY,
    fill: data.colors[data.nodes[index].group]
  }));
  const [lineSprings, linesApi] = useSprings(data.links.length, () => ({
    x1: centerX,
    y1: centerY,
    x2: centerX,
    y2: centerY
  }));

  useEffect(() => {
    const simulation = createSimulation();

    simulation.on("tick", () => {
      const nodes = simulation.nodes();
      api.start((index) => {
        const { x, y } = nodes[index];
        return { x, y, immediate: false };
      });
      linesApi.start((index) => {
        const { sourceId, targetId } = data.links[index];
        const { x: x1, y: y1 } = nodes[sourceId];
        const { x: x2, y: y2 } = nodes[targetId];
        return { x1, y1, x2, y2, immediate: false };
      });
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="app">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={width} height={height} fill="#23243d" rx={5} />
        {lineSprings.map(({ x1, y1, x2, y2 }) => (
          <a.line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8183A8" />
        ))}
        {springs.map(({ x, y, fill }) => (
          <a.circle cx={x} cy={y} r="5" fill={fill} />
        ))}
      </svg>
    </div>
  );
}
