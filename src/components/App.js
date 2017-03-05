import React, { Component } from 'react';
//Components
import Paper from 'material-ui/Paper';
import DatePicker from './DatePicker'
import ReactDisqusThread from 'react-disqus-thread'
import './App.css';

// Themeing/Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ShareButtons from './ShareButtons'

import Navbar from './Navbar'
import Menu from './Menu'
// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'flex',
};

class App extends Component {
  state = {
    menuOpen: false,
    gDob: null,
    hDob: null,
    age: 0
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleUpdateState = (state) => this.setState(state);
  componentDidMount() {

    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-9830666121561703",
        enable_page_level_ads: true
      });

      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
  render() {


    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <Navbar handleToggle={this.handleToggle} />
          <div className="App-content">
            <Paper style={{ ...style, ...{ width: 320 } }} >
              <DatePicker handleUpdateState={this.handleUpdateState} gDob={this.state.gDob} />
            </Paper>
            {this.state.age > 0 &&
              <Paper style={{ ...style, ...{ width: 320, height: 280 } }} >
                <div className="App-result">
                  <div className="App-age">
                    <p> Hijri Age Calculation Result: </p>
                    <p className="App-age-result"> You are now <span className="App-age-number">{this.state.age}</span> years old</p>
                  </div>
                  <div className="App-dob">
                    <p> Date of Birth in Hijri: </p>

                    <p className="App-dob-hijri"> {this.state.hDob} </p>
                  </div>
                </div>
              </Paper>
            }
            <div className="App-ad">

              <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9830666121561703"
                data-ad-slot="1556531446"
                data-ad-format="auto">
              </ins>

            </div>

            <Paper style={{ ...style, ...{ width: 320, height: 60 } }} >
              <ShareButtons />
            </Paper>
            <Paper style={{ ...style, ...{ width: 320, height: 250 } }} >
              <div style={{ padding: 16, textAlign: 'justify' }} >
                <p> The Islamic, Muslim, or Hijri calendar (Arabic: التقويم الهجري‎‎ at-taqwīm al-hijrī) is a lunar calendar consisting of 12 months in a year of 354 or 355 days. It is used (often alongside the Gregorian calendar) to date events in many Muslim countries.</p>
                <p> Tags : <a href={window.location.href} >Hijri Age Calculator Online</a>, <a href={window.location.href} >Hijri Age</a>, <a href={window.location.href} >Islamic Age Calculator Online</a>, <a href={window.location.href} >Age Calculator Online</a></p>
              </div>
            </Paper>
            <div className="App-ad">
              <ReactDisqusThread
                shortname="hijri-age-calculator"
                identifier="hijri-age-calculator"
                title="Comments"
                url="https://hijriagecalculator.blogspot.com"
                category_id="1"
                onNewComment={() => { }}
              />
            </div>

          </div>

          <Menu
            menuOpen={this.state.menuOpen}
            handleUpdateState={this.handleUpdateState}
          />
        </div>

      </MuiThemeProvider >
    );
  }
}

export default App;
