import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://as2.ftcdn.net/v2/jpg/01/82/47/23/1000_F_182472344_fQKazLfHof7XzPwJmq1RVTpNqKGDHGom.jpg"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem