

const User = ({user}) => {
    const {name, position, company, testimonial} = user;
    return (
        <div className="text-center bg-base-200
        rounded-md lg:px-12 lg:py-6">
            <h3 className="font-semibold">{name}</h3>
            <h4 className="font-bold text-xs"><span>{position}, </span>
            <span>{company}</span></h4>
            <p className="mt-4 text-xl">{`
            "${testimonial}"
            `}</p>
        </div>
    );
};

export default User;