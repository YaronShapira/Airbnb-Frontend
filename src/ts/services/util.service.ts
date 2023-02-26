export const utilService = {
    makeId,
    getRandomIntInclusive,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    formatTimeAgo,
    capitalize,
    getRandomItemFromArr,
    toggleElement,
}

export function makeId(length: number = 6): string {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function capitalize(string: string): string {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function randomPastTime(): number {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function saveToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key: string): any {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function formatTimeAgo(sentAt: number): string {
    const timestamp = Date.now()
    const seconds = Math.floor(timestamp / 1000)
    const oldTimestamp = Math.floor(sentAt / 1000)

    const difference = seconds - oldTimestamp
    let output = ``
    if (difference < 60) {
        // Less than a minute has passed:
        output = `Just now`
    } else if (difference < 3600) {
        // Less than an hour has passed:
        output = `${Math.floor(difference / 60)} minutes ago`
    } else if (difference < 86400) {
        // Less than a day has passed:
        output = `${Math.floor(difference / 3600)} hours ago`
    } else if (difference < 2620800) {
        // Less than a month has passed:
        output = `${Math.floor(difference / 86400)} days ago`
    } else if (difference < 31449600) {
        // Less than a year has passed:
        output = `${Math.floor(difference / 2620800)} months ago`
    } else {
        // More than a year has passed:
        output = `${Math.floor(difference / 31449600)} years ago`
    }

    return `${output}`
}

function getRandomItemFromArr(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function toggleElement(arr: any[], val: any): any[] {
    return arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val]
}
