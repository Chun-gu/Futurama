import { useGetData } from "../hooks/useGetData";
import { Error, Loading, CharactersCard } from ".";
import { CharactersType } from "../types/CharactersType";

interface CharactersContainerProps {
    name: string;
}

export const CharactersContainer = ({ name }: CharactersContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <ul>
            {data.map((charactersData: CharactersType) => {
                return (
                    <CharactersCard
                        key={charactersData.id}
                        charactersData={charactersData}
                    />
                );
            })}
        </ul>
    );
};
