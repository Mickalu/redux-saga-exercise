import React from 'react'

class Actions extends React.Component {
  constructor () {
    super()
    this.dislikeButton
    this.likeButton
  }

  componentDidMount () {
    this.likeButton.focus()
  }

  render () {
    return (
      <div className="container" style={{ background: 'white', borderRadius: '0 0 25px 25px' }}>
        <ul className="list-unstyled list-inline text-center game-actions">
          <li>
            <button
              ref={node => this.dislikeButton = node}
              onClick={this.props.dislike}
              type="button"
              className="btn btn-danger btn-circle btn-xl"
              name="dislikeBtn"
              data-testId="dislikeBtn"
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </li>
          <li />
          <li>
            <button
              ref={node => this.likeButton = node}
              onClick={this.props.like}
              type="button"
              className="btn btn-success btn-circle btn-xl"
              name="likeBtn"
              data-testId="likeBtn"
            >
              <i className="fa fa-heart" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

Actions.propTypes = {
  like: React.PropTypes.func,
  dislike: React.PropTypes.func
}

export default Actions
