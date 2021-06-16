import React, { Component } from 'react';
import './index.css';
import Card from './Cards';
import Button3D from '@site/src/components/Button3D';
import Layout from '@theme/Layout';
import BackToTop from '@site/src/components/BackToTop';
import Head from '@docusaurus/Head';
import { Skeleton } from 'antd';

class Abstracts extends Component {
    constructor() {
        super();
        this.state = {
          loading: true,
          abstracts: [],
          idx: 0
        };

        this.content_per_page = 5;
        this.cur_contents = [];
        this.likeMap = new Map(); // 卡片 id -> 点赞与否的映射，为了防止换一批卡片后还能重新点赞
        this.heart_countMap = new Map();

        this.gradients = [
          'linear-gradient(120deg, #a1c4fd 30%, #c2e9fb 100%)',
          'linear-gradient(120deg, #89f7fe 30%, #96e6a1 100%)',
          'linear-gradient(120deg, #84fab0 30%, #8fd3f4 100%)',
          'linear-gradient(120deg, #fccb90 30%, #d57eeb 100%)',
          'linear-gradient(to right, #4facfe 30%, #00f2fe 100%)',
          'linear-gradient(to top, #a8edea 30%, #fed6e3 100%)',
          'linear-gradient(to top, #5ee7df 30%, #b490ca 100%)',
          'radial-gradient(circle 248px at center, #16d9e3 30%, #30c7ec 47%, #46aef7 100%)',
          'linear-gradient(120deg, #89f7fe 30%, #66a6ff 100%)',
          'linear-gradient(to top, #9890e3 30%, #b1f4cf 100%)',
          'linear-gradient(to top, #ebc0fd 30%, #d9ded8 100%)',
          'linear-gradient(180deg, #2af598 30%, #009efd 100%)',
          'linear-gradient(to top, #cd9cf2 30%, #f6f3ff 100%)',
          'linear-gradient(to top, #37ecba 30%, #72afd3 100%)',
          'linear-gradient(to top, #ebbba7 30%, #cfc7f8 100%)',
          'linear-gradient(to top, #fff1eb 30%, #ace0f9 100%)',
          'linear-gradient(to top, #48c6ef 30%, #6f86d6 100%)',
          'linear-gradient(to top, #feada6 30%, #f5efef 100%)',
          'linear-gradient(to top, #accbee 30%, #e7f0fd 100%)',
          'linear-gradient(to top, #c1dfc4 30%, #deecdd 100%)',
          'linear-gradient(to top, #00c6fb 30%, #005bea 100%)',
          'linear-gradient(to right, #74ebd5 30%, #9face6 100%)',
          'linear-gradient(to top, #9795f0 30%, #fbc8d4 100%)',
          'linear-gradient(to top, #d9afd9 30%, #97d9e1 100%)',
          'linear-gradient(-20deg, #b721ff 30%, #21d4fd 100%)',
          'linear-gradient(60deg, #abecd6 30%, #fbed96 100%)',
          'linear-gradient(-20deg, #ddd6f3 30%, #faaca8 100%, #faaca8 100%)',
          'linear-gradient(60deg, #96deda 30%, #50c9c3 100%)',
          'linear-gradient(to top, #4481eb 30%, #04befe 100%)',
          'linear-gradient(to top, #209cff 30%, #68e0cf 100%)',
          'linear-gradient(to right, #0acffe 30%, #495aff 100%)',
          'linear-gradient(-225deg, #2CD8D5 30%, #C5C1FF 56%, #FFBAC3 100%)',
          'linear-gradient(to top, #fbc2eb 30%, #a6c1ee 100%)',
        ];
    }

    componentDidMount() {
      if (window.Waves) {
        // 开启点击波纹特效
        Waves.displayEffect();
      }

      fetch('https://qcho5o.fn.thelarkcloud.com/abstracts')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const { contents } = data;

          for (let i = 0; i < contents.length; ++i) {
            const rdmIdx = Math.floor(Math.random() * contents.length);
            [contents[rdmIdx], contents[i]] = [contents[i], contents[rdmIdx]];
          }

          // 初始化点赞映射
          contents.map((item) => {
            this.likeMap.set(item._id, false);
            this.heart_countMap.set(item._id, item.heart_count);
          });

          this.cards = contents.map((abstract, idx) => {
            const gradientIdx = Math.floor(Math.random() * this.gradients.length);
            return <Card 
              {...abstract}
              key={idx} 
              gradient={this.gradients[gradientIdx]} 
              like={this.likeMap.get(abstract._id)}
              onLikeChange={this.onLikeChange}
              getLikeProp={this.getLikeProp}
              getHeartCount={this.getHeartCount}
              setHeartCount={this.setHeartCount}
            />
          });

          this.cur_contents = this.cards.slice(0, this.content_per_page);

          this.setState({
            loading: false,
            abstracts: contents,
            idx: this.content_per_page
          });
        })
        .catch((err) => {
          console.log(err)
        });
    }

    onLikeChange = (id) => {
      this.likeMap.set(id, !this.likeMap.get(id));
    };

    getLikeProp = (id) => {
      return this.likeMap.get(id);
    };

    getHeartCount = (id) => {
      return this.heart_countMap.get(id);
    };

    setHeartCount = (id, inc) => {
      this.heart_countMap.set(id, this.heart_countMap.get(id) + inc);
    };

    update_cur_contents = () => {
      const total = this.cards.length;
      const abstracts = this.cards;
      const start = this.state.idx;
      const end = start + this.content_per_page;
      
      this.cur_contents.length = 0;

      if (this.state.idx < total) {
        this.cur_contents.push(...abstracts.slice(start, end));
      }

      if (this.cur_contents.length < this.content_per_page && total > this.content_per_page) {
        this.cur_contents.push(...abstracts.slice(0, end - total));
      }

      this.setState({
        idx: (this.state.idx + this.content_per_page) % total
      });
    };

    render() {
      return (
        
        <Layout>
          <Skeleton loading={this.state.loading} active>
            <BackToTop />
            <Head>
              <title>文摘 | Yle</title>
            </Head>
            <div className="cards-container">
              {
                this.cur_contents
              }
            </div>

            <div className="cards-controller">
              <Button3D text="换一批" id="cards-btn" toggleFn={this.update_cur_contents} />
            </div>
          </Skeleton>
        </Layout>
      )
    }
}

export default Abstracts;