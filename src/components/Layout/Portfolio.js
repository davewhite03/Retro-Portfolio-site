import React, { useContext, useState, useEffect } from 'react';
import ScreenContext from '../context/screen-context';
import { Fragment } from 'react';
import classes from './Portfolio.module.css';
import headShot from '../../assets/head.png';
import getBizzy from '../../assets/portfolio.png';
import Button from '../UI/Button';
import gitTag from '../../assets/git.png';
import sanityClient from '../../client.js';

const Portfolio = (props) => {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
      title,
      slug,
      body,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  console.log(postData);
  const ctx = useContext(ScreenContext);

  const projectList = postData?.map((items) => (
    <li className={classes['project-list-item']}>
      <img className={classes.portImg} alt="projectImage" src={items.image} />
      <p>{items.title}</p>
      <a href={items.href}>
        <Button>Website</Button>
      </a>
      <a href={items.gitHref}>
        <img className={classes.git} src={gitTag} alt="github" />
      </a>
    </li>
  ));

  return (
    <Fragment>
      {ctx.proButton ? (
        <Fragment>
          <div className={classes.platform}>
            <ul className={classes['project-list']}>{projectList}</ul>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Portfolio;
