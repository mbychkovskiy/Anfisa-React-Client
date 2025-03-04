import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { DatasetCreationErrorsEnum } from '@core/enum/dataset-creation-errors-enum'
import { PatnNameEnum } from '@core/enum/path-name-enum'
import { t } from '@i18n'
import datasetStore from '@store/dataset/dataset'
import dirinfoStore from '@store/dirinfo'
import dtreeStore from '@store/dtree'
import filterStore from '@store/filter'
import filterPresetsStore from '@store/filter-presets'
import operations from '@store/operations'
import mainTableStore from '@store/ws/main-table.store'
import zoneStore from '@store/ws/zone'
import { Routes } from '@router/routes.enum'
import { Button } from '@ui/button'
// TODO: convert attention icon to project icon format
import { Attention } from '@ui/icon/icons/attention'
import { Input } from '@ui/input'
import { DecisionTreesMenuDataCy } from '@components/data-testid/decision-tree-menu.cy'
import { GlbPagesNames } from '@glb/glb-names'
import { showToast } from '@utils/notifications/showToast'
import {
  noFirstNumberPattern,
  noSymbolPattern,
} from '@utils/validation/validationPatterns'
import { HeaderModal } from './ui/header-modal'
import { ModalBase } from './ui/modal-base'

export const ModalSaveDataset = observer(() => {
  const ref = useRef<any>(null)
  const history = useHistory()
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')
  const startDatasetName = toJS(datasetStore.datasetName)
  const pathName = history.location.pathname
  const { wsList } = mainTableStore
  const isDone = operations.savingStatus[1] === 'Done'
  const isSaving =
    operations.savingStatus[1] !== 'Done' && !!operations.savingStatus[1]

  useEffect(() => {
    const { variantCounts } = mainTableStore.fixedStatAmount
    const { conditions } = filterStore

    if (
      pathName === PatnNameEnum.Filter &&
      filterStore.method === GlbPagesNames.Dtree &&
      dtreeStore.acceptedVariants === 0
    ) {
      setError(DatasetCreationErrorsEnum.EmptyDataset)
    }

    if (
      pathName === PatnNameEnum.Filter &&
      filterStore.method === GlbPagesNames.Refiner &&
      variantCounts === 0
    ) {
      setError(DatasetCreationErrorsEnum.EmptyDataset)
    }

    if (pathName === PatnNameEnum.Ws && variantCounts === 0) {
      setError(DatasetCreationErrorsEnum.EmptyDataset)
    }

    if (
      pathName === PatnNameEnum.Ws &&
      !filterPresetsStore.activePreset &&
      conditions.length === 0
    ) {
      setError(DatasetCreationErrorsEnum.ChooseAnyFilter)
    }
  }, [pathName])

  const saveDatasetAsync = async () => {
    if (toJS(dirinfoStore.dsDistKeys).includes(value)) {
      setError(DatasetCreationErrorsEnum.DatasetExists)

      return
    }

    const result = await operations.saveDatasetAsync(value, pathName)

    if (!result.ok && result.message) {
      setError(result.message)

      return
    }

    zoneStore.resetAllSelectedItems()
    isDone && history.push(`${Routes.WS}?ds=${value}`)
  }

  const handleClose = () => {
    if (!value || !isDone) {
      dtreeStore.closeModalSaveDataset()
      operations.resetSavingStatus()

      return
    }

    if (operations.isCreationOver) {
      dtreeStore.closeModalSaveDataset()

      if (pathName === PatnNameEnum.Ws) {
        datasetStore.setDatasetName(startDatasetName)
        wsList.invalidate()
      }

      operations.resetSavingStatus()
    } else {
      showToast(t('general.creaitionIsInProcess'), 'warning')
    }
  }

  const handleOpenDataset = () => {
    isDone && history.push(`${Routes.WS}?ds=${value}`)

    dtreeStore.closeModalSaveDataset()

    if (pathName === PatnNameEnum.Ws) {
      datasetStore.setDatasetName(value)
    }

    operations.resetSavingStatus()

    zoneStore.clearZone()
    filterStore.reset()
    dtreeStore.resetData()
    zoneStore.resetAllSelectedItems()
  }

  const handleChange = (name: string) => {
    if (
      error === DatasetCreationErrorsEnum.EmptyDataset ||
      error === DatasetCreationErrorsEnum.ChooseAnyFilter
    ) {
      return
    }

    if (
      noSymbolPattern.test(name) ||
      noFirstNumberPattern.test(name) ||
      name.length > 250
    ) {
      setError(DatasetCreationErrorsEnum.IncorrectName)
    } else {
      setError('')
    }

    setValue(name)
  }

  return (
    <ModalBase refer={ref} minHeight={200} width="520px">
      <HeaderModal
        groupName={t('dsCreation.addDatasetTitle')}
        handleClose={handleClose}
      />

      <div className="flex flex-col mt-4" ref={ref}>
        <div className="">
          <span className="text-14">{t('dsCreation.label')}</span>

          <Input
            value={value}
            onChange={e => handleChange(e.target.value)}
            className="mt-1"
            disabled={isSaving}
            data-testid={DecisionTreesMenuDataCy.datasetNameInput}
          />

          <span className="text-12 text-red-secondary mt-2">{error}</span>
        </div>

        {!isDone &&
          pathName !== PatnNameEnum.Filter &&
          filterStore.method !== GlbPagesNames.Refiner && (
            <div className="mt-5 flex items-center">
              <Attention className="mr-2" />

              <span className="text-12">{t('dsCreation.attention')}</span>
            </div>
          )}

        <span className="mt-2 text-14">
          {operations.savingStatus[1]}

          {isDone && (
            <span
              className="ml-2 mt-1 text-14 text-blue-bright cursor-pointer"
              onClick={handleOpenDataset}
            >
              {'Open It'}
            </span>
          )}
        </span>

        <div className="flex ml-auto mt-6">
          <Button
            text={t('general.cancel')}
            variant="secondary"
            className="border-grey-light hover:bg-grey-light"
            onClick={handleClose}
            dataTestId={DecisionTreesMenuDataCy.cancelAddNewDataset}
          />

          <Button
            text={t('dsCreation.addDataset')}
            className="ml-4"
            disabled={!value.trim() || error.length > 0 || isSaving}
            variant="secondary"
            onClick={saveDatasetAsync}
            dataTestId={DecisionTreesMenuDataCy.addNewDataset}
          />
        </div>
      </div>
    </ModalBase>
  )
})
