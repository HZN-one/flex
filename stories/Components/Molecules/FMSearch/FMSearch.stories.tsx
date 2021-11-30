import React from 'react'
import { FMSearch } from '../../../../src/Components'
import { IFMSearch } from '../../../../src/Components/Molecules/FMSearch/FMSearch.interfaces'

const story = {
  title: 'Search',
  component: FMSearch,
  argTypes: {
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'placeholder',
  },
}

export default story

export const Default = (props: IFMSearch) => (
  <>
    <FMSearch {...props}>{props.children}</FMSearch>
  </>
)
