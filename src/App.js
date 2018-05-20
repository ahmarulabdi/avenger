import React, { Component } from 'react';
import './App.css';
import avenger from './AvengerLogo.png'
import Navbar from './Navbar'
import Page from './Page'


const avengers =
    [
        {
            id:0,
            name:'iron man',
            ability:'men in armor with vibranium material equipped with full weaponry and war skills'
        },
        {
            id:1,
            name:'captain amerika',
            ability:'men with strong military and physical ability'
        },
        {
            id:2,
            name:'thor',
            ability:'a demigod and a master of lightning'
        },
        {
            id:3,
            name:'black widow',
            ability:'a woman who has spy and fighting ability'
        },
        {
            id:4,
            name:'Hawkeye',
            ability:'a man who has spy, fighting and archery ability'
        },
        {
            id:5,
            name:'Black Panther',
            ability:'a man who has vibranium suit and black panther instinct'
        },
        {
            id:6,
            name:'Hulk',
            ability:'a mutant with the ability to become a big green man and physical ability'
        },
        // you can add manually
    ];



class App extends Component {
    constructor(){
        super();
        this.state = {
            showpage : 0
        }
        this.changeSelect = this.changeSelect.bind(this)

    }

    changeSelect(id){
        this.setState(
            {
                showpage:id
            }
        )
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avenger Heroes</h1>
            <a href="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjKlNrhgvvaAhUEOo8KHZnkBFoQjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASymbol_from_Marvel%2527s_The_Avengers_logo.svg&psig=AOvVaw0Ji-3VS8Zw_-fdYIJqHJlM&ust=1526036682087486">
                <img className={'App-logo'} src={avenger} alt=""/>
            </a>

        </header  >
        <Navbar menu={avengers} select={this.state.showpage} requestNewSelect={this.changeSelect} />
          <Page page={avengers[this.state.showpage]}/>

      </div>
    );
  }


}

export default App;
