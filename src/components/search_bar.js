import React, { Component } from 'react';

class SearchBar extends Component{
// ths is how we define the state or initialize the state
  constructor(props){
    super(props);

// job of constructor is to do some setups like
// initialize the variables.

    this.state = {term:''};
  }

  render(){
    return(
      <div>
        <input
          value={this.state.term} 
          onChange = {(event) =>this.setState({term:event.target.value})} />

      </div>
     );
  }


}
export default SearchBar;
