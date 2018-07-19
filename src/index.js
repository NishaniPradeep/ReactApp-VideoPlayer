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
        this.state = { 
            videos: [],
            selectedVideo :null
        };
        
         this.videoSearch('Yash KGF');
    }
    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, function (videos) {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        }.bind(this));
    }
    render() {
        return (
            <div>
                <div>
                <SearchBar onSearchTermChange ={(term)=>{this.videoSearch(term)}} />
                </div>
                <div>
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div>
                <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
