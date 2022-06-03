import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'bilal',
          email:'bilal@gmail.com'
       }
     }
     nameChange = (e)=>{
         this.setState({name: e.target.value})
     }
     emailChange = (e)=>{
       this.setState({email:e.target.value})
     }
     formSubmit = (e)=>{
        e.preventDefault()
        alert("Form Submitted Successfully with Name:" +this.state.name + 'and Email: ' + this.state.email)
     }
  render() {
    return (
      
        <form style={{maxWidth:`200px` ,margin:`50px auto`,textAlign:`center` , justifyContent:`center`,padding:`40px`, backgroundColor:`#eee`}} onSubmit={this.formSubmit}>
            <label>Name: <input type="text" value={this.state.name} onChange={this.nameChange} /></label><br /><br />
            <label>Email: <input type="email" value={this.state.email} onChange={this.emailChange}/></label><br /><br />
            <button type="submit">Submit</button>
        </form>
    )
  }
}
export default Forms