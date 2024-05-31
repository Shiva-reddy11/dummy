



export const InitialState =[
    {'Login':false}
 ];

export const ReducerFun = (action,state) => {
    switch (action.type) {
        case 'LOGINTRUE':
            return{...state,Login:true };
            default:return state ;
        
    }
 }
