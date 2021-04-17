import React, { CSSProperties } from 'react'
import { CellProps } from 'react-table'
import { tooltipCellStyles } from './TableStyles'

export const TooltipCell: React.FC<CellProps<any>> = ({ cell: { value }, column: { align = 'left' } }) => (
  <Tooltip text={value} align={align} />
)

interface TooltipProps {
  text: string
  tooltip?: string
  align: string
}

export const Tooltip: React.FC<TooltipProps> = ({ text, tooltip = text, align }) => {
  const classes = tooltipCellStyles({})
  return (
    <div className={classes.truncated} style={{ textAlign: align } as CSSProperties}>
      <span title={tooltip}>{text}</span>
    </div>
  )
}
