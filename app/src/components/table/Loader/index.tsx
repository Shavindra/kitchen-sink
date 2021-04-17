import { Theme } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { loaderStyles } from '../Table/TableStyles'


interface LoaderProps {
  error?: boolean
  retry?: (event: React.MouseEvent<HTMLElement>) => void
  timedOut?: boolean
  pastDelay?: boolean
}

export const Loader: React.FC<LoaderProps> = ({ error, retry, timedOut, pastDelay }) => {
  const classes = loaderStyles()
  return (
    <div className={classes.root}>
      {error && (
        <div>
          Error! <button onClick={retry}>Retry</button>
        </div>
      )}
      {timedOut && (
        <div>
          Taking a long time... <button onClick={retry}>Retry</button>
        </div>
      )}
      {pastDelay && <div>Loading...</div>}
      <CircularProgress className={classes.progress} />
    </div>
  )
}
