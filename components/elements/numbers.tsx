import React from 'react';

interface Card {
    title: string;
    description: string;
    circleNumber: number;
}

interface ContentCardsProps {
    cards: Card[];
}

const ContentCards: React.FC<ContentCardsProps> = ({ cards }) => {

    return (
        <div className="md:flex md:justify-center mb-5 font-semibold">
            <div className="gap-5 md:grid md:grid-cols-12">
                {cards.map(({ title, description, circleNumber }, index) => (
                    <div key={index} className="md:col-span-6">
                        <header>
                            <h6 className='flex items-center gap-4 mt-5 md:text-2xl'>
                                <span className="relative flex justify-center items-center bg-light md:rounded-full w-12 h-12 font-bold text-dark"
                                >
                                    {circleNumber}
                                </span>
                                {title}
                            </h6>
                        </header>
                        <article>
                            <p className='font-normal'>{description}</p>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentCards;
