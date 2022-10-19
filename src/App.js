import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  
  state ={
    progress : 0
  }

  setprogress = (progress) =>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <BrowserRouter>

        <Navbar/>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        />

        <Routes>
          <Route path="/" element={<News setprogress={this.setprogress}  key={'general'}/>}/>
          <Route path="sports" element={<News setprogress={this.setprogress}  key={'sports'} category='sports' title='TOP HEADLINES - SPORTS'/>}/>
          <Route path="business" element={<News setprogress={this.setprogress}  key={'business'} category='business' title='TOP HEADLINES - BUISNESS'/>}/>
          <Route path="entertainment" element={<News setprogress={this.setprogress}  key={'entertainment'} category='entertainment' title='TOP HEADLINES - ENTERTAINMENT'/>}/>
          <Route path="health" element={<News setprogress={this.setprogress}  key={'health'} category='health' title='TOP HEADLINES - HEALTH'/>}/>
          <Route path="science" element={<News setprogress={this.setprogress}  key={'science'} category='science' title='TOP HEADLINES - SCIENCE'/>}/>
          <Route path="technology" element={<News setprogress={this.setprogress}  key={'technology'} category='technology' title='TOP HEADLINES - TECHNOLOGY'/>}/>
        </Routes>
        
      </BrowserRouter>
    )
  }
}
