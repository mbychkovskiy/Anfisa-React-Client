import { ReactElement, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { useFilterQueryBuilder } from '@core/hooks/use-filter-query-builder'
import { useScrollPosition } from '@core/hooks/use-scroll-position'
import { t } from '@i18n'
import dtreeStore from '@store/dtree'
import { QueryBuilderSubgroup } from '@pages/filter/common/groups/query-builder-subgroup'
import dtreeModalStore from '@pages/filter/dtree/components/modals/modals-visibility.store'
import { QueryBuilderSearch } from '../../query-builder/query-builder-search'
import { HeaderModal } from './ui/header-modal'
import { ModalBase } from './ui/modal-base'

export const ModalSelectAttribute = observer((): ReactElement => {
  const { filterValue, setFilterValue, filteredQueryBuilder } =
    useFilterQueryBuilder()

  const [readScrollPosition] = useScrollPosition({
    elem: '#attributes-container',
    storageId: 'attributesModalScrollPos',
  })

  const groupNames = Object.keys(filteredQueryBuilder)

  const subGroupData = Object.values(filteredQueryBuilder)

  const modalBaseRef = useRef(null)

  const handleClose = () => {
    dtreeModalStore.closeModalAttribute()
    dtreeStore.resetFilterModalValue()
  }

  useEffect(() => {
    readScrollPosition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ModalBase refer={modalBaseRef} minHeight={340}>
      <HeaderModal
        groupName={t('dtree.selectAttribute')}
        handleClose={handleClose}
      />

      <div className="flex w-full mt-4">
        <QueryBuilderSearch
          value={filterValue}
          onChange={(value: string) => setFilterValue(value)}
          isModal
        />
      </div>

      <div id="attributes-container" className="flex-1 overflow-y-scroll mt-4">
        {dtreeStore.stat.isLoading ? (
          <div className="flex justify-center w-full my-4">
            {t('dtree.loading')}
          </div>
        ) : (
          groupNames.map((groupName, index) => (
            <QueryBuilderSubgroup
              groupName={groupName}
              subGroupData={subGroupData[index]}
              key={groupName}
              changeIndicator={dtreeStore.filterModalChangeIndicator}
              isContentExpanded={dtreeStore.isFilterModalContentExpanded}
              isModal
            />
          ))
        )}
      </div>
    </ModalBase>
  )
})
