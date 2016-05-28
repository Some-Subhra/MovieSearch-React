import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

React.render(<Header />, document.getElementById('header'));
React.render(<Content />, document.getElementById('content'));
React.render(<Footer />, document.getElementById('footer'));



// var $ = require ('jquery');
// var ImageCollect = React.createClass({
//         getInitialState: function() {
//           return {
//             pImage: []
//           };
//         },

//         componentDidMount: function() {
//           var self = this;
//           $.get(this.props.source, function(result) {
//             var collection = result.Poster;
//             if (this.isMounted()) {
//               this.setState({
//                 pImage: collection
//               });
//             }
//           }.bind(this));
//         },

//         render: function() {
//           let images = this.state.pImage || [];
//           return (
//             <div>
//               <img  ref = "myInput" src={images}/>
//             </div>
//           )
//         }
//       });

//     ReactDOM.render(
//     <ImageCollect source="http://www.omdbapi.com/?t=titanic&y=&plot=short&r=json" />,
//       document.getElementById('content')
//     );
