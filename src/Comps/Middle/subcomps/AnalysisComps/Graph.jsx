import React from "react";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Graph = () => {
  const data = [
    {
      year: "Jan",
      data: 90,
      data2: 40,
    },
    {
      year: "Feb",
      data: 80,
      data2: 70,
    },
    {
      year: "Mar",
      data: 70,
      data2: 100,
    },
    {
      year: "Apr",
      data: 90,
      data2: 40,
    },
    {
      year: "May",
      data: 10,
      data2: 40,
    },
    {
      year: "June",
      data: 50,
      data2: 30,
    },
    {
        year: "Jul",
        data: 10,
        data2: 40,
      },
      {
        year: "Aug",
        data: 30,
        data2: 70,
      },
      {
        year: "Sep",
        data: 10,
        data2: 40,
      },
      {
        year: "Oct",
        data: 50,
        data2: 30,
      },
      {
        year: "Nov",
        data: 90,
        data2: 40,
      },
      {
        year: "Dec",
        data: 50,
        data2: 50,
      },
  ];
  return (
    <div className="graph">
      <div className="top">
        <div className="top-left">
          <h1>yearly analysis</h1>
        </div>
      </div>

      <div className="bottom">
        <LineChart
          width={630}
          height={390}
          data={data}
           
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data" stroke="red" />
          <Line type="monotone" dataKey="data2" stroke="blue" />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
