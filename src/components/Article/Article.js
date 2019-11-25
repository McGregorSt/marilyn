import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './Article.css'

const Article = () => {
  return (
    <div className={classes.Article}>
      <div className={classes.article__header}>
        <h1>Marilyn Monroe</h1>
        <div className={classes.small__header}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className={classes.mapMarker}
          />
          <span>Poznan, PL</span>
        </div>
      </div>
      <div className={classes.article__main}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.{' '}
        </span>
        <div className={classes.quote}>
          <div className={classes.pipe}></div>
          <div className={classes.quote__text}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. "
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </span>
      </div>
    </div>
  )
}

export default Article
