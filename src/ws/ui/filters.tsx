import { ReactElement } from 'react'
import styled from 'styled-components'
import { t } from '../../i18n/i18n'
import { Box } from '../../ui/box'
import { PlusSvg } from '../../ui/icons/puls'
import { Text } from '../../ui/text'
import { FilterList } from './filter-list'

const Root = styled(Box)`
    margin-left: 40px;
`

const Title = styled(Text)`
  	font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.44px;
    color: rgba(0, 0, 0, 0.87);
    margin: 0px;
    margin-right: 20px;
`

const MoreFilters = styled(Text)`
	font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #367BF5;
    margin: 0px;
    margin-left: 8px;
`

const HeaderConteiner = styled(Box)`
    display: flex;
    align-items: center;
`

export const Filters = (): ReactElement => {
	return (
		<Root>
			<HeaderConteiner>
				<Title>{t('ds.filters')}</Title>
				<PlusSvg />
				<MoreFilters>13 more</MoreFilters>
			</HeaderConteiner>


			<FilterList />
		</Root>
	)
}