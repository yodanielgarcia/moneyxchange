//constant
const initialData = {
    fetching: false,
    array: [],
    currentChart: {}
}
//reducer
export default function reducer(state= initialData, action) {
    console.log('ejemplo redux');
    
}
//actions
export function getRates() {
    return (dispatch, geState) =>{
        //llamado a capa de servicios axios
    }
}