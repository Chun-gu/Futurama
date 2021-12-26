import { NextPage } from 'next';
import { InventoryContainer } from '../components';

const InventoryPage: NextPage=()=>{
    const name='inventory'

    return <div>
        <h1>Inventory</h1>
        <InventoryContainer name={name}/>
    </div>
}

export default InventoryPage;