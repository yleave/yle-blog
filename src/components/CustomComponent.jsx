import React from 'react';
import BackToTop from '@site/src/components/BackToTop';
import BlogHeader from '@site/src/components/BlogHeader';

export default function CustomComponent(props) {
    return (
        <div>
            <BlogHeader tags={props.tags} time={props.time} />
            <BackToTop />
        </div>
    );
}