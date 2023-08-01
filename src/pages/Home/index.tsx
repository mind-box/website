/* eslint-disable jsx-a11y/anchor-is-valid */
import { JSX } from 'react';
import { AppleOutlined } from '@ant-design/icons';

import thinkImg from '../../assets/oc-thinking.png';
import laptopImg from '../../assets/oc-on-the-laptop.png';
import typeImg from '../../assets/nc-woman-typing-on-machine.png';
import funUnderlineImg from '../../assets/undraw_fun-underline.svg';
import curvedUnderlineImg from '../../assets/undraw_curved-underline.svg';
import codeImg from '../../assets/undraw_code.svg';
import coffeeImg from '../../assets/undraw_coffee.svg';
import noteImg from '../../assets/undraw_note.svg';
import envelopeImg from '../../assets/undraw_envelope.svg';
import funArrowImg from '../../assets/undraw_fun-arrow.svg';

import './index.scss';

function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="section">
        <div className="text-container">
          <img className="fun-underline" src={funUnderlineImg} alt="" />
          <img className="fun-arrow" src={funArrowImg} alt="" />
          <div className="title">💡会思考的写作助手，让创意更好的发生💥</div>
          <div className="sub-title">灵感盒子，一款完美支持 markdown 语法的笔记软件</div>
          <div className="download-group">
            <a href="https://apps.apple.com/cn/app/%E7%81%B5%E6%84%9F%E7%9B%92%E5%AD%90-markdown-%E7%AC%94%E8%AE%B0%E8%BD%AF%E4%BB%B6/id6453291713?mt=12" className="btn">
              <AppleOutlined />
              <div className="text">
                <span className="app-store">App Store</span>
                <span className="download-text">下载</span>
              </div>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img className="view" src={typeImg} alt="think" />
        </div>
      </div>
      <div className="section">
        <div className="image-container">
          <img className="code" src={codeImg} alt="" />
          <img className="coffee" src={coffeeImg} alt="" />
          <img className="note" src={noteImg} alt="" />
          <img className="view" src={thinkImg} alt="think" />
        </div>
        <div className="text-container">
          <img className="circle-arrow" src={curvedUnderlineImg} alt="" />
          <div className="title">📝 激发创意，连接思维 🧠</div>
          <div className="sub-title">你是否曾经遇到过灵感如云却无处驻留的困扰？或者对于繁杂的信息束手无策？我们为你提供创意收集、文案写作、读书笔记的完美解决方案</div>
        </div>
      </div>
      <div className="section">
        <div className="text-container">
          <div className="title">🌓 主题自由切换，白昼暗夜任你选 🌘</div>
          <div className="sub-title">多种主题及主题色自由切换，让黑夜的屏幕不在刺痛你的眼</div>
        </div>
        <div className="image-container">
          <img className="view" src={laptopImg} alt="think" />
        </div>
      </div>
      <div className="footer">
        <img className="email-icon" src={envelopeImg} alt="" />
        <div className="title">联系我们</div>
        <div className="email">ransixi@gmail.com</div>
      </div>
    </div>
  );
}

export default Home;