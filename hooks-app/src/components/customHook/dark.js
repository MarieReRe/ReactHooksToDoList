import React, {useState} from 'react';
import ''

const matchDark = '(prefers-color-scheme: dark)'

export default function useDarkMode() {
    const [isDark, setIsDark] = React.useState(
        () => window.matchMedia && window.matchMedia(matchDark).matches
    )
    React.useEffect(() => {
        const matcher = window.matchMedia(matchDark)
        const onChange = ({matches}) => setIsDark(matches)
        .matcher.addListener(onChange)
        return() => {
            matcher.removeListener(onChange)
        }
    }, [setIsDark])
    return isDark
    
}