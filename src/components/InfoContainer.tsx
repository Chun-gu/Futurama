import { Error, Loading, CreatorCard } from ".";
import { useGetData } from "../hooks/useGetData";

interface InfoContainerProps {
    name: string;
}

export const InfoContainer = ({ name }: InfoContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    const { synopsis, yearsAired, creators } = data[0];

    return (
        <>
            <p>Synopsis: {synopsis}</p>
            <p>Aired Years: {yearsAired}</p>
            <h2>Creators</h2>
            {creators.map((creator: typeof creators) => {
                return <CreatorCard key={creator.name} creatorData={creator} />;
            })}
        </>
    );
};
