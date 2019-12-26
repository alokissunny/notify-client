const INITIAL_STATE = {
    // products: [],
    topics: [],
    showPermission : false
  };

export default function (state= INITIAL_STATE, action ) {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state , {
                topics : action.data
            })
        case 'PERMISSION':
            return Object.assign({}, state , {
                showPermission : action.data
            })
        
    
        default:
            return state;
    }
}