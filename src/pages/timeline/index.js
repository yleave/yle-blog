import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { initPage } from '../../utils/pageStatics';
import './index.css';
import postData from './post.json';

const YYMM = new Set();
const items = [];
const dateMap = {};

postData.forEach(item => {
    let { time, title, link } = item;
    time = time.split('.');
    const yymm = `${time[0]}.${time[1]}`;
    YYMM.add(yymm);
    items.push({
        year: time[0],
        day: `${time[2]}日`,
        title,
        link
    });
    if (!dateMap[yymm]) {
        dateMap[yymm] = [];
    }
    dateMap[yymm].push({
        day: time[2] + '号',
        title,
        link,
    });
});

const eventYearDoms = Array.from(YYMM).map((yymm, idx) => 
    <li className={idx === 0 ? 'current' : ''} key={idx}>
        <label htmlFor={yymm}>{yymm}</label>
    </li>
);

const eventListDoms = Array.from(YYMM).map((yymm, idx) => {
    const postList = dateMap[yymm];
    return <div key={idx}>
        <h3 id={yymm.split('.').join('_')}>{yymm}</h3>
        {
            postList.map((item, idx) => {
                return <li key={idx}>
                    <span>{item.day}</span>
                    <p><span><a href={item.link} target="_blank">{item.title}</a></span></p>
                </li>
            })
        }
    </div>
});

export default function Home() {
    useEffect(() => {
        initPage();

        $(function () {
            $('label').click(function () {
                $('.timeline_event_year>li').removeClass('current');
                $(this).parent('li').addClass('current');
                const yymm = $(this).attr('for').split('.').join('_');

                $('#' + yymm).parent().prevAll('div').slideUp(800);
                console.log($('#2021_11').width())
                $('#' + yymm).parent().slideDown(800).nextAll('div').slideDown(800);
            });
        });
    }, []);

    return (
        <Layout
            title={`时间线`}
            description="Description will go into a meta tag in <head />">
            <div className='timeline-container'>
                <div className='timeline_box'>
                    <ul className='timeline_event_year'>
                        {
                            eventYearDoms
                        }
                    </ul>
                    <ul className='timeline_event_list'>
                        {
                            eventListDoms
                        }
                    </ul>
                    <div className='clearfix'></div>
                </div>
            </div>
            
        </Layout>
    );
}
