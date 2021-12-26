import { CastType } from "../types/CastType";

interface CastDataProps {
    castData: CastType;
}
export const CastCard = ({ castData }: CastDataProps) => {
    const { name, born, died, bio } = castData;
    return <div>
        <p>{name}</p>
        <p>{born}</p>
        <p>{died}</p>
        <p>{bio.url}</p>
    </div>;
};
