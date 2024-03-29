import React,{Component} from 'react';

export default function AsyncComponent(importComponent){
    class App extends Component{
        constructor(props) {
            super(props)
            this.state={
                component:null
            }
        }

        async componentDidMount(){
            const {default:component}=await importComponent()
            this.setState({
                component:component
            })
        }

        render(){
            const C = this.state.component;
            return C ? <C/> : null
        }
    }
    return App
}