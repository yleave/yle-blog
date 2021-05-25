import React from 'react';
import './cards.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);   // 传入 props 后可使用 this.props 调用

        this.state = {
            content_zh: props.content_zh ? props.content_zh.split('|') : '',
            content_en: props.content_en ? props.content_en.split('|') : '',
            author: props.author ? props.author : '--- 佚名',
            heart_count: props.heart_count
        };

        this.heart_count_update_api = 'https://qcho5o.fn.thelarkcloud.com/update_heart_count';
    }

    // card 轮换时设置新的值
    componentDidMount() {
        let like = this.props.getLikeProp(this.props._id);
        let heart_count = this.props.getHeartCount(this.props._id);
        
        this.setState({
            heart_count,
            like
        });

        if (like) {
            this.heart.classList.add('red-heart');
        }
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    // 点击心形时根据 like 值来计算点赞数的增减，最后在组件 unmount 的时候提交请求
    toggleClass = (e) => {
        let inc = 0;

        if (e.target.classList.contains('red-heart')) {
            e.target.classList.remove('red-heart');
            inc = -1;
        } else {
            if (e.target.classList.contains('is-active')) {
                inc = -1;
            } else {
                inc = 1;
            }
            e.target.classList.toggle('is-active');
        }

        this.props.onLikeChange(this.props._id);

        fetch(`${this.heart_count_update_api}?id=${this.props._id}&inc=${inc}`)
            .then((res) => {
                if (res.ok) console.log('success!')
            })
            .catch((err) => console.log('err', err));

        this.setState((state) => {
            return {
                like: !state.like,
                heart_count: state.heart_count + inc
            };
        });
    };

    render() {
        return (
            <div className="abstract-card"
                style={{
                    background: this.props.gradient
                }}
                id={this.props._id}
            >
                <div className="icon-heart-stage"> 
                    <span className="icon-heart" onClick={this.toggleClass} ref={(ele) => this.heart=ele}></span>
                    <span className="heart-count">{this.state.heart_count}</span>
                </div>
                
                {this.state.content_zh ? 
                    <div className="c-content content_zh">{
                        this.state.content_zh.map((content, idx) => {
                            return <div style={{marginTop: '0.5rem'}} key={idx}>{content}</div>
                        })
                    }</div> : null}
                
                {this.state.content_en ? 
                    <div className="c-content content_en">{
                        this.state.content_en.map((content, idx) => {
                            return <div style={{marginTop: '0.5rem'}} key={idx}>{content}</div>
                        })
                    }</div> : null}
                <div className="c-author">{this.state.author}</div>
            </div>
        );
    }
}