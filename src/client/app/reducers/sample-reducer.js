const reduce= {message: "First React Redux Application"}

export default function(state=reduce,action){
    switch(action.type){
        case 'SAMPLE_ACTION' : 
            return {message : 'Message from reducer'+action.data}
    }
    
    return state;
}