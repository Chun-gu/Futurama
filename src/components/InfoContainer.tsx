import { Error, Loading, InfoCard } from ".";
import { useGetData } from "../hooks/useGetData";
import { Info } from "../types/Info";

interface InfoContainerProps {
    name: string;
}

export const InfoContainer = ({ name }: InfoContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    const { synopsis, yearsAired, creators } = data[0];

    return (
        <div>
            <p>Synopsis: {synopsis}</p>
            <p>Aired Years: {yearsAired}</p>
            <h2>Creators</h2>
            {creators.map((creator: typeof creators) => {
                return <InfoCard key={creator.name} creatorData={creator} />;
            })}
        </div>
    );
};
