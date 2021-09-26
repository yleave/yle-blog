import React, { Component } from 'react';
import * as _ from 'underscore';
import md5 from 'md5';
import { message } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { getPageLikeCount, setPageLikeCount } from '../../utils/pageStatics';
import './index.css';

export default class ThumbsUp extends Component {
    constructor() {
        super();
        this.state = {
            showLikeIcon: true,
            enableLike: true,   // 若是在一天内已赞过，则此次不能再赞了
            likeCount: 0,
            spinning: true, // 数字加载状态
        }
        this.throttle_resizeEvent = _.throttle(this.onWindowResize, 100);
    }

    updatePageLikePos = () => {
        const tableOfContents = document.getElementsByClassName('table-of-contents')[0];
        const pageLike = document.getElementsByClassName('page-like')[0];
        
        if (this.state.showLikeIcon) {
            let top, left;
            //  有的文章中没有标题列表，所以会为空，这时候使用 markdown 来计算位置
            if (tableOfContents) {
                const bound = tableOfContents.getBoundingClientRect();
                top = bound.top + bound.height + 20;
                left = bound.left + 16;
            } else {
                const markdown = document.getElementsByClassName('markdown')[0];
                const bound = markdown.getBoundingClientRect();

                top = bound.top + 120;
                left = bound.left + bound.width + 40;
            }

            pageLike.style.top = `${top}px`;
            pageLike.style.left = `${left}px`;
        }
    };
    
    // 检查是否已为某篇文章点过赞，若点过赞，则返回 false
    checkStorage = () => {
        const pageId = this.pageId;

        if (localStorage.hasOwnProperty('dateCache')) {
            const dateCache = JSON.parse(localStorage.getItem('dateCache'));
            if (dateCache[pageId]) {
                const maxAge = parseInt(dateCache[pageId].maxAge);
                const date = parseInt(dateCache[pageId].date);
                
                // 若超时了，那么清空日期缓存
                if (+new Date() - date >= maxAge) {
                    delete dateCache[pageId];
                    localStorage.setItem('dateCache', JSON.stringify(dateCache));
                    console.log('date cache 超时')
                    return true;
                }
                // console.log('未超时')
                // 存在相应记录且未超时
                return false;
            }
        }

        return true;
    };

    setStorage = () => {
        const pageId = this.pageId;
        const date = new Date();
        const maxAge = (23 - date.getHours()) * 60 * 60 * 1000 +
            (59 - date.getMinutes()) * 60 * 1000 +
            (59 - date.getSeconds()) * 1000 + 
            date.getMilliseconds();

        let dateCache = {};

        if (localStorage.hasOwnProperty('dateCache')) {
            dateCache = JSON.parse(localStorage.getItem('dateCache'));
        }

        dateCache[pageId] = {
            date: +date,
            maxAge
        };

        localStorage.setItem('dateCache', JSON.stringify(dateCache));
    };

    componentDidMount() {
        this.pageId = md5(location.pathname);

        this.updatePageLikePos();

        // 初始化点赞按钮的颜色与是否能点击
        const enableLike = this.checkStorage();
        // 首先初始化按钮样式
        const pageLike = document.getElementsByClassName('page-like')[0];

        // 若已被点击，则替换点击按钮颜色为已点击颜色
        if (!enableLike) {
            this.state.enableLike = false;
            pageLike.style.color = '#00d0ff';
        }

        getPageLikeCount()
            .then(data => {
                const { pageLikeCount } = data;
                this.setState({
                    likeCount: pageLikeCount,
                    spinning: false
                });
            });

        message.config({
            maxCount: 3,
            top: 60,
        });

        this.messageConfig = {
            content: '谢谢你~不过你今天已经为这篇文章点过赞啦！',
            icon: <SmileTwoTone />
        };

        window.addEventListener('resize', this.throttle_resizeEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttle_resizeEvent);
    }

    onWindowResize = e => {
        const menuButton = document.getElementsByClassName('menu__button')[0];
        const show = menuButton.getBoundingClientRect().top !== 0;

        this.updatePageLikePos();
        if (show) {
            this.setState({
                showLikeIcon: false
            });
        } else if (!this.state.showLikeIcon) {
            this.setState({
                showLikeIcon: true
            });
        }
    };

    onLikeClick = e => {
        if (this.state.enableLike) {
            e.target.classList.add('active-page-like');

            setTimeout(() => {
                e.target.classList.remove('active-page-like');
                const pageLike = document.getElementsByClassName('page-like')[0];
                pageLike.style.color = '#00d0ff';
                this.state.enableLike = false;

                this.setState(state => {
                    return {
                        likeCount: state.likeCount + 1
                    };
                });
            }, 900);

            setPageLikeCount();
            this.setStorage();
        } else {
            message.success(this.messageConfig);
        }
    };

    render() {
        return (
            <>
                {
                    this.state.showLikeIcon ?
                        <div className="page-like">
                            <i className="iconfont iconicon" onClick={this.onLikeClick}></i>
                            {
                                this.state.spinning ?
                                    <i className="fa fa-spinner fa-spin" style={{fontSize: '1.5rem'}}></i> :
                                    <span className="page-like-count">
                                        {this.state.likeCount}
                                    </span>
                            }
                        </div>
                        : null
                }
            </>
        );
    }
}