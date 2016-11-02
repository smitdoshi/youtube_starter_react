import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

// Create a new component. This component should produce
// Some HTML.

const API_KEY = 'AIzaSyDiQ8-t0TzuHiqEmOzTiJMQXCUV_boOdaY';

class App extends Component {
  constructor(props){
    super(props);

    this.state= { videos:[]};

    YTSearch({key:API_KEY, term:'surfborads'}, (videos) => {
      this.setState({videos});
      // In ES6 this will resolve as this.setState({videos:videos});
      // Only works when Key and Properties Name are same.

    });
  }


  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
        
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App/>,document.querySelector('.container'));
