import React, { Component } from 'react'

 class HandleEvent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isTogggle:true,
       }
     }

    toggleBtn  = () => {
        console.log("button is clicked")
        this.setState({isTogggle:!this.state.isTogggle})
    }
  render() {
    return (
      <div>
        <button onClick={this.toggleBtn}>{this.state.isTogggle ? 'On':'Off'}</button>
      </div>
    )
  }
}
export default HandleEvent; 