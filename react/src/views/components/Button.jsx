import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Button({ label, className, to = '' }) {

    const navigate = useNavigate();
    if (to !== '') {
        return (
            <button className={className} onClick={() => navigate(to)}>{label}</button>
        );
    } else {
        return (
            <button className={className}>{label}</button>
        );
    }
}
