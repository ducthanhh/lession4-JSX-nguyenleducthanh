import React, { Component } from 'react'

export default class NLDT_EventForm4 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"duc thanh"
        }
    }
    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
       <h2>lấy dữ liệu từ props</h2>
       <button onClick={this.handleGetName}>lấy tên</button>
       <h2> wellcome to , {this.state.name}</h2>
      </div>
    );
  }
}
