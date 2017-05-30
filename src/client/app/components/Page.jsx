class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {menu : ["Home", "Career", "About Us"]};
    }
        render(){
            return (
                <div>
                    <div className="head">{this.props.pageName}</div>
                    <MenuBar menuList={this.state.menu}/>
                    <Box boxName="Box 1"/>
                    <Box boxName="Box 2"/>
                    <Box boxName="Box 3"/>
                </div>
            );
        }
    
}