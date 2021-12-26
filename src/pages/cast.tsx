import { NextPage } from "next";
import { CastConatiner } from '../components';

const CastPage: NextPage = () => {
    const name = 'cast'
    
    return (
        <div>
            <h1>Cast</h1>
            <CastConatiner name={name}/>
        </div>
    );
};

export default CastPage;
