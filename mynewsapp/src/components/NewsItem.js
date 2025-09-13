import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div><div className="card" style={{width: "18rem"}}>
        <img src="https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
          </div>
      </div></div>
    )
  }
}

export default NewsItem