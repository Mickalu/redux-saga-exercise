import React from 'react'
import TinderContainer from '../containers/TinderContainer'

import Header from './Header'
import Menu from './Navigations/Menu'

class Main extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: { open: true }
    }
  }

  toggleMenu () {
    this.setState({ menu: { open: !this.state.menu.open } })
  }

  render () {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://reactjs.academy" target="_blank" rel="noopener noreferrer">ReactJS Academy</a>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li>
                <button onClick={this.toggleMenu} className="btn btn-lg btn-outline">
                  <i className="fa fa-heart" />
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Header />

        <section id="beers">
          <div className="container">
            <TinderContainer />
          </div>
        </section>

        <footer className="text-center">
          <div className="footer-above">
            <div className="container">
              <div className="row">
                <div className="footer-col col-md-4">
                  <h3>Main Location</h3>
                  <p>
                    <span>1 Fore Stree</span>
                    <br />
                    <span>London, EC2Y 5EJ</span>
                    <br />
                    <span className="fa fa-map-marker" />
                    <a target="_blank" href="https://reactjs.academy/react-redux-training" rel="noopener noreferrer"> Other Locations </a>
                  </p>
                </div>
                <div className="footer-col col-md-4">
                  <h3>Around the Web</h3>
                  <ul className="list-inline">
                    <li>
                      <a target="_blank" href="https://github.com/reactjs-academy" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-github" /></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/reactjsacademy" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-twitter" /></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/reactjsacademy/" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-instagram" /></a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col col-md-4">
                  <h3>About ReactJS Academy</h3>
                  <p>
                    <a href="https://reactjs.academy/" target="_blank" rel="noopener noreferrer">ReactJS Academy </a>
                    <span>
                      is devoted to teach ReactJS across Europe, providing free workshops and private trainings.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span>Copyright &copy;</span> <a href="https://reactjs.academy/" target="_blank" rel="noopener noreferrer">ReactJS Academy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Main
