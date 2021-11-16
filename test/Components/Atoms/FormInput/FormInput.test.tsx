/**
 * @jest-environment jsdom
 */

 import * as React from 'react'
 import '@testing-library/jest-dom'

 
 import { FormInput } from 'Components'
 
 import { render } from '@testing-library/react'
 
 describe('FormInput', () => {
   it('should match snapshot', () => {
     const { container } = render(
       <FormInput testID="input-example"  />
     )
     expect(container).toMatchSnapshot()
   })
   
 })
 