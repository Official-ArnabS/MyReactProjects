import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = `${this.capitalizeFirstLetter(props.category)} - News Momo`;


  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  

  const updateNews=async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  
  
/*
  const handleNextClick = async () => {

    if (!(page + 1 > (Math.ceil(totalResults / props.pageSize)))) {
      setPage(page+1);
      updateNews();
    }

  }

  const handlePreviousClick = async () => {

 
    setPage(page-1)
    updateNews();

  }
*/
  const fetchMoreData = async () => {
    setPage(page+1)
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  };

  
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{ margin: '40px 0px' }}>NewsMomo - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        { loading && <Spinner /> }
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div>
            <div className="row">
            {articles.map((element) => {
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
        
      </div>

    )
  
}

News.defaultProps = {
    country: "us",
    pageSize: 4,
    category: "general",
    page: 1,
    totalResults: 0

  };

 News.propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    page: PropTypes.number,
    totalResults: PropTypes.number
  };

export default News