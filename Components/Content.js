import React from 'react';
import Display from './Display';


class Button extends React.Component {
  render() {
    return (
    	<span>
      <button {...this.props}>
        click
       </button>
       </span>
    );
  }  
}

class Content extends React.Component {	

	constructor(props) {
	    super(props);

	    this.state = {
	      clicked: false,
	      title:"",
	      list:{},
	      url:"http://www.omdbapi.com/?s="
	    };
	    this.handleSearchChange = this.handleSearchChange.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	  }


	handleSearchChange (event) {
	   this.setState({title:event.target.value});
	   
	}

	handleClick() {
		var search = this.state.url+this.state.title;

		 var myInit = {
		          	method:"GET"
		          };
		          // console.log("url",search);
		          fetch(search, myInit).then((response) => {
		          	return response.json();
		          }).then((data) => {
		          	this.setState({clicked:true,title:data});
		          	// console.log(this.state);
		          });
		          this.setState({clicked:false});
    }

	render() {
		return(
			<div>
			<label for="usr"></label>
 			 <input type="text" class="form-control" id="usr" ref="search" name="movie" placeholder="Search Movies" onKeyUp={this.handleSearchChange}/>
 			 <Button onClick={this.handleClick} />
        		{this.state.clicked ? <Display source={this.state.title} />: null}
 			</div>
 			
		);
	}
}

export default Content;
