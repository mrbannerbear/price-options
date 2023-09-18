import PropTypes from "prop-types";

const PriceOption = (props) => {
  const option = props.option;
  const monthlyAnnualPrice = option.monthlyPrice * 12;
  const discount = (
    ((monthlyAnnualPrice - option.annualPrice) / monthlyAnnualPrice) *
    100
  ).toFixed(1);
  return (
    <button className="hover:scale-110 transition-all text-center md:w-1/4 py-4 shadow-sm rounded-md bg-base-200">
      <h2 className=" text-lg font-semibold mb-2">{option.type}</h2>
      <h1 className="text-xl font-bold">
        {option.monthlyPrice}
        <span className="text-sm">
          /mon <span></span>
        </span>
      </h1>
      <h1 className="text-xl font-bold h-8 mb-8">
        {option.annualPrice}
        <span className="text-sm">/year</span> <br />
        <span className="text-sm font-semibold">
          (Save {discount}% on annual payments)
        </span>
      </h1>
      {/*eslint-disable-next-line react/jsx-key*/}
      <ol className="px-3 mt-3 font-semibold text-sm text-start w-4/5 mx-auto h-16">
        {option.features.map((feature) => (
          // eslint-disable-next-line react/jsx-key
          <li className="flex gap-1">
            <span>
              <i className="fa-solid fa-check"></i>
            </span>{" "}
            <span>{feature}</span>
          </li>
        ))}
      </ol>
    </button>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
