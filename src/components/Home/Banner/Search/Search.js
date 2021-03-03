
import React,{useState} from 'react'
import classes from './Search.module.css'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range'
import {Button} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

import {useHistory} from 'react-router-dom'

const Search = () => {
    const history = useHistory()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className={classes.search}>
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests 
                <PeopleIcon />
            </h2>
            <input 
                type="number"
                defaultValue={2}
                min={0} 
             />
             <Button
                onClick={() => history.push('/search')}
             >
                 Search Airbnb
             </Button>
        </div>
    )
}

export default Search
