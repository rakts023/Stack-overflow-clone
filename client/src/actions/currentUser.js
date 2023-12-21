// this action is used to set value for current user
// to use this data we need to create page under reducer 
export const setCurrentUser = (data) =>{
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data
    }
}