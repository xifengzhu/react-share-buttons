import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import css from './css/share.scss'
import QRCode from 'qrcode.react'

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  sites: PropTypes.array,
};

// var site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
// var title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
// var description = getMetaContentByName('description') || getMetaContentByName('Description') || '';
// var image = (document.images[0] || 0).src || ''
var site = "baidu.com"
var title = "My Title"
var description = "My Description"
var image = ""

const defaultProps = {
  url: 'baidu.com',
  origin: 'baidu.com',
  source: site,
  title: title,
  description: description,
  image: image,
  site: "baidu.com",
  sites: ["douban", "qq"],
  wechatQrcodeTitle: '微信扫一扫：分享',
  // wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
  wechatQrcodeHelper: '微信里点“发现”，扫一下,二维码便可将本文分享至朋友圈。',
};

class ShareButtons extends React.Component {

  render(){
    //TODO: summary 和 description是一样的
    var sites = this.props.sites
    var url = encodeURIComponent(this.props.url)
    var title = encodeURIComponent(this.props.title)
    var description = encodeURIComponent(this.props.description)
    var image = encodeURIComponent(this.props.image)
    var site = encodeURIComponent(this.props.site)
    var origin = encodeURIComponent(this.props.origin)
    var summary = encodeURIComponent(this.props.summary)
    var source = encodeURIComponent(this.props.source)
    var wechatQrcodeTitle = this.props.wechatQrcodeTitle
    var wechatQrcodeHelper = this.props.wechatQrcodeHelper

    const templates = {
      qzone: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${description}&summary=${summary}&site=${source}`,
      qq: `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${source}&desc=${description}`,
      tencent: `http://share.v.t.qq.com/index.php?c=share&a=index&title=${title}&url=${url}&pic=${image}`,
      weibo: `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${image}`,
      wechat: `javascript:`,
      douban: `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`,
      diandian: `http://www.diandian.com/share?lo=${url}&ti=${title}&type=link`,
      linkedin: `http://www.linkedin.com/shareArticle?mini=true&ro=true&title=${title}&url=${url}&summary=${summary}&source=${source}&armin=armin`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${origin}`,
      google: `https://plus.google.com/share?url=${url}`
    };

    var html = _.map(sites, function (site) {
      if(site === "wechat"){
        var doc = <div className='wechat-qrcode'>
                    <h4>{wechatQrcodeTitle}</h4>
                    <div className='qrcode'>
                      <QRCode value="http://google.com" size={100} />
                    </div>
                    <div className='help'>
                      <p>{wechatQrcodeHelper}</p>
                    </div>
                  </div>
        return (
          <a className='social-share-icon icon-wechat' target='_blank' href='javascript:'>
            {doc}
          </a>
        )
      } else {
        var className = `icon-${site} social-share-icon`
        return (
          <a className={className} href={templates[site]} target="_blank"></a>
        )
      }
    })
    return(
      <div className="social-share">
        {html}
      </div>
    )
  };
};

ShareButtons.propTypes = propTypes;
ShareButtons.defaultProps = defaultProps;

export default ShareButtons;