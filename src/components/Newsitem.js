import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{this.props.source}</span>
                    <img src={this.props.imageurl} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text"><small className="text-muted">Published on : {new Date(this.props.date).toLocaleString()}</small></p>
                            <a href={this.props.newsurl} target="_blank" className="btn btn-dark">Read More</a>
                        </div>
                </div> 
            </div>
        )
    }
}
