import React from 'react';

class Display extends React.Component {	

			constructor(props, context) {
				
			    super(props, context);
			    this.state = {
			    	data :[]
			    };
			  };

			  componentDidMount() {
			  	this.state.data = this.props.source.Search;
		        this.setState(this.state);
		        }

		        render() {
		          let details = this.state.data;
		          let src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMP3aUjS-fIma3HSv0FDKF965ESXIftmDBm5j286f8wGfNtkbP";
		          return (	<div>
		          			{details.map(function(detail){
					          	return (
					          			<div className="col col-lg-3 col-md-3 col-sm-6 col-xs-12 movie-detail">
					          				<p className="title-top">
					          				{ ((detail.Title).length > 25) ? 
										    (((detail.Title).substring(0,25)) + '...') : 
										    detail.Title }
										    </p>


						          			<div className="wrapper img-thumbnail">
						            			<img className="poster" alt={detail.Title+" Poster"} ref="myInput" src={detail.Poster==="N/A" ? src : detail.Poster }/>
							          			<div className="mask">
							          			<h3 className="title ">{detail.Title}</h3>
							          				<div className="movie-description clearfix">
							          						<p className=" "><span className="glyphicon glyphicon-film"></span>&nbsp;{detail.Type}&nbsp;|&nbsp;<span className="glyphicon glyphicon-calendar"></span>&nbsp;{detail.Year}</p>
							          				</div>
							          			</div>
							          			
							          		</div>
					          			</div>
					          		);
			            	})}
		          			</div>
		          		);
		        }
	      }


export default Display;