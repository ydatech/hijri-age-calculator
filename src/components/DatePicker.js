import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './DatePicker.css'
import moment from 'moment-hijri'
import { A_HIJRI_YEAR } from '../helpers'
const maxDate = new Date()
moment.locale('en-US')
/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
const GeorgianDatePicker = (props) => {
    const { handleUpdateState, gDob } = props

    return (
        <div className="DatePicker">
            {gDob !== null && <p>Date of Birth in Gregorian:</p>}
            <DatePicker
                hintText="Date Of Birth in Gregorian"
                maxDate={maxDate}
                okLabel="Calculate"
                formatDate={(date) => {
                    return moment(date).format('LL')
                }}
                onChange={(date, newDate) => {
                    const today = moment()
                    const dob = moment(newDate)
                    const mYears = today.diff(dob)

                    console.log()
                    const age = (mYears / A_HIJRI_YEAR).toFixed(2)
                    const hDob = dob.format('iMMMM iD, iYYYY')
                    const gDob = dob.format('MMMM D, YYYY')
                    handleUpdateState({
                        gDob: gDob,
                        hDob: hDob,
                        age: age
                    })
                }}

            />
        </div>
    )
}

export default GeorgianDatePicker;