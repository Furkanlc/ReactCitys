import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  state = {

    showİnfo: false

  };
  handleinfo = () => {

    this.setState({

      showİnfo: !this.state.showİnfo
    });

  }
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className='Tour'>

        <div className='img-container'>
          <img src={img} alt='' />
          <span className='closeBtn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close' />
          </span>


        </div>
        <div className='tourInfo'>

          <h3>{city} </h3>
          <h4>{name}</h4>
          <h5>

            info
            <span onClick={this.handleinfo}>

              <i class='fas fa-caret-square-down' />
            </span>
          </h5>
          {this.state.showİnfo && <p>{info}</p>}




        </div>

      </article>
    )
  }
}
