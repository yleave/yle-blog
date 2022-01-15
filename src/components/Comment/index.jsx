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
        let path = location.pathname;
        if (!path.endsWith('/')) {
            path += '/';
        }
        
        let timer;
        const excuteWaline = () => {
            if (window.Waline) {
                Waline({
                    el: '#waline-comment',
                    serverURL: 'https://wline-comment-yleave.vercel.app/',
                    emoji: [
                        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
                        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                    ],
                    path
                });

                clearTimeout(timer);
            } else {
                timer = setTimeout(excuteWaline, 200);
            }
        };
        if (!window.Waline) {
            timer = setTimeout(excuteWaline, 200);
        } else {
            window.Waline({
                el: '#waline-comment',
                serverURL: 'https://wline-comment-yleave.vercel.app/',
                emoji: [
                    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
                    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                ],
                path
            });
        }

        this.setState({
            ready: true
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
                    <div id='waline-comment' className='waline-comment-class'></div>
                </div>
            </>
        );
    }
}
 
