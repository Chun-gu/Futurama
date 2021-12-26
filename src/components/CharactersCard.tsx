import Image from "next/image";
import Link from "next/link";
import { CharactersType } from "../types/CharactersType";

interface CharactersProps {
    charactersData: CharactersType;
}

export const CharactersCard = ({ charactersData }: CharactersProps) => {
    const { id, name, images } = charactersData;
    return (
        <li>
            <Link href={`./characters/${id}`}>
                <a>
                    <Image
                        src={images.main}
                        alt={name.first}
                        width={300}
                        height={500}
                    />
                    <p>
                        {name.first} {name.middle} {name.last}
                    </p>
                </a>
            </Link>
        </li>
    );
};
