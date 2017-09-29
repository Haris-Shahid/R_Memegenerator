import React, { Component } from 'react' ;

import { connect } from 'react-redux' ;

class Mymeme extends Component {
  render() {
    return (
      <div>
        {
            this.props.myMemes.map((meme , index) => {
                return (
                    <img key={index} src={meme.data.url} alt="My Meme" className="my-meme-img" />
                )
            })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        myMemes: state.myMeme
    }
}

export default connect( mapStateToProps , null )(Mymeme)