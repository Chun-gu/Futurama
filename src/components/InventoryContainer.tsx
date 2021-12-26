import { useGetData } from "../hooks/useGetData";
import { InventoryCard, Error, Loading } from ".";
import { InventoryType } from "../types/InventoryType";

interface InventoryContainerProps {
    name: string;
}

export const InventoryContainer = ({ name }: InventoryContainerProps) => {
    const { data, error } = useGetData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;
    
    return (
        <div>
            {data.map((inventoryData: InventoryType) => {
                return (
                    <InventoryCard
                        key={inventoryData.id}
                        inventoryData={inventoryData}
                    />
                );
            })}
        </div>
    );
};
