import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
            {sourceName}
          </span>
          <img src={imageUrl ? imageUrl : "https://as2.ftcdn.net/v2/jpg/01/82/47/23/1000_F_182472344_fQKazLfHof7XzPwJmq1RVTpNqKGDHGom.jpg"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title" >{title}....<span class="badge text-bg-secondary">New</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem