
export const Todo = ({ id, 
                       name,
                       editedId,
                       editedValue,
                       setEditedValue,
                       saveEditHandler,
                       checked,
                       checkHandler,
                       editHandler,
                       deleteHandler }) => {
    return (
    <div className='block'>
        {id === editedId ?
          <>
            <input value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
            <button onClick={() => saveEditHandler(id)}>Save</button> 
          </>
          : 
        <div className='blockName'>
          <input type='checkbox' checked={checked} onChange={() => checkHandler(id)} />
          <div className={checked === true ? 'crossedName' : ''}>{name}</div>
        </div>
        }
        <div className='icons'>
          <div onClick={() => editHandler(id, name)}>&#x0270E;</div>
          <div onClick={() => deleteHandler(id)}>×</div>
        </div>
    </div>
    );
}
