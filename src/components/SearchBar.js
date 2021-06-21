import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''}

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onTermSubmit(this.state.term)
    }

    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <h1 className="ui header">Mini <i className="plug icon"></i>outube</h1>
                    <label>Search Video</label>
                    <input
                     type="text" 
                     value={this.state.term} 
                     onChange={e => this.setState({term: e.target.value})}
                     />
                </div>
            </form>

        </div>
        )
    }
}

export default SearchBar;