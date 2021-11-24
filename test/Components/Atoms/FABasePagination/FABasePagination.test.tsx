/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'
 
 import { FABasePagination } from '../../../../src/Components'
 
 import { fireEvent, render } from '@testing-library/react'
 
 describe('FABasePagination', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FABasePagination testID="pagination-example" />
     )
     expect(container).toMatchSnapshot()
   })
 })
 