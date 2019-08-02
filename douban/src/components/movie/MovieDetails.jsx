import React, {Component} from 'react';
import {Button} from 'antd';
export default class MovieeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        };
    }
    componentWillMount() {
        this.getDetails();
    }

    async getDetails() {
        const id = this.props.match.params.id;
        const res = await this.$http(`${this.baseURL}/v2/movie/subject/${id}?apikey=${this.apikey}`);
        const data = await res.json();
        console.log(data);
        this.setState({
            details: data
        });
    }
    handleClickBack = () => {
        this.props.history.goBack();
    }
    render() {
        console.log(this.state.details, 2333333)
        const {images,summary} = this.state.details;
        return (
            <div>
                <Button type="primary" onClick={() => this.handleClickBack()}>返回</Button>
                <img src={images && images.large} alt=""/>
                <p>{summary}</p>
            </div>
        );
    }
}