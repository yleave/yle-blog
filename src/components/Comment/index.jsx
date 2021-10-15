import React from 'react';
import GitalkComponent from "gitalk/dist/gitalk-component";
import md5 from 'md5';
import './index.css';

export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        this.setState({
            ready: true
        });

        Waline({
            el: '#waline-comment',
            serverURL: 'https://wline-comment-kyqnqsngs-yleave.vercel.app/',
            emoji: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
            ],
        });
    }

    /* <GitalkComponent options={{
            clientID: "b92dde21f07145d83795",
            clientSecret: "fb75f58b6f05d2cb95563b8e089562c06c01db52", 
            repo: "gittalk-comments",
            owner: "yleave",
            admin: ["yleave"],
            id: md5(location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')
        }} />
        : null */

    render() {
        return (
            <>
                <div style={{
                    marginTop: '40px',
                    marginBottom: '40px'
                }}>  
                    <hr className="hr-twill-colorful" />
                    <div id='waline-comment'></div>
                </div>
            </>
        );
    }
}
 
