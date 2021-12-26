import { NextPage } from "next";
import { QuestionsContainer } from "../components";

const QuestionsPage: NextPage = () => {
    const name = "questions";

    return (
        <div>
            <h1>Questions</h1>
            <QuestionsContainer name={name} />
        </div>
    );
};

export default QuestionsPage;
