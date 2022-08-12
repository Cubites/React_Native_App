export const initialState = {
    currentValue : "0",
    operator: null,
    previousValue: null
};

export const handleNumber = (value, state) => {
    if(state.currentValue === '0'){
        return { currentValue: `${value}` }
    }
    return {
        currentValue: `${state.currentValue}${value}`
    }
};

export const handleEqual = (value, state) => {
    switch(state.operator){
        case '+':
            return {
                currentValue: Number(state.previousValue) + Number(state.currentValue)
            };
        case '-':
            return {
                currentValue: state.previousValue - state.currentValue
            };
        case 'x':
            return {
                currentValue: state.previousValue * state.currentValue
            };
        case '/':
            return {
                currentValue: state.previousValue / state.currentValue
            };
        default:
            return state;
    }
}

const calculator = (type, value, state) => {
    switch(type){
        case "number":
            console.log('number');
            return handleNumber(value, state);
        case "operator":
            console.log('operator');
            return {
                currentValue: '0',
                operator: value,
                previousValue: state.currentValue
            }
        case "equal":
            console.log('equal');
            return handleEqual(value, state);
        case 'clear':
            console.log('clear');
            return initialState;
        case 'posneg':
            console.log('posneg');
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
            };
        case 'percentage':
            console.log('percentage');
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return false;
    }
}

export default calculator;