import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
            <code className={className} {...props} />
        )
    }
}

export default function CollapseWithMarkdown({ markdown, header, OtherComponents }) {

    return (
        <Collapse bordered={false}>
            <Panel header={header}>
                <ReactMarkdown components={components} children={`${markdown}`} remarkPlugins={[gfm]} />
                {
                    OtherComponents ? 
                        <OtherComponents />
                        : null
                }
            </Panel>
            
        </Collapse>
        
    );
}