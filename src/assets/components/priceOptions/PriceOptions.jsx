import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const PriceOptions = () => {
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setMemberships(data.membershipRates));
  }, []);

  const [memberships, setMemberships] = useState([]);

  return (
    <section className="mt-5">
        <h2 className="text-center text-2xl font-semibold mb-4 md:mb-6 lg:mb-12">Plans</h2>
        <div className="flex flex-col md:flex-row justify-evenly gap-5">
        {memberships.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
        </div>
    </section>
  );
};

export default PriceOptions;
