import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Labels from './Labels'
import BlogPostsFrontPage from './BlogPostsFrontPage'
import BlogPostArchive from './BlogPostArchive'
import BlogPostsByUser from './BlogPostsByUser'
import BlogPostsByLabel from './BlogPostsByLabel'
import SideBar from './SideBar'
import Footer from './Footer'

import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Labels />
        </div>

        <main role="main" className="container">
          <div className="row">
            <Switch>
              <Route exact path={this.props.match.url} component={BlogPostsFrontPage} />
            </Switch>

            <SideBar />
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default Home
