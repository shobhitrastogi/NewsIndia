import React, { useEffect, useState } from "react";

const Newss = (props) => {
  const [news, setNews] = useState([]);
  const [page, setpage] = useState(1)
  const BASE_URL = "https://newsapi.org/v2/top-headlines"
  // const [pageSize,setpagesize]=useState(8)
  useEffect(() => {
    fetchNews();
  },[]);

  const fetchNews = async () => {
   
    const response = await fetch(
      `${BASE_URL}?country=${props.country}&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=${page}&pageSize=15`
    );
    setpage(1)
    const data = await response.json();
    setNews(data.articles);
  };
  const handlep = async () => {
    console.log("hello");
    const response = await fetch(
      `${BASE_URL}?country=${props.country}&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=${page-1}&pageSize=15`
    );
    setpage(page-1)
    const data = await response.json();
    setNews(data.articles);
  }
  const handlen = async () => {
    // console.log("ji");
    // const API_KEY = "fd901a2f2f7b4dc9876db7ba26fdddb2";
    // const response = await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${API_KEY}&category=${props.category}&page=${page+1}&pageSize=15`
    // );
    // const data = await response.json();
    // setNews(data.articles);
    fatchmoredata()
  }
  const fatchmoredata = async () => {
    console.log("ji");
    const response = await fetch(
      `${BASE_URL}?country=${props.country}&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=${page+2}&pageSize=15`
    );
    setpage(page+2)
    const data = await response.json();
    setNews(data.articles);
    }

  return (
    <>
      <div className="container my-2">
        <div className="row text-center">

          {news.map((article) => {
            return (
              <div className="col my-2">

                <div className="card" style={{ width: "15rem" }} key={article.title}>
                  <img src={article.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>
      <div className="container ">
        <nav aria-label="Page navigation example ">
          <ul className="pagination d-flex justify-content-between">
            <li className="page-item ">
              <button className="page-link " onClick={handlep} to="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;Previous</span>
              </button>
            </li>

            <li className="page-item ">
              <button className="page-link" onClick={handlen} to="/" aria-label="Next">
                <span aria-hidden="true">Next&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Newss;
