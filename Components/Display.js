import React from 'react';

class Display extends React.Component {	

			constructor(props, context) {
				
			    super(props, context);
			    this.state = {
			    	data :[]
			    };
			  };

			  componentDidMount() {
			  	// console.log("prop",this.props.source);
			  	this.state.data = this.props.source.Search;
		        this.setState(this.state);
		        console.log("props source",this.state.data);
		         //  var myInit = {
		         //  	method:"GET"
		         //  };
		         //  console.log("url",this.props.source);
		         // // console.log("props",this.props.getclick);
		         //  fetch(this.props.source, myInit).then((response) => {
		         //  	return response.json();
		         //  }).then((data) => {
		         //  	this.state.list = data;
		         //  	this.setState(this.state);
		         //  	console.log("state",this.state);
		         //  	//this.props.getclick = false;
		         //  });
		          // console.log("componentdid",this.props);
		        }

		        render() {
		          let details = this.state.data;
		          return (	<div>
		          			{details.map(function(detail){
					          	return (
					          			<div>
					          			<h2>{detail.Title}</h2>
				            			<img ref = "myInput" src={detail.Poster}/>
					          			</div>
					          		);
			            	})}
		          			</div>
		          		);
		        }
	      }


export default Display;