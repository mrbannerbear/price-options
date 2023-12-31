import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Legend } from "recharts";

const GymStats = () => {
  useEffect(() => {
    // fetch("./gymStats.json")
    //   .then((res) => res.json())
    //   .then((data) => setStats(data.customerSatisfactionData));

    axios.get('./gymStats.json')
    .then(data => setStats(data.data.customerSatisfactionData))
  }, []);

  const [stats, setStats] = useState([]);

  return (
    <div className="lg:mt-20">
      <LineChart width={800} height={300} data={stats}>
        <XAxis dataKey="year" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="Gotham Central Gym" stroke="#8884d8" />
        <Line type="monotone" dataKey="Competitor A" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Competitor B" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default GymStats;
