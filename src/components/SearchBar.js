import React from 'react';

class SearchBar extends React.Component{
    state= {term:''}
    onInputChnage= (event)=>{
        this.setState({term:event.target.value});
    };
    onFormSubmit = event=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        
    };
    render(){
        return(
            <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
            <label>Video Search</label>
                <div className="field">
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onInputChnage}    
                    />
                </div>
            </form>
            </div>
        );
    }
}


export default SearchBar