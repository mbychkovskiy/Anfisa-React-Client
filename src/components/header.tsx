import { ReactElement, ReactNode, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import cn from 'classnames'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useParams } from '@core/hooks/use-params'
import { t } from '@i18n'
import datasetStore from '@store/dataset/dataset'
import dirinfoStore from '@store/dirinfo'
import filterStore from '@store/filter'
import variantStore from '@store/ws/variant'
import { PageRoute, RouteNames, Routes } from '@router/routes.enum'
import { Divider } from '@ui/divider'
import { Breadcrumbs } from '@components/breadcrumbs'
import { Logo } from '@components/logo'
import { GlbPagesNames } from '@glb/glb-names'
import userIcon from '@images/thomas-hunt.jpg'

interface IHeaderProps {
  className?: string
  children?: ReactElement | ReactNode
}

const allowedXlDatasetRotes: PageRoute[] = [Routes.Refiner, Routes.Dtree]

export const Header = observer(
  ({ className, children }: IHeaderProps): ReactElement => {
    const params = useParams()
    const ds = params.get('ds') || ''
    const history = useHistory()
    const isHomepage = window.location.pathname === Routes.Root
    const path: PageRoute = window.location.pathname as PageRoute
    const isXlDatasetAllowed = allowedXlDatasetRotes.includes(path)

    useEffect(() => {
      const page: GlbPagesNames = RouteNames[path]

      filterStore.setMethod(page)
    }, [path])

    const handleChangeDataset = (datasetName: string) => {
      if (datasetName === ds) {
        return
      }

      history.push(`${history.location.pathname}?ds=${datasetName}`)
      datasetStore.setDatasetName(datasetName)

      if (datasetName && !variantStore.dsName) {
        variantStore.setDsName(datasetName)
      }
    }

    return (
      <div
        className={cn(
          'bg-blue-dark flex flex-row justify-between items-center px-[18px] py-3',
          className,
        )}
      >
        <div className="flex flex-row justify-between items-center grow-0 shrink-1 min-w-0 mr-4">
          <Link to={Routes.Root}>
            <Logo mode="white" className="mr-4" />
          </Link>
          <span className="text-grey-blue whitespace-pre-line text-xs flex flex-col">
            <span>
              {t('header.version.frontend', {
                version: process.env.REACT_APP_VERSION,
              })}
            </span>
            <span>
              {t('header.version.backend', {
                version: dirinfoStore.dirInfoData
                  ? toJS(dirinfoStore.dirInfoData).version
                  : '',
              })}
            </span>
          </span>
          {!isHomepage && (
            <>
              <Divider orientation="vertical" />
              <Breadcrumbs
                datasetName={ds}
                onChangeDataset={handleChangeDataset}
                className="grow-0 shrink-1 min-w-0"
                isXlDatasetAllowed={isXlDatasetAllowed}
              />
            </>
          )}
        </div>

        {children}

        <div className="text-white flex flex-row items-center">
          <div className="mr-2">Thomas Hunt</div>

          <img src={userIcon} className="w-8 h-8 rounded-full" />
        </div>
      </div>
    )
  },
)
