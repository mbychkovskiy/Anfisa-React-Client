import { ReactElement, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { useOutsideClick } from '@core/hooks/use-outside-click'
import { t } from '@i18n'
import dtreeStore from '@store/dtree'
import { Card } from '@ui/card'

type Props = {
  hideModal: () => void
  index: number
}

export const ModalOperation = observer(
  ({ hideModal, index }: Props): ReactElement => {
    const ref = useRef(null)

    useOutsideClick(ref, hideModal)

    return (
      <div ref={ref}>
        <Card className="absolute z-50 top-8 w-32 flex flex-col justify-between px-0 py-0 bg-white rounded-md text-14 cursor-pointer">
          <div
            onClick={() => dtreeStore.insertStep('BEFORE', index)}
            className="rounded-br-none rounded-bl-none rounded-l-md rounded-r-md font-normal py-2 px-2 hover:bg-grey-light"
          >
            {t('dtree.addStepBefore')}
          </div>

          <div
            onClick={() => dtreeStore.insertStep('AFTER', index)}
            className="font-normal py-2 px-2 hover:bg-grey-light"
          >
            {t('dtree.addStepAfter')}
          </div>

          <div
            onClick={() => {
              dtreeStore.duplicateStep(index)
              hideModal()
            }}
            className="font-normal py-2 px-2 hover:bg-grey-light"
          >
            {t('dtree.duplicate')}
          </div>

          <div
            onClick={() => {
              dtreeStore.negateStep(index)
              hideModal()
            }}
            className="font-normal py-2 px-2 hover:bg-grey-light"
          >
            {t('dtree.negate')}
          </div>

          <div
            onClick={() => {
              dtreeStore.removeStep(index)
              hideModal()
            }}
            className="rounded-tr-none rounded-tl-none rounded-bl-md rounded-br-md rounded-md font-normal py-2 px-2 hover:bg-grey-light"
          >
            {t('dtree.delete')}
          </div>
        </Card>
      </div>
    )
  },
)
