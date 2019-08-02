import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {Link, Redirect, Route, Switch} from 'react-router-dom';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

export default class MovieContainer extends Component {
	render() {
		return (
			<Layout style={{height: '100%'}}>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={[location.hash.split('/')[2] || 'in_theaters']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
						<Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
						<Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px' }}>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280
						}}
					>
                        {/* /movie/details/${id} */}
                        <Switch>
                            <Route exact path="/movie" render={()=><Redirect to="/movie/in_theaters/1"/>}/>
                            <Route path="/movie/details/:id" component={MovieDetails}/>
                            <Route path="/movie/:type/:page" component={MovieList}/>
                        </Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
