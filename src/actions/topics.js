
import * as types from '../constants/types'


const url = 'http://localhost:3001/getAllTopics/'

export  const getAllTopics = (dispatch) => {
    return (id) => {
        try {
            fetch(url+id)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch({
                type : 'INIT',
                data : res
            })
        })
        } catch (error) {
            console.log(error);
        }
        
       
    }
    }

    export const updatePermission = (dispatch) => {
        return (showPermission) => {
            dispatch({
                type: 'PERMISSION',
                data : showPermission
            })
        }
    }
    