import React,{Component }from 'react'

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.avenger.id,
        };
        this.isSelect = this.isSelect.bind(this)
    }
    isSelect(evnt){
        this.props.newSelect(evnt.target.value)
    }

    render(){
        let avenger = this.props.avenger;


        return(
            <div>
                <li className="nav-item active">
                    <button className={'btn btn-outline-success'} onClick={this.isSelect} value={this.state.id}>
                        {avenger.name}
                        <span className="sr-only">(current)</span>
                    </button>
                </li>
            </div>
        )
    }
}