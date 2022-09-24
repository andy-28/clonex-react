import CloneItem from "./CloneItem";
import clonex from "../json/clone.json"

export default function CloneList() {
    return (
        <div className = "grid-container">
            {clonex.map(clonexs => (
                <CloneItem key={clonexs.id} clonexs={clonexs} />
            ))}
        </div>
    );
}