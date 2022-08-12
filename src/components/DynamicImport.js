import React from 'react';

export default class DynamicImport extends React.Component{

    state = {
        Component: undefined
    }
    componentDidMount(){
        this.props.load().then((mod)=>{
            this.setState({Component: mod.default})
        })
    }
    render(){
        return this.props.children(this.state.Component);
    }
}