import React from 'react';
import ReactDOM from 'react-dom';
import ShareButtons from '../src';

class App extends React.Component {
  render() {
    return (
      <div>
        <ShareButtons sites = {["qzone", "weibo", "google", "twitter", "qq", 
          "tencent", "wechat", "douban", "linkedin", "facebook" ]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));