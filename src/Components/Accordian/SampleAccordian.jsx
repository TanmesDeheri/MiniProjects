import React, { useState } from 'react'
import sampleData from './index'
import './index.css'

export default function SampleAccordian() {
    const [selected, setSelected] = useState(null);
    const [icon, seticon] = useState("+");
    const [enableMultipleSelection, setenableMultipleSelection] = useState(false)
    const [multiple, setmultiple] = useState([])
    
    function HandleSingleClick(elementId) {
        setSelected(selected === elementId ? null : elementId);
        // seticon(selected===elementId?"+":"-");
    }
    function HandleMultipleSelect(currentId) {
        let handleMultipleSelected = [...multiple];
        const findIndexId = handleMultipleSelected.indexOf(currentId)
        if (findIndexId !== -1) {
            handleMultipleSelected.splice(findIndexId, 1)
        } else {
            handleMultipleSelected.push(currentId)
        }
        setmultiple(handleMultipleSelected);
    }
    return (
        <div className='wrapper'>
            <div className="MultipleSelect">
                <button onClick={() => setenableMultipleSelection(!enableMultipleSelection)}>Multiple Select</button>
                <span className='show'>{enableMultipleSelection}</span>
            </div>
            <div className="accordian">
                {
                    sampleData && sampleData.length > 0 ? (sampleData.map((dataItem) => {
                        return (
                            <div className="item" key={dataItem.id}>
                                <div className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span className='DropDown' onClick={
                                        enableMultipleSelection ?
                                            () => HandleMultipleSelect(dataItem.id)
                                            : () => HandleSingleClick(dataItem.id)} style={{ cursor: "pointer" }}>{icon}</span>
                                </div>
                                <div className="description">
                                    {
                                        enableMultipleSelection ?
                                            multiple.indexOf(dataItem.id) !== -1 && (<div>{dataItem.answer} </div>)
                                            : selected === dataItem.id && (<div className='Answer'>{dataItem.answer} </div>)
                                    }
                                </div>
                            </div>
                        )
                    }))
                        : (<div className='ErrorMessage'>No Data Found!</div>)
                }
            </div>
        </div>
    )
}
