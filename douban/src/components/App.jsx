import React, { Component } from 'react';
import FetchJSONP from 'fetch-jsonp';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import HomeContainer from '@/components/home/HomeContainer';
import MovieContainer from '@/components/movie/MovieContainer';
import AboutContainer from '@/components/about/AboutContainer';

import cssobj from '@/css/app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<Layout className="layout" style={{ height: '100%' }}>
					<Header>
						<div className={cssobj.logo} />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}
							style={{ lineHeight: '64px' }}
						>
							
							<Menu.Item key="home">
								<Link to="/home">首页</Link>
							</Menu.Item>
							<Menu.Item key="movie">
								<Link to="/movie">电影</Link>
							</Menu.Item>
							<Menu.Item key="about">
								<Link to="/about">关于</Link>
							</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ backgroundColor: '#fff' }}>
						<Route exact path="/" render={() => <Redirect to="/home" />} />
						<Route path="/home" component={HomeContainer} />
						<Route path="/movie" component={MovieContainer} />
						<Route path="/about" component={AboutContainer} />
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©{new Date().getFullYear()} Created by Ant UED
					</Footer>
				</Layout>
			</Router>
		);
	}
}
