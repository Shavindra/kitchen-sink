import { IconButton, Tooltip, createStyles, makeStyles } from '@material-ui/core'
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone'
import classnames from 'classnames'
import React, { Suspense, useState } from 'react'

import { Loader } from '../Loader'
import { tableDebugStyles } from './TableStyles'

const ReactJson = React.lazy(() => import('react-json-view'))


export const TableDebug: React.FC<{
  enabled: boolean
  instance: any
}> = ({ enabled, instance }) => {
  const [open, setOpen] = useState(false)
  const classes = tableDebugStyles()

  return enabled ? (
    <>
      <Tooltip title={'Debug'}>
        <span>
          <IconButton
            className={classnames({ [classes.button]: instance?.rows?.length })}
            onClick={() => setOpen((old) => !old)}
          >
            <BugReportTwoToneIcon />
          </IconButton>
        </span>
      </Tooltip>
      {open && (
        <>
          <br />
          <br />
          <Suspense fallback={<Loader />}>
            <ReactJson src={{ ...instance }} collapsed={1} indentWidth={2} sortKeys />
          </Suspense>
        </>
      )}
    </>
  ) : null
}
