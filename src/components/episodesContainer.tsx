import { useGetData } from "../hooks/useGetData";
import { EpisodesCard, Error, Loading } from ".";
import { EpisodesType } from "../types/EpisodesType";

interface EpisodesContainerProps {
    name: string;
}

export const EpisodesContainer = ({ name }: EpisodesContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    console.log(data);
    return (
        <div>
            {data.map((episodesData: EpisodesType) => {
                return (
                    <EpisodesCard
                        key={episodesData.id}
                        episodesData={episodesData}
                    />
                );
            })}
        </div>
    );
};
