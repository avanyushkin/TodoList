
function Card({name, price}) {
    return (
        <>
            <div className='block'>
                <div>{name}</div>
                <div>{price}</div>
            </div>
        </>
    );
}

export default Card;