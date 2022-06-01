import React, { useEffect, useState, Fragment } from 'react';
import classes from './Project.module.css';

import sanityClient from '../../client.js';
import Button from '../UI/Button';
import gitTag from '../../assets/git.png';
export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            gitLink,
            mainImage{
                asset->{
                  _id,
                  url
                },
                alt
              },
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  const projects = projectData?.map((part) => (
    <li>
      <div className={classes.info}>
        <h1>Project Title : {part.title}</h1>
        <p>{part.description}</p>
        <a href={part.link}>
          <Button> Link </Button>
        </a>
        <a href={part.gitLink}>
          <img className={classes.git} src={gitTag} alt="github" />
        </a>
        <span className={classes.created}>
          {new Date(part.date).toLocaleDateString()}
        </span>
      </div>
      <img src={part.mainImage.asset.url} alt="pic" />
    </li>
  ));

  return (
    <Fragment>
      <div className={classes.hello}>
        <ul>{projects}</ul>
      </div>
    </Fragment>
  );
}
