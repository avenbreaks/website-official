import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We build the new blockchain infrastructure.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="What is Edgeware and How to use?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GTFX and Edgeware is the future. Let us explore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="How did GTFX Edgeware get started with development?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GTFX Edgeware Network will be the leading decentralized solutions" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="What Chain Node to use GTFX?" />
      </div>
    </div>
  </div>
);

export default Blog;
