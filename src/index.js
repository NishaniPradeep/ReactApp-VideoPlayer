import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/searchBar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyBuUwzkYVYPLQdjwcam4WdFcoL5_LTmSio';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: 'surfboards' }, function (videos) {
            this.setState({videos});
        }.bind(this));
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <div>
                <VideoList videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
