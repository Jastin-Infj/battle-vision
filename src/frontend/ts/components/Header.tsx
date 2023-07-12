import React from "react";

import Messages from '../../json/Strings.json';
import '../../scss/_layerbase.scss';

//test
import { MyContext } from "./Canvas";

function Header() {
  return (
    <>
      <header>
        <div className="header__text_Demo">
          <p>{Messages.Page.Header.Texts.Demo1}<br />{Messages.Page.Header.Texts.Demo2}</p>
        </div>
        <div className="header__textbox_search">
          <img />
          <input type="text" placeholder={Messages.Page.Header.Textbox.search} id="name" />
        </div>
        <div className="header__icon_step">
          <div>
            <div className="stepflow"></div>
            <span className="main">
              {Messages.Page.Header.Icon.Steps.Text1}
              <span className="back">{Messages.Page.Header.Icon.Steps.Text1}</span>
            </span>
            <div className="arrow"></div>
          </div>
          <div>
            <div className="stepflow"></div>
            <span className="main">
            {Messages.Page.Header.Icon.Steps.Text2}
              <span className="back">{Messages.Page.Header.Icon.Steps.Text2}</span>
            </span>
            <div className="arrow"></div>
          </div>
          <div>
            <div className="stepflow"></div>
            <span className="main">
            {Messages.Page.Header.Icon.Steps.Text3}
              <span className="back">{Messages.Page.Header.Icon.Steps.Text3}</span>
            </span>
            <div className="arrow"></div>
          </div>
          <div>
            <div className="stepflow"></div>
            <span className="main">
            {Messages.Page.Header.Icon.Steps.Text4}
              <span className="back">{Messages.Page.Header.Icon.Steps.Text4}</span>
            </span>
          </div>
        </div>
        <div className="header__icon_login">
          <div className="icon">
            <img className="none"/>
          </div>
          <div className="logout disabled">
            <span>
            {Messages.Page.Header.Icon.Logins.Logout}
              <span>{Messages.Page.Header.Icon.Logins.Logout}</span>
            </span>
          </div>
          <div className="login disabled">
            <span>
            {Messages.Page.Header.Icon.Logins.Login}
              <span>{Messages.Page.Header.Icon.Logins.Login}</span>
            </span>
          </div>
        </div>
        <div className="header__box_menu">
          <ul>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text1}
                <span className="back">{Messages.Page.Header.Box.Menus.Text1}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text2}
                <span className="back">{Messages.Page.Header.Box.Menus.Text2}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text3}
                <span className="back">{Messages.Page.Header.Box.Menus.Text3}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text4}
                <span className="back">{Messages.Page.Header.Box.Menus.Text4}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text5}
                <span className="back">{Messages.Page.Header.Box.Menus.Text5}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text6}
                <span className="back">{Messages.Page.Header.Box.Menus.Text6}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text7}
                <span className="back">{Messages.Page.Header.Box.Menus.Text7}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text8}
                <span className="back">{Messages.Page.Header.Box.Menus.Text8}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text9}
                <span className="back">{Messages.Page.Header.Box.Menus.Text9}</span>
              </span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;