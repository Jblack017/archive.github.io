import React, { Component } from "react";

export default class AdSense extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <div>
        <ins
          className='adsbygoogle'
          style={{ display: "inline-block", width: "300px", height: "600px" }}
          data-ad-client='ca-pub-7055469402862446'
          data-ad-slot='8578260498'
          data-ad-format='auto'
        ></ins>
      </div>
    );
  }
}
