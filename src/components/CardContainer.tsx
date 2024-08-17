import { ReactNode } from "react";
import Card from "./Card";
import PulseCard from "./PulseCard";

const CardContainer = ({
  title,
  cards,
  children,
  isLoading,
}: {
  title: string;
  cards: any[];
  children: ReactNode;
  isLoading?: boolean;
}) => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-2 w-full">
      <h2 className="text-5xl text-center font-bold">{title}</h2>
      <div className="flex w-full gap-2 flex-wrap">{children}</div>
      <div className="flex w-full justify-around gap-5 flex-wrap">
        {cards.map((card) =>
          !isLoading ? (
            <Card key={card._id} img={card.imageUrl}>
              <h2 className="text-xl font-bold">{card.name}</h2>
              <p>{card.description}</p>
              <p>{card.price}$</p>
              <div className="flex w-full gap-2">
                <span className="btn btn-sm btn-outline">{card.brandName}</span>
                <span className="btn btn-sm btn-outline">{card.category}</span>
              </div>
            </Card>
          ) : (
            <PulseCard key={card._id} />
          )
        )}
      </div>
    </div>
  );
};

export default CardContainer;
