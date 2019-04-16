import React from 'react';


class SearchBar extends React.Component {
    handleInputChange(e) {
        console.log(e.target.value);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        <input type="text" onChange={this.handleInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }


}




export default SearchBar;