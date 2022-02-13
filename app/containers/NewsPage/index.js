
import React from 'react';
import './index.css';
import { render } from "react-dom";
import loader from './ajax-loader.gif';
import $ from 'jquery';
import './news_script';


export default class Colorful extends React.Component {

  render() {

    $("iframe").contents().find("a[href*=https://feedgrabbr.com]").css("visibility" , "hidden");

    return (

      <div className="NewsContent">
        
        <div className="Info_head">
        <p className="subtitle fancy">
          <span>АвтоНовости</span>
        </p>
        </div>

        <div className="feed_wrapper">
        <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=d4651f31f7978a187547df1b2" ></iframe>
        </div>

        </div>



    );
  }
};



