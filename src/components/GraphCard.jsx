import React from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// Sample data
const data = [
    { name: "jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
   
];

const GraphCard = () => {
    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
                Nuqi Curated Portfolio
            </h3>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        {/* Add Cartesian grid for better visuals */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#ddd" />
                        <YAxis stroke="#ddd" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#333",
                                borderRadius: "8px",
                                border: "none",
                                color: "#fff",
                            }}
                            itemStyle={{ color: "#ddd" }}
                        />
                        <Legend wrapperStyle={{ color: "#ddd" }} />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#82ca9d"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default GraphCard;
