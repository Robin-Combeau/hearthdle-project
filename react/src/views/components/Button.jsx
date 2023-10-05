import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ label, className, to = '' }) {
    if (to !== '') {
        return (
            <Link to={to}>
                <button className={className}>{label}</button>
            </Link>
        );
    } else {
        return (
            <button className={className}>{label}</button>
        );
    }
}
