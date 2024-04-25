import React, { Component } from 'react'
import NLDT_EventForm1 from './components/NLDT_EventForm1'
import NLDT_EventForm2 from './components/NLDT_EventForm2'
import NLDT_EventForm3 from './components/NLDT_EventForm3'
import NLDT_EventForm4 from './components/NLDT_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event form demo</h1>
        <NLDT_EventForm1 />
        <NLDT_EventForm2 />
        <NLDT_EventForm3 />
        <NLDT_EventForm4 name="nguyênx lê đức thành" />
      </div>
    )
  }
}
