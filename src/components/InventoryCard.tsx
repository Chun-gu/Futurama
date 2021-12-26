import { InventoryType } from "../types/InventoryType";

interface InventoryData {
    inventoryData: InventoryType;
}

export const InventoryCard = ({ inventoryData }: InventoryData) => {
    const { category, description, price, slogan, stock, title } =
        inventoryData;
    return (
        <div>
            <h2>{title}</h2>
            <p>category: {category}</p>
            <p>slogan: {slogan}</p>
            <p>{description}</p>
            <p>stock: {stock}</p>
            <p>price: {price}</p>
        </div>
    );
};
