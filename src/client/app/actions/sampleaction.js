export default function(){
    
    console.log('Event is working');
    return {
        type: "SAMPLE_ACTION",
        data : Math.floor(Math.random()*1000)
    };
    
}