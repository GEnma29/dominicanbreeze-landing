'use client'
import React, { useState, useEffect } from 'react'
import { setBadUserCookie } from '@/app/actions/cookie'
import Error from '@/components/sections/error'

const ErrorPage = () => {
    const [cookieStatus, setCookieStatus] = useState('pending')

    useEffect(() => {
        const setCookie = async () => {
            if (cookieStatus === 'pending') {
                try {
                    await setBadUserCookie()
                    setCookieStatus('set')
                } catch (error) {
                    console.error('Failed to set cookie:', error)
                    setCookieStatus('error')
                }
            }
        }
        setCookie()
    }, [cookieStatus])
    return (
        <Error />
    )
}

export default ErrorPage