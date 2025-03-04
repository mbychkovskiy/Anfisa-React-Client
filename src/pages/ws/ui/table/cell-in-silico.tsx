import { Fragment, ReactElement } from 'react'
import get from 'lodash/get'

import { EMPTY_VALUE } from '@pages/ws/constants'
import { CellI, PredicationI } from './cell-interfaces'
import { PredictionItem } from './prediction-item'

export const CellInSilico = ({ cell }: CellI): ReactElement => {
  const predictions = get(cell, 'value', []) as PredicationI[]

  if (predictions.every(el => !el.value || !el.value.length)) {
    return <div>{EMPTY_VALUE}</div>
  }

  return (
    <Fragment>
      {predictions.map((prediction: PredicationI) => (
        <PredictionItem key={prediction.name} {...prediction} />
      ))}
    </Fragment>
  )
}
