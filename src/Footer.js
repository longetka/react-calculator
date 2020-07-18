import React from 'react'
import './styles/Footer.scss'

export default () => {
  return (
    <footer>
      <a 
        className="social-link" 
        href="mailto:longetka@gmail.com" 
        title="Google почта"
      >
        <img 
          src={require('./img/gmail.png')} 
          alt="gmail"
        />
      </a>
      <a 
        className="social-link" 
        href="mailto:longetka@live.ru" 
        title="Outlook почта">
          <img 
            src={require("./img/mail.png")} 
            alt="outlook mail"
          />
      </a>
      <a 
        className="social-link" 
        href="https://vk.com/id101272510" 
        title="Вконтакте"
      >
        <img 
          src={require("./img/vk.png")} 
          alt="vkontakte"
        />
      </a>
      <a 
        className="social-link" 
        href="https://www.facebook.com/decherepanov" 
        title="Facebook"
      >
        <img 
          src={require("./img/facebook.png")} 
          alt="facebook"
        />
      </a>
      <a 
        className="social-link" 
        href="https://t.me/DisaReDisa" 
        title="Telegram"
      >
        <img 
          src={require("./img/telegram.png")} 
          alt="telegram"
        />
      </a>
      <a 
        className="social-link"
        href="https://github.com/longetka/react-calculator.git">
          <img 
          src={require('./img/pngkey.com-github-icon-png-1787243.png')} 
          alt="GitHub"/>
      </a>
    </footer>
  )
}