import React, { Component } from 'react';
//import logo from './logo.svg';
import { Dialog, DialogContent } from 'react-mdl';

class SearchSquare extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }



  render() {
    console.log(this.props);
    console.log(this.props.venueRatingColor)
    var customColor = '';


      customColor = "#" + this.props.venueRatingColor;
    
    console.log('CC: ' + customColor);



    return (
      <div className="search-square">
        <img className="search-image" src={this.props.image} alt={this.props.venueId} />
        {/*The venue id: {this.props.venueId}*/}


        {/*taking out overlay for testing purposes*/}
        <div className="overlay" onClick={this.handleOpenDialog}  >
          <div className="overlay-text">{this.props.venueName}</div>
        </div>



        <Dialog open={this.state.openDialog} className="modal light">

          {/* onClick={this.handleClose}*/}
          <button type='button' className='exit light' onClick={this.handleCloseDialog}>X</button>
          <DialogContent className="light">

            <img className="photo" src={this.props.image} alt={this.props.venueID} />
            <div className="info">
              <h1 className="light modal-heading">{this.props.venueName}</h1>
              <div><span className="subheading">Rating: </span><span className="rating" style={{color: customColor}}>{this.props.venueRating}/10</span></div>
              <span className="links">
                <a href={this.props.venueWebsite} className="button">Website</a>
                <a className="button" href={this.props.venueMenus}>Menu</a>
              </span>
              <p><span className="subheading">Address: </span>{this.props.venueAddress}</p>
              <p><span className="subheading">Phone: </span>{this.props.venuePhone}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


export default SearchSquare;

