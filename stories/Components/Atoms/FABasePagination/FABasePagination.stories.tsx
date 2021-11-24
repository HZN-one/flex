import React from "react";
import { ComponentStory } from '@storybook/react';
import {FABasePagination} from '../../../../src/Components/Atoms/FABasePagination'
import {IFABasePagination} from '../../../../src/Components/Atoms/FABasePagination/FABasePagination.interface'

const story = {
  title: "Pagination",
  component: FABasePagination,
};

export default story;

const Template: ComponentStory<typeof FABasePagination> = (props: IFABasePagination) => (
  <>
    <FABasePagination {...props} />
    <FABasePagination {...props} disabled/>
    <FABasePagination {...props} color='primary' />
    <FABasePagination {...props} color='secondary' />
  </>
)

export const Default = (props: IFABasePagination) => (
  <>
    <FABasePagination {...props} variant='text' />
    <FABasePagination {...props} color='secondary' sx={{marginTop: '3vh'}}/>
    <FABasePagination {...props} color='secondary' sx={{marginTop: '3vh'}} disabled/>
  </>
);

export const Outlined = (props: IFABasePagination) => (
    <>
      <FABasePagination {...props} variant='outlined' />
      <FABasePagination {...props} variant='outlined' color='secondary' sx={{marginTop: '3vh'}}/>
      <FABasePagination {...props} variant='outlined' color='secondary' sx={{marginTop: '3vh'}} disabled/>
    </>
  );
