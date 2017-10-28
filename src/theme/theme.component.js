import React, { Component } from 'react';

export class ThemeComponent extends Component {
	constructor(){
    super();
    this.state = {
      name : "poornima",
      count:0,
      list:["poorni","hazini","veera","aadhi","jim"],
      countCheck : 0,
      className:"green",
      listArr : [{name:"poorni",age:24},{name:"jim",age:18},{name:"hazi",age:20},{name:"veera",age:10}]
    }
    this.value = 0;
    this.listArr = [{name:"poorni",age:24},{name:"jim",age:18},{name:"hazi",age:20},{name:"veera",age:10}]

	this.listItems = this.listArr.map((item) => {
	   return (
	    <li key={item.name}>
	     <a className='button'>{item.name}</a>
	    </li>
	   );
  });

  }

  clicked(name){
    console.log(name)
    this.setState({list:["poorni","hazini","veera"]})
    this.value = +1;

    this.setState((prevState) => ({
      name: prevState.name,
      count: prevState.count +1,
      // list: (prevState.list.length>this.value) ? prevState.list[this.value]: "no item",
      countCheck : prevState.list[prevState.count],
      className: (prevState.className === "green") ? "violet" : "green", 


    }));
  }

   getMyName(){
   	return "poorni";
   }
   myfunc = function(data){
       console.log(data);
       this.setState({list:["poorni","hazini","veera"]})
       this.value = +1;
    //    this.setState((prevState) => ({
	   //    name: prevState.name,
	   //    count: prevState.count +1,
	   //    list: (prevState.list.length>this.value) ? prevState.list[this.value]: "no item",
	   //    countCheck : prevState.list[prevState.count] 

    // }));
    // this.state.name = "sp";
    // this.state.count = +1;
   }

      render() {
        return (
        	<div className={this.state.className}>
        	   <h1>{this.state.name} {this.state.count} {this.state.list} {this.value}</h1>
        	   <p>{this.state.countCheck}</p>
        	   <h1 onClick={() => this.clicked("poorni hazini")}>Change your theme here</h1>
        	   <h2 onClick={() => this.myfunc("hi")}>poorni</h2>

        	   <div>
			    {this.listArr.map((item, index) => (
			       <div>
			       <span>{item.name} aged {item.age} years</span>
			       <br />
			       </div>
			    ))}
			   </div>

			   {this.listItems}

        	   </div>
        );
      }
}