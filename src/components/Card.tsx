import { ReactNode } from "react";

const Card = ({ img, children }: { img: string; children: ReactNode }) => {
  return (
    <div className="card bg-base-300 w-72 md:w-96 shadow-xl">
      <figure>
        <img src={img} alt={img} />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
