import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Tooltip, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData()
    const [data, setData] = useState([])

    useEffect(() => {
        let ss = []
        for (const one of loadData.data) {
            ss.push(one)
        }
        setData(ss)
    }, [loadData])

    return (
        <div className='h-[85vh] my-10 flex justify-center md:w-3/5' >
            <ResponsiveContainer aspect={2} >
                <LineChart
                    className='w-96 h-96'
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;