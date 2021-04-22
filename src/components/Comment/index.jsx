import React from 'react';
import GitalkComponent from "gitalk/dist/gitalk-component";
import md5 from 'md5';

export default function() {
    return (
        <GitalkComponent options={{
            clientID: "376f48b355e1f9ac5d2e",
            clientSecret: "aceda79297e0265d1ae12cae6216e367f6ad7a3e", 
            repo: "gittalk-comments",
            owner: "yleave",
            admin: ["yleave"],
            id: md5(location.pathname)
        }} />
    );
};

