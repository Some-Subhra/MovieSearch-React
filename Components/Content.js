import React from 'react';
import Display from './Display';


class Button extends React.Component {
  render() {
    return (
    	<div className="">
      		<button type="submit" className="btn btn-success" {...this.props}>
        	<span className="glyphicon glyphicon-search"></span>
       		</button>
       </div>
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
		event.preventDefault();
		event.stopPropagation();
		var search = this.state.url+this.state.title;

		 var myInit = {
		          	method:"GET"
		          };
		          fetch(search, myInit).then((response) => {
		          	return response.json();
		          }).then((data) => {
		          	this.setState({clicked:true,title:data});
		          });
		          this.setState({clicked:false});
    }

	render() {
		return(
			<div>
			<form className="form-group" onSubmit={this.handleClick}>
				<div className="searchArea input-group">
			         <input type="text" className="searchField form-control" id="usr" placeholder="Search Movies By Movie Title/Name" onKeyUp={this.handleSearchChange} />
			         <span className="input-group-addon">
				         <Button />
		        	 </span>
		      	</div>
 			</form>
 			{this.state.clicked ? <Display source={this.state.title} />: null}
 			</div>
		);
	}
}

export default Content;
