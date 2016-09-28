import React from 'react';

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <p>
          <em className="avatar__name">{this.props.email}</em>
        </p>
        <img src={this.props.src} className="img-rounded"/>
      </div>
    );
  }
}
