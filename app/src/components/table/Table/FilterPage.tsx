import { Button, Popover, Typography, createStyles, makeStyles } from '@material-ui/core'
import React, { FormEvent, ReactElement, useCallback } from 'react'
import { TableInstance } from 'react-table'
import { filterPageStyles } from './TableStyles'

type FilterPageProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>
  anchorEl?: Element
  onClose: () => void
  show: boolean
}

export function FilterPage<T extends Record<string, unknown>>({
  instance,
  anchorEl,
  onClose,
  show,
}: any): ReactElement {
  const classes = filterPageStyles({})
  const { allColumns, setAllFilters } = instance

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onClose()
    },
    [onClose]
  )

  const resetFilters = useCallback(() => {
    setAllFilters([])
  }, [setAllFilters])

  return (
    <div>
      <Popover
        anchorEl={anchorEl}
        id={'popover-filters'}
        onClose={onClose}
        open={show}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.columnsPopOver}>
          <Typography className={classes.popoverTitle}>Filters</Typography>
          <form onSubmit={onSubmit}>
            <Button className={classes.filtersResetButton} color='primary' onClick={resetFilters}>
              Reset
            </Button>
            <div className={classes.grid}>
              {allColumns
                .filter((it) => it.canFilter)
                .map((column) => (
                  <div key={column.id} className={classes.cell}>
                    {column.render('Filter')}
                  </div>
                ))}
            </div>
            <Button className={classes.hidden} type={'submit'}>
              &nbsp;
            </Button>
          </form>
        </div>
      </Popover>
    </div>
  )
}
