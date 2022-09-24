export default function CloneItem({ clonexs }) {
    return (

        <div className="box">
            <img className="grid-item grid-item-1"
                src={clonexs.image}
                alt={clonexs.name} />
            <p>{clonexs.name}</p>
            <h6>{clonexs.price} ETH</h6>
        </div>


    );
}