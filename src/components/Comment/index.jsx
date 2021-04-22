import React from 'react';
import GitalkComponent from "gitalk/dist/gitalk-component";

export default function() {
    return (
        <GitalkComponent options={{
            clientID: "6958165c659d771ff9c6",
            clientSecret: "ea733509382ce339e026635c798215e1e7ae6ee3",
            repo: "gittalk-comments",
            owner: "yleave",
            admin: "yleave",
          }} />
    );
};