import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useGetData } from "../../hooks/useGetData";
import { Error, Loading } from "../../components";

const CharacterDetailPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useGetData(`characters/${id}`);

    if (error) return <Error />;
    if (!data) return <Loading />;

    const {
        name,
        age,
        images,
        gender,
        species,
        homePlanet,
        occupation,
        sayings,
    } = data;
    return (
        <div>
            <h1>
                {name.first} {name.middle} {name.last}
            </h1>
            <Image src={images.main} alt={name} width={100} height={100} />
            <p>
                {age}, {gender} {species}
            </p>
            <p>{homePlanet}</p>
            <p>{occupation}</p>
            Sayings
            <ul>
                {sayings.map((saying: string, index: number) => {
                    return <li key={`saying-${index}`}>{saying}</li>;
                })}
            </ul>
        </div>
    );
};
export default CharacterDetailPage;
