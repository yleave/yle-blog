import React from 'react';
import BackToTop from '@site/src/components/BackToTop';
import ThumbsUp from '@site/src/components/ThumbsUp';
import BlogHeader from '@site/src/components/BlogHeader';


class BlogComponent extends React.PureComponent {
    constructor(props) {
        super();
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <BlogHeader tags={this.props.tags} time={this.props.time} lastUpdate={this.props.lastUpdate} />
                <ThumbsUp />
                <BackToTop />
            </div>
        );
    }
}

class InterviewComponent extends React.PureComponent {
    constructor(props) {
        super();
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <BlogHeader tags={this.props.tags} time={this.props.time} lastUpdate={this.props.lastUpdate} />
                <ThumbsUp />
                <BackToTop />
            </div>
        );
    }
}

export { BlogComponent, InterviewComponent };