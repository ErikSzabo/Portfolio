import React from 'react'
import Tag from './Tag';

const FilterTag = ({ name, filter, setter }) => (
    <div onClick={() => setter(filter)} className="filter-tag">
        <Tag name={name} />
    </div>
)

export default FilterTag;
