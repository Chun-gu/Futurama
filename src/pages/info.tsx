import { NextPage } from "next";
import { InfoContainer } from "../components/InfoContainer";

const InfoPage: NextPage = () => {
    const name = "info";

    return (
        <div>
            <h1>Futurama Info</h1>
            <InfoContainer name={name} />
        </div>
    );
};

export default InfoPage;
