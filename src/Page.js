import React from 'react'


export default class Page extends React.Component{
    render(){
        let page = this.props.page;
        return(
            <div className={'row justify-content-center'}>
                <div className="card col-md-6" >
                    {/*<img className="card-img-top" src="{page.}" alt="Card image cap">*/}
                    <div className="card-body">
                        <h5 className="card-title">{page.name}</h5>
                        <p className="card-text">
                            {page.ability}
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}