import React from 'react'
import Load from './loadComponent'
import ReactStars from 'react-stars';
import './App.css';


class App extends React.Component {

  state = {
    title: 'Some We Love, Some We Hate, Some We Eat: Why Its So Hard to Think Straight About Animals',
    author: 'Hal Herzog',
    img: '',//require('./img/ph.png'),
    rating: 3.56,
    pages: 263,
    year: 1998,
    info: 'No description available',
    isOpen: true,
    collapseClass: "coll",
    buttonStatus: "Get a random Book"
  }

  async fatherOfRequests() {
    try{
      const response = await fetch('/n');
      const res = await response.json();
      await this.setState({
          title: res.title[0],
          author: (res.authors[0].author.length > 1)? res.authors[0].author[0].name[0] + ' & ' +res.authors[0].author[1].name[0] : res.authors[0].author[0].name[0],
          img: res.image_url[0],
          rating: res.average_rating[0],
          pages: res.num_pages[0],
          year: res.publication_year[0],
          info: res.description[0],
          buttonStatus: "Get a random Book"
      })
      this.setState({
        collapseClass: "coll on"
      })
    } catch (error) {
    console.log('Father of Requests error is' + error );
    }
  }


  toggleInfo = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  collapseEvent = () => {

    if(this.state.collapseClass === "coll"){
      this.fatherOfRequests()
      this.setState({
        buttonStatus: <Load />
      })
    }else{
      this.setState({
        collapseClass: "coll",
        buttonStatus: "Get a random Book",
      })
    }

  }

  renderedInfo() {
   if (this.state.isOpen === true && this.state.info.length > 530) {
     return this.state.info.slice(0, 530);
   }
   return this.state.info;
  }


render() {
  return (
      <div className="wrapper">

            <div className={this.state.collapseClass}>
              <div className="container fi">
                <div className="row p-4">

                  <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <img  className="img-fluid" src={this.state.img} alt='sad.....'/>
                  </div>

                  <div className="col-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <div className="col-12">
                      <h4 className="text-left w-100 ml-4">{this.state.title}</h4>
                       <h6 className="text-left ml-4">by {this.state.author}</h6>
                    </div>
                    <div className="col-12">
                      <h6 className="d-flex justify-content-start w-100 ml-4">
                        <ReactStars count={5} value={parseFloat(this.state.rating)} half={true} edit={false} size={17} color2={'#ffd700'}/> &nbsp; {this.state.rating}</h6>
                      <h6 className="text-left  w-100 ml-4">Pages: {(Number(this.state.pages) !== 0 ) ? this.state.pages : 'unknown'}</h6>
                      <h6 className="text-left  w-100 ml-4">Published: {(Number(this.state.year) !== 0 ? this.state.year : 'unknown')}</h6>
                    </div>
                  </div>

                  <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-4 mr-5">
                    <p className="text-justify pt-3" >
                      <span>{(this.state.info === "") ? 'No available synopsis' : this.renderedInfo()}</span>
                      <a onClick={this.toggleInfo}>
                        {(this.state.info.length < 530) ? '' : this.state.isOpen ? '...more' : ' less'}
                      </a>
                    </p>
                  </div>

                </div>

              </div>
            </div>

            <div className="container">
              <div className="row">
                <button onClick={this.collapseEvent} className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 btn">
                  {this.state.buttonStatus}
                </button>
              </div>
            </div>

      </div>
  );
}
}

export default App;
