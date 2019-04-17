import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar"


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 222fdb96124f14060bab7e14ab5f04cd2219cd8c581e1824e4ce0db7e8d7a5b4'
            }
        });
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
   
    
};


export default App;