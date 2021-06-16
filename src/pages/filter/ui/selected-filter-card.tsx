import { Fragment, ReactElement } from 'react'
import Checkbox from 'react-three-state-checkbox'
import { observer } from 'mobx-react-lite'

import { useToggle } from '@core/hooks/use-toggle'
import { theme } from '@theme'
import { ArrowSvg } from '@ui/icons/arrow'

interface Props {
  title: string
  filters: Record<string, number>
  onRemove: (name: string) => void
}

export const SelectedFilterCard = observer(
  ({ title, filters, onRemove }: Props): ReactElement => {
    const [isOpen, open, close] = useToggle(false)
    const filterKeys = Object.keys(filters)

    if (filterKeys.length === 0) {
      return <Fragment />
    }

    return (
      <div>
        <div
          className="flex items-center border-b border-grey-light p-4 cursor-pointer"
          onClick={isOpen ? close : open}
        >
          <span className="text-16 leading-16px text-black">{title}</span>

          <ArrowSvg
            fill={theme('colors.blue.bright')}
            direction={isOpen ? 'top' : 'down'}
            style={{ marginLeft: 'auto' }}
          />
        </div>

        {isOpen && (
          <div>
            {filterKeys.map(filterKey => (
              <div key={filterKey} className="flex items-center pl-6 py-4">
                <Checkbox checked onChange={() => onRemove(filterKey)} />
                <span className="text-14 leading-16px font-bold text-black ml-2">
                  {filterKey}
                </span>
                <span className="text-14 leading-16px font-bold text-grey-0 ml-2">{`(${filters[filterKey]})`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)
