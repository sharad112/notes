import React from 'react'
import { ResponsiveContainer,Bar,BarChart,XAxis,YAxis,Legend,Tooltip } from 'recharts';
const Anabottom = () => {
    const data=[
        {
            name:"task1",
            done:60,
            undone:40
        }
        ,{
            name:"task2",
            done:70,
            undone:60
        },
        {
            name:"pending",
            done:30,
            undone:70
        }
    ]
  return (
    <div className='bar'>
      <h1>work report</h1>

      <BarChart data={data} width={370} height={340} barCategoryGap={10}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
        <Legend/>
        <Bar dataKey="done" fill="#0052CC" />
        <Bar dataKey="undone" fill="lightblue" />
      </BarChart>
      {/* <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart> */}
    </div>
  );
}

export default Anabottom