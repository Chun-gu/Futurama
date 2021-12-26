import { CastCard, Error, Loading } from ".";
import { useGetData } from "../hooks/useGetData";
import { CastType } from "../types/CastType";

interface CastContainerProps {
    name: string;
}
export const CastConatiner = ({ name }: CastContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;
    console.log(data);
    return (
        <>
            {data.map((castData:CastType)=>{
                return(
                    <CastCard key={castData.id} castData={castData}/>
                )
            })}
        </>
    )
};
