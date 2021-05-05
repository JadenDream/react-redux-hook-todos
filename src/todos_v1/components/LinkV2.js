import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../actions'
import Link from './Link'

function getActiveDisabled(filter, ownPropsFilter){
  return filter === ownPropsFilter;
}

const LinkV2 = ({ filter, children }) => {
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  return (
    <Link active={getActiveDisabled(filter, visibilityFilter)}
    onClick= {() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}

export default LinkV2
