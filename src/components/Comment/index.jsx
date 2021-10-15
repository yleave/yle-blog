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
 
