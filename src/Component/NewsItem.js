import React from "react";

const NewsItem =(props)=> {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }} >
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}..</p>
            <p className="card-text"><small className="text-muted">By {!props.author?"Unknown":props.author} on {props.date}</small></p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
