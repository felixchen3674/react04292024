import React, { Component, PureComponent, ReactNode } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

interface Props {}
interface State {}

class ParentComp extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            name:'Anthony'
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:'Anthony'
            })
        }, 2000)
    }

    render(): ReactNode {
        console.log('++++++++++++Parent Component')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
