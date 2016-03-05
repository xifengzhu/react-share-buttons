import React from 'react';
import ReactDOM from 'react-dom';
import ShareButtons from '../src';

class App extends React.Component {
  render() {
    return (
      <div>
        <ShareButtons 
          sites = {["qzone", "weibo", "qq", 
          "tencent", "wechat", "douban" ]} 
          url = "https://github.com/DawnyWu/react-share-buttons"
          title = "react-share-buttons"
          description = "一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+ 的 react 组件"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));