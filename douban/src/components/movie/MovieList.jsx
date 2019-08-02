import React, { Component } from 'react';
import { Spin, Card, Rate, Pagination } from 'antd';
const { Meta } = Card;

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: props.match.params.type,
			nowPage: props.match.params.page,
			isLoading: true,
			movelist: [],
            pageCount: 10,
            total: 0
		};
	}
	componentWillMount() {
		this.getMoveList();
	}
	componentWillReceiveProps(nextProps, nextState) {
        console.log(2333444);
		const { type, page: nowPage } = nextProps.match.params;
		this.setState({ type, nowPage, isLoading: true }, this.getMoveList);
	}
	async getMoveList() {
		const { type, nowPage, pageCount } = this.state;
		// 1 0 ~ 10
		// 2 10 ~ 20
		// 3 20 ~ 30
		const start = (nowPage - 1) * pageCount;
		const res = await this.$http(
			`${this.baseURL}/v2/movie/${type}?start=${start}&count=${pageCount}&apikey=${this.apikey}`
		);
		const data = await res.json();
		console.log(data);
		this.setState({
			isLoading: false,
            movelist: data.subjects,
            total: data.total
		});
	}
	handlePageChange = (nowPage, pageCount) => {
        // this.setState({
        //     nowPage,
        //     pageCount
        // }, this.getMoveList);
        const {type} = this.state;
        this.props.history.push(`/movie/${type}/${nowPage}`);
    };
    handleClickCard = (id) => {
        this.props.history.push(`/movie/details/${id}`)
    }
	render() {
        console.log(4555)
		const { isLoading, movelist, nowPage, pageCount,total } = this.state;
		return (
			<div>
				{isLoading
					? <Spin />
					: <div>
							<div style={{ display: 'flex', flexWrap: 'wrap' }}>
								{movelist.map(item =>
									<Card
										key={item.id}
										hoverable
										style={{ width: 240, margin: 10 }}
										// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
										cover={<img alt="example" src={item.images.small} />}
                                        onClick={() => this.handleClickCard(item.id)}
									>
										<Meta title={item.title} />
										<p>
											分类：{item.genres.join(',')}
										</p>
										<Rate defaultValue={item.rating.average / 2} />
									</Card>
								)}
							</div>
							<Pagination
								defaultCurrent={parseInt(nowPage)}
								total={500}
								onChange={(page, pageSize) => this.handlePageChange(page, pageSize)}
								defaultPageSize={pageCount}
                                total={total}
							/>
						</div>}
			</div>
		);
	}
}
