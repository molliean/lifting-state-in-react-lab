// src/components/IngredientList.jsx


const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <li style={{ backgroundColor: ingredient.color}}>
                        {ingredient.name}
                    </li>
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                </div>
            ))}
        </ul>
    )
};

export default IngredientList;
