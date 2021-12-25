// infoContainer에서 내려받은 props의 자료형을 정의
interface CreatorProps {
    creatorData: {
        name: string;
        url: string;
    };
}

export const InfoCard = ({ creatorData }: CreatorProps) => {
    const { name, url } = creatorData;

    return (
        <div>
            <p>{name}</p>
            <a href={url}>IMDB</a>
        </div>
    );
};
