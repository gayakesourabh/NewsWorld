import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {

  static defaultProps = {
    category : 'general',
    title : 'TOP HEADLINES'
  }

  constructor(){
    super();
    this.state = {
      articles : this.articles,
      page : 1,
    }
  }

  async componentDidMount(){
    this.props.setprogress(20);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba285bf6a43c4609b50a41f85acd01f8`);
    this.props.setprogress(50);
    let parseddata = await data.json();
    this.props.setprogress(70);
    this.setState({articles : parseddata.articles});
    this.props.setprogress(100);
  }


  nextClick = async ()=>{
    this.props.setprogress(20);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba285bf6a43c4609b50a41f85acd01f8&page=${this.state.page + 1}`);
    this.props.setprogress(50);
    let parseddata = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles : parseddata.articles,
      page : this.state.page + 1
    });
    this.props.setprogress(100);

  }

  preClick = async ()=>{
    this.props.setprogress(20);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ba285bf6a43c4609b50a41f85acd01f8&page=${this.state.page - 1}`);
    this.props.setprogress(50);
    let parseddata = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles : parseddata.articles,
      page : this.state.page - 1
    });
    this.props.setprogress(100);
  }

  render() {
    return (
        <div className='container'>
            <p className='h1' style={{textAlign:'center',marginTop:'90px', marginBottom:'25px'}}>{this.props.title}</p>

            <div className="row">
            {this.state.articles?.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title} description={element.description} source={element.source.name}
                    imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt}/>
                </div>})}
            </div>

            <div className="container my-3 d-flex justify-content-between">
                <button disabled={this.state.page<=1} onClick={this.preClick} type="button" className="btn btn-info">&larr; Previous</button>
                <button type="button" onClick={this.nextClick} className="btn btn-info">Next &rarr;</button>
            </div>
        </div>
    )
  }
}
