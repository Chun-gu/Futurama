import { CastType } from "../types/CastType";

interface CastDataProps {
    castData: CastType;
}
export const CastCard = ({ castData }: CastDataProps) => {
    const { name, born, bio } = castData;
    return (
        <div>
            <p>{name}</p>
            <p>{born}</p>
            <a href={bio.url}>iMDB</a>
        </div>
    );
};
