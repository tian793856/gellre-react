require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imagedata = require('../data/imagedata.json');

//获取图片相关的数据
let imagedatas =(function(data) {
for (var i = 0; i < data.length; i++) {
	data[i].imageURL = require("../images/"+data[i].filename);
}
	return data;
})(imagedata);

class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
     	<section className="image-sec">
     	</section>
     	<nav class="controller-nav">
     	</nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
