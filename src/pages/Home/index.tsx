/* eslint-disable jsx-a11y/anchor-is-valid */
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { AppleOutlined } from '@ant-design/icons';

import thinkImg from '../../assets/oc-thinking.png';
import laptopImg from '../../assets/oc-on-the-laptop.png';
import typeImg from '../../assets/nc-woman-typing-on-machine.png';
import envelopeImg from '../../assets/undraw_envelope.svg';

import './index.scss';

function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="section">
        <div className="text-container">
          <div className="main-title">📝Inkio, a note-taking software that perfectly supports markdown syntax</div>
          <div className="sub-title">💡A thinking writing assistant that makes ideas happen better💥</div>
          <div className="download-group">
            <a href="https://apps.apple.com/cn/app/%E7%81%B5%E6%84%9F%E7%9B%92%E5%AD%90-markdown-%E7%AC%94%E8%AE%B0%E8%BD%AF%E4%BB%B6/id6453291713?mt=12" className="btn">
              <AppleOutlined />
              <div className="text">
                <span className="app-store">Mac App Store</span>
                <span className="download-text">Download</span>
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
          <img className="view" src={thinkImg} alt="think" />
        </div>
        <div className="text-container">
          <div className="title">📝Inspire creativity and connect minds🧠</div>
          <div className="sub-title">Have you ever encountered the problem of being inspired but nowhere to stay? Or are you overwhelmed by the complexity of information? We provide you with the perfect solution for creative collection, copywriting, and reading notes</div>
        </div>
      </div>
      <div className="section">
        <div className="text-container">
          <div className="title">🌓 The theme can be switched freely, day and night are at your disposal 🌘</div>
          <div className="sub-title">A variety of themes and theme colors can be switched freely, so that the screen of the night does not sting your eyes</div>
        </div>
        <div className="image-container">
          <img className="view" src={laptopImg} alt="think" />
        </div>
      </div>
      <div className="footer">
        <img className="email-icon" src={envelopeImg} alt="" />
        <div className="title">Contact us</div>
        <div className="email">ransixi@gmail.com</div>
        <div className="private-link">
          <Link to="/private">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;