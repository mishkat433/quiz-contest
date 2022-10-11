import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts';

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
        <div className='h-[85vh] mt-10 flex justify-center' >

            <LineChart
                width={600}
                height={400}
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

        </div>
    );
};

export default Statistics;