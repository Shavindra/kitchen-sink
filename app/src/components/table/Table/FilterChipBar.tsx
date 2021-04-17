import { Chip, createStyles, makeStyles } from '@material-ui/core'
import React, { ReactElement, useCallback } from 'react'
import { FilterValue, IdType, TableInstance } from 'react-table'
import { filterChipBarStyles } from './TableStyles'



type FilterChipBarProps<T extends Record<string, unknown>> = {
  instance: TableInstance<T>
}

const getFilterValue = (column: any, filterValue: FilterValue) => {
  switch (column.filter) {
    case 'between':
      const min = filterValue[0]
      const max = filterValue[1]
      return min ? (max ? `${min}-${max}` : `>=${min}`) : `<=${max}`
  }
  return filterValue
}

export function FilterChipBar<T extends Record<string, unknown>>({
  instance,
}: any): ReactElement | null {
  const classes = filterChipBarStyles({})
  const {
    allColumns,
    setFilter,
    state: { filters },
  } = instance
  const handleDelete = useCallback(
    (id: string | number) => {
      setFilter(id as IdType<T>, undefined)
    },
    [setFilter]
  )

  return Object.keys(filters).length > 0 ? (
    <div className={classes.chipZone}>
      <span className={classes.filtersActiveLabel}>Active filters:</span>
      {filters &&
        allColumns.map((column) => {
          const filter = filters.find((f) => f.id === column.id)
          const value = filter && filter.value
          return (
            value && (
              <Chip
                className={classes.filterChip}
                key={column.id}
                label={
                  <>
                    <span className={classes.chipLabel}>{column.render('Header')}: </span>
                    {getFilterValue(column, value)}
                  </>
                }
                onDelete={() => handleDelete(column.id)}
                variant='outlined'
              />
            )
          )
        })}
    </div>
  ) : null
}
