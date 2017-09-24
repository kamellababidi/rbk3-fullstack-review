import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

  $.ajax({
  url: "http://127.0.0.1:8000/kamel",
  cache: false,
  success: function(data){
      ReactDOM.render(<App data={data}/>, document.getElementById('app'));
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
   // this.final=0
    this.state = { 
      repos: []
    }
  }

  search (term) {
  console.log(`${term} was searched`);
   console.log("hi allllllllll")
   console.log('here is data:'+this.props.data)
   var koko=this
    this.state.repos.push(1)
   // if(typeof(this.final)==='string'){
   //  this.state.repos.push(1)
   //  console.log(this.state.repos)
   //  this.forceUpdate()
   // }
   // if(typeof(this.final)==='string'){
   //   this.setState({
   //    repos: [this.final]
   //  })
   // }
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.props.data}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

