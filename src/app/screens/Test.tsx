//@ts-nocheck

import React, {Components} from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Porsche",
      model: " 911",
      color: " grey",
      year: 2027,
    };
  }
  changeDetail = () => {
    this.setState({
      brand: "Porsche",
      model: " Cabriolet",
      color: " red",
      year: 2027,
    });
  }


  //FAZAS - FAZALAR

  componentDidMount() {
    console.log("componentDidMount");
    //runs after first render => frontend loyihamizni qurush uchun 
    // kerak boladigan malumotlani retrive qilib BACKENDAN serverimizdan DATANI OLISH UCHUN
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    //runs before component unmount
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} | Model: 
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change Detail</button>
      </div>
    );
  }
}

export default Test;