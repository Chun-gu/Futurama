import Image from "next/image";
import { CharactersType } from "../types/CharactersType";

interface CharactersProps {
    charactersData: CharactersType;
}

export const CharactersCard = ({ charactersData }: CharactersProps) => {
    const {
        name,
        age,
        images,
        gender,
        species,
        homePlanet,
        occupation,
        sayings,
    } = charactersData;
    return (
        <div>
            <Image
                src={images.main}
                alt={name.first}
                width={300}
                height={500}
            />
            <p>
                {name.first} {name.middle} {name.last}
            </p>
            <p>
                {age}, {gender} {species}
            </p>
            <p>{homePlanet}</p>
            <p>{occupation}</p>
            {sayings.map((saying: string, index: number) => {
                return <p key={`saying-${index}`}>{saying}</p>;
            })}
            ;
        </div>
    );
};
