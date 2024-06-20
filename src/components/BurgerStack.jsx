// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        props.stack.length > 0 ? 
        <ul>
            
            {props.stack.map((ingredient, index) => (
                <div key={index}>
                    <li style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                    </li>
                    <button onClick={() => props.removeFromBurger(index)}>-</button>
                </div>
            ))}
        </ul> : 
        <p>No ingredients</p>
    )
};

export default BurgerStack;
