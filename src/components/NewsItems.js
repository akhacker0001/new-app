import React, { Component } from 'react';

export default class NewsItems extends Component {
    render() {
        let { urlToImage, url, title, content, source, date } = this.props;
        return (
            <div className="card my-3 mx-3"  >
                <span className="position-absolute top-0 start-100  badge rounded-pill bg-danger" style={{ transform: 'translate(-90%,-50%)' }}>
                    {source}
                </span>

                <img src={urlToImage} className="card-img-top" alt="..." />
                {/* <hr /> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <hr />
                    <p className="card-text">{content}</p>
                    <hr />
                    <div className="card-footer text-muted">
                        {date}
                    </div>
                    <a href={url} className="btn btn-sm btn-dark">read more</a>
                </div>

 

            </div>
        )
    }
}
