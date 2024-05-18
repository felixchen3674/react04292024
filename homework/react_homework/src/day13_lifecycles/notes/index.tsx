import React from "react";
import FetchPostByIdApp from "../solutions/FetchPostByIdApp";
import Nav from "./Nav";

class App1 extends React.Component {
    constructor(){
        super()
        // this.state={
        //     show:true
        // }
        // this.state = {
        //     data: false
        // }
        this.state={
            counter:0
        }
        console.warn('constructor 1')
    }
    // componentDidMount(): void {
    //     console.warn('componentDidMount 3')
    //     this.setState({data: true})
    // }
    // componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    //     console.warn('method called', prevState)
    //     //do not update the state without condition as it will go into a infinite loop
    //     if(prevState.counter<3){
    //         this.setState({counter:this.state.counter+1})
    //     }
    // }
    render(){
        console.warn('render 2')
        return(
            <div>
                <h1>componentDidUpdate Life Cycle Method</h1>
                <Child2 data={this.state.counter}/>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update counter{this.state.counter}</button>
                {/* <h1>Life cycle method</h1> */}
                {/* {this.state.show?<Child />:null}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button> */}
                {/* {
                    this.state.show ?
                    <Nav />
                    :null
                } */}
                {/* <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Navbar</button> */}
            </div>
        )
    }
}
class Child2 extends React.Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
        console.warn('constructor 1')
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.warn('method called', prevState)
    }
    render(){
        console.warn('render 2')
        return(
            <div>
                <h2>Child component {this.props.data}</h2>
            </div>
        )
    }
}

class Child extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         show:false
    //     }
    // }
    componentWillUnmount(): void {
        console.warn('component is hidden')
    }
    render(){
        return(
            <div>
                <h3>Child component</h3>
            </div>
        )
    }
}

export default App1;
function Day13Play() {
  return (
    <div>
      <h1>Day 13 Play</h1>
      <div>
        <FetchPostByIdApp />
      </div>
    </div>
  );
}
