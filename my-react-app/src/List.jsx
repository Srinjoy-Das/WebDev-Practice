
function List(props) {

    const catagory = props.catagory;
    const itemList = props.items;

    const listItems = itemList.map(items => <li key={items.id}>
        {items.name}: &nbsp;
        <b>{items.calories}</b>
    </li>);

    return(
        <>
            <h3>{catagory}</h3>
            <ol>{listItems}</ol>
        </>
    );
    
}

export default List;