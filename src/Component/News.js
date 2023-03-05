import React, { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
    
    const[articles , setarticles] = useState([])
    const[loading , setloading] = useState(true)
    const[page, setpage] = useState(1)
    const[totalResult, settotalResult] = useState(0)

    const updateNews = async () => { 
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=a87419def5ce492ab307715043866809&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parsedata = await data.json()
        setarticles(parsedata.articles)
        settotalResult(parsedata.totalResult)
        setloading(false)

    }
    useEffect(()=>{
        updateNews();
        // eslint-disable-next-line
    },[])

    const handleNextClick = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=a87419def5ce492ab307715043866809&page=${page+1}&pageSize=${props.pageSize}`;
       setpage(page+1)
       updateNews()
    }
    const handlePrevClick = async ()=>{
        setpage(page-1)
       updateNews()
    }
    // const fetchMoreData = async () => {
    //     setpage(page+1)
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=a87419def5ce492ab307715043866809&page=${page}&pageSize=${props.pageSize}`;
    //     setloading(true)
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     setarticles(articles.concat(parsedata.articles))
    //     settotalResult(parsedata.totalResult)
    //     setloading(false)
    //   };
    return (
        <>
      <h1 className="text-center">Top HeadLines</h1>
      {/* {loading && <Spinner/>} */}
      <div className="container my-3">
        <div className="row my-3">

        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResult}
          loader={<Spinner/>} 
         > */}
            {!loading && articles.map((element) => {
            return <div className="col-md-3" key={element.url}> 
                <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,45):""} imageUrl={element.urlToImage?element.urlToImage:"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1116b4f411a55e12b1b6a14fb290ebba.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt.slice(0,10)}/>
            </div>
            })}
        {/* </InfiniteScroll> */}
        <div className="d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
        <button disabled={page+1>Math.ceil(totalResult/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next  &rarr; </button>
        </div>
        </div>
      </div>
      </>
    )
  }
News.defaultProps ={
    category : "health",
    pageSize : "8"
}
News.propTypes ={
    category : PropTypes.string,
    pageSize : PropTypes.string
}
export default News