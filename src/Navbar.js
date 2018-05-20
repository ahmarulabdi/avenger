import React from 'react'
import Menu from './Menu'
export default class Navbar extends React.Component{
    constructor(){
        super();
        this.handleNewSelect = this.handleNewSelect.bind(this)
    }

    handleNewSelect(id){
        this.props.requestNewSelect(id)
    }

    render(){
        const avengers = this.props.menu;
        return(
            <div>
                {/*{JSON.stringify(avengers)}*/}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                avengers.map((avenger) => {
                                    return (
                                        <Menu  key={avenger.id} avenger={avenger} selected={this.props.select} newSelect={this.handleNewSelect} />
                                    )
                                }
                            )}

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}