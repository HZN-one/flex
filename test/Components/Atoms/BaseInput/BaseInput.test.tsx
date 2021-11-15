/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'

 
 import { BaseInput } from 'Components'
 
 import { render } from '@testing-library/react'
 
 describe('BaseInput', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <BaseInput testID="input-example"  />
     )
     expect(container).toMatchSnapshot()
   })
   
 })
 