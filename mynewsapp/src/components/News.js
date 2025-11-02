import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 4,
    category: "general",
    page: 1,
    totalResults: 0

  };

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    page: PropTypes.number,
    totalResults: PropTypes.number
  };

  articles = []

  capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {      
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Momo`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (!(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize)))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
    if (!(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize)))) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
      console.log(this.state.page);
    }

  }

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
    console.log(this.state.page);
  }

   fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
    console.log(this.state.pageSize);
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{ margin: '40px 0px' }}>NewsMomo - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        { this.state.loading && <Spinner /> }
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div>
            <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} sourceName={element.source.name} />
              </div>
            })}

          </div>
          </div>
          
        </InfiniteScroll>
        {/*<div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page === 1 ? true : false} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" disabled={(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize)))} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      */}
      </div>

    )
  }
}

export default News