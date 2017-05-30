class Box extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="box-css">{this.props.boxName}</div>
        );
    }
}