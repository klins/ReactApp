class MenuBar extends React.Component {
    constructor(props){
        super(props);
    }
        
        render(){
            var tmp = this.props.menuList;
            var result = tmp.map(function(x){
                return(<li>{x}</li>);
            }
            );
            return (
                <div className="menu-wrapper">
                    <h3>{this.props.type}</h3>
                    <ul>
                        {result}
                    </ul>
                </div>
            );
        }
    
}