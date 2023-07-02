import Button from './Button';
import Screen from './Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
    //Hook for input screen 
    const [input, setInput] = useState('');
    //Function to render input screen 
    const addInput = value => setInput(input + value);
    //Function to clear input screen 
    const clearInput = value => setInput('');
    //Function to calculate the result using the MathJs package. Uses the evaluate function
    const calculate = () => {
        try {
            (input) ? setInput(evaluate(input)) : alert('Enter a number to calculate.')
        } catch {
            alert('There was an error with your calculation. Confirm the operation is correct and re-try.')
        }
    }

    return (
        <div className="mx-auto border-2 rounded-2xl bg-stone-100 ">
            <div className="grid grid-cols-4 gap-3 p-5">
                {/* Input Screen */}
                <div className="col-span-4">
                    <Screen input={input}></Screen>
                </div>

                {/*Buttons */}
                <Button OnClick={addInput}>(</Button>
                <Button OnClick={addInput}>)</Button>
                <Button OnClick={addInput}>%</Button>
                <Button OnClick={addInput}>/</Button>

                <Button OnClick={addInput}>7</Button>
                <Button OnClick={addInput}>8</Button>
                <Button OnClick={addInput}>9</Button>
                <Button OnClick={addInput}>*</Button>

                <Button OnClick={addInput}>4</Button>
                <Button OnClick={addInput}>5</Button>
                <Button OnClick={addInput}>6</Button>
                <Button OnClick={addInput}>-</Button>

                <Button OnClick={addInput}>1</Button>
                <Button OnClick={addInput}>2</Button>
                <Button OnClick={addInput}>3</Button>
                <Button OnClick={addInput}>+</Button>

                <Button OnClick={clearInput}>C</Button>
                <Button OnClick={addInput}>0</Button>
                <Button OnClick={addInput}>.</Button>
                <Button OnClick={calculate}>=</Button>

            </div>
        </div>
    )
}

export default Calculator;