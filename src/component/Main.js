import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

import Content from './Content';

let timeOut;

export default class Main extends Component {
  state = {
    delayed: false
  }

  componentDidMount() {
    timeOut = setTimeout(() => {
      this.setState({delayed: true});
    }, 20000);
  }

  componentWillUnmount() {
    clearTimeout(timeOut);
  }

  render() {
    const {data: {basics, advance, es6, daily, soft}} = this.props;
    const { delayed } = this.state;
    const delayMsg = <span>I have got a bad server... If your internet connection is not slow, please reload</span>;

    return (
      <section className="content-area">
        {basics.length > 0 ? <Content title="জাভাস্ক্রিপ্ট ব্যাসিক" data={basics} color="#F0DB4F" topic="basic" /> : <div className="loading-bar"><BarLoader color={'#F0DB4F'} />{delayed ? delayMsg : ''}</div>}
        {advance.length > 0 ? <Content title="জাভাস্ক্রিপ্ট অ্যাডভান্স" data={advance} color="#F44336" topic="advance" /> : <div className="loading-bar"><BarLoader color={'#F44336'} />{delayed ? delayMsg : ''}</div>}
        {es6.length > 0 ? <Content title="জাভাস্ক্রিপ্ট ইএস৬" data={es6} color="#BDBDBD" topic="es6" /> : <div className="loading-bar"><BarLoader color={'#BDBDBD'} />{delayed ? delayMsg : ''}</div>}
        {/**dom.length > 0 ? <Content title="জাভাস্ক্রিপ্ট ডম" data={dom} color="#FFC107" topic="js-dom" /> : <div className="loading-bar"><BarLoader color={'#FFC107'} />{delayed ? delayMsg : ''}</div>**/}
        <p style={{textAlign: 'center', marginBottom: '40px', padding: '25px', textTransform: 'uppercase'}}>Posts on JavaScript DOM is Coming Soon, <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/photo.php?fbid=1928931623852850&set=a.108061722606525&type=3&permPage=1">Help me</a> to make the list better</p>
        {daily.length > 0 ? <Content title="নিত্যদিনের জাভাস্ক্রিপ্ট" data={daily} color="#4CAF50" topic="daily" /> : <div className="loading-bar"><BarLoader color={'#4CAF50'} />{delayed ? delayMsg : ''}</div>}
        {soft.length > 0 ? <Content title="জাভাস্ক্রিপ্ট সফট স্কিল" data={soft} color="#000" topic="soft" /> : <div className="loading-bar"><BarLoader color={'#000'} />{delayed ? delayMsg : ''}</div>}
      </section>
    )
  }
}
