import React, { PureComponent, ReactNode } from 'react'

class PureComp extends PureComponent {

    render(){
        console.log('Pure Component')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp


//Pure component compares the two props and state with "Shallow comparison" 
//Shallow comparison is where when both data are equal, even the memory address.
//a===b is true, then Pure Component is re-rendered.