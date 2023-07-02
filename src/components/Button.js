function Button(props) {
    //Function to check if the value is an operator
    const isOperator = value => isNaN(value) && (value !== '.') && (value !== '=') && (value !== 'C');
    const isEqual = value => (value === '=');
    const isClear = value => (value === 'C');

    //Styles to be applied to the button
    const baseStyle = 'border rounded-2xl p-5 font-bold hover:scale-105 active:scale-100';
    const operandStyle = 'bg-teal-300';
    const numberStyle = 'bg-sky-200';
    const equalStyle = 'bg-green-300';
    const clearStyle = 'bg-red-200';

    return (
        <button
            //The class is dynamic based on the component's children property
            className={`{${baseStyle} 
                ${isOperator(props.children) ? operandStyle
                : isEqual(props.children) ? equalStyle 
                : isClear(props.children) ? clearStyle
                : numberStyle}`}
            //On Click it returns the result of the OnClick property function
            onClick = {() => props.OnClick(props.children)} >
            {props.children}
        </button>
    )
}

export default Button;