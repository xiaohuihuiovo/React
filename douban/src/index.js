import React from 'react';
import ReactDOM from 'react-dom';
import FetchJSONP from 'fetch-jsonp';
import App from '@/components/App';
// import '@/config';

React.Component.prototype.baseURL = 'https://api.douban.com';
React.Component.prototype.$http = FetchJSONP;
React.Component.prototype.apikey = '0df993c66c0c636e29ecbb5344252a4a';

ReactDOM.render(<App />, document.querySelector('#root'));
