import { IconButton, Tooltip } from '@material-ui/core'
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
            <ReactJson src={{ ...instance }} collapsed={1} indentWidth={2} sortKeys theme={{
                base00: "transparent",
                base01: "#999999",
                base02: "#999999",
                base03: "#999999",
                base04: "#999999",
                base05: "#999999",
                base06: "#999999",
                base07: "#F7F7F7",
                base08: "#999999",
                base09: "#999999",
                base0A: "#999999",
                base0B: "#999999",
                base0C: "#999999",
                base0D: "#999999",
                base0E: "#999999",
                base0F: "#999999"
            }} />
          </Suspense>
        </>
      )}
    </>
  ) : null
}
