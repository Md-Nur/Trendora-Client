const PulseCard = () => {
  return (
    <div className="flex w-72 md:w-96 flex-col gap-5">
      <div className="skeleton h-56 w-full"></div>
      <div className="skeleton h-5 w-48"></div>
      <div className="skeleton h-5 w-full"></div>
      <div className="skeleton h-5 w-full"></div>
    </div>
  );
};

export default PulseCard;
