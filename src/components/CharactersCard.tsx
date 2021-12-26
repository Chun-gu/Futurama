import Image from "next/image";
import { Characters } from "../types/CharactersType";

interface CharactersProps {
    charactersData: Characters;
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
            {homePlanet}
            {occupation}
            {sayings.map((saying: string, index) => {
                return <p key={index}>{saying}</p>;
            })}
            ;
        </div>
    );
};
