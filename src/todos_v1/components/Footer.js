import React from 'react'
import { VisibilityFilters } from '../actions'
import LinkV2 from './LinkV2'

const Footer = () => {
  return (
  <div>
    <span>Show: </span>
    <LinkV2 filter={VisibilityFilters.SHOW_ALL}
    >
      All
    </LinkV2>
    <LinkV2 filter={VisibilityFilters.SHOW_ACTIVE}
    >
      Active
    </LinkV2>
    <LinkV2 filter={VisibilityFilters.SHOW_COMPLETED}
    >
      Completed
    </LinkV2>
  </div>
  );
};

export default Footer
