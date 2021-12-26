import { QuestionsCard, Error, Loading } from ".";
import { useGetData } from "../hooks/useGetData";
import { QuestionsType } from "../types/QuestionsType";

interface QuestionsContainerProps {
    name: string;
}
export const QuestionsContainer = ({ name }: QuestionsContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            {data.map((questionsData: QuestionsType) => {
                return (
                    <QuestionsCard
                        key={questionsData.id}
                        questionsData={questionsData}
                    />
                );
            })}
            <button type="button">submit</button>
        </div>
    );
};
