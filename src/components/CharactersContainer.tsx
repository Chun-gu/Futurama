import { useGetData } from "../hooks/useGetData";
import { Error, Loading, CharactersCard } from ".";
import { Characters } from "../types/CharactersType";
import Link from "next/link";

interface CharactersContainerProps {
    name: string;
}

export const CharactersContainer = ({ name }: CharactersContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            {data.map((charactersData: Characters) => {
                return (
                    // <Link key={charactersData.id} href="./sdf" passHref>
                        <CharactersCard key={charactersData.id} charactersData={charactersData} />
                    // </Link>
                );
            })}
        </div>
    );
};
