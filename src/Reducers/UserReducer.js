export const registerUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_REGISTER_REQ':
            return{
                loading:true
            }
        case 'USER_REGISTER_SUCCESS':
            return{
                loading:false,
                success:true
            }
        case 'USER_REGISTER_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}

export const loginUserReducer=(state={},action)=>{
    switch (action.type)
    {
        case 'USER_LOGIN_REQ':
            return{
                loading:true
            }
        case 'USER_LOGIN_SUCCESS':
            return{
                loading:false,
                success:true,
                currentUser:action.payload
            }
        case 'USER_LOGIN_FAILED':
            return {
                loading:false,
                error:action.payload
            }
        default:return state
    }
}
// export const OrderInfoUserReducer=(state={},action)=>{
//     switch (action.type)
//     {
//         case 'USER_ORDERINFO_REQ':
//             return{
//                 loading:true
//             }
//         case 'USER_ORDERINFO_SUCCESS':
//             return{
//                 loading:false,
//                 success:true
//             }
//         case 'USER_ORDERINFO_FAILED':
//             return {
//                 loading:false,
//                 error:action.payload
//             }
//         default:return state
//     }
// }