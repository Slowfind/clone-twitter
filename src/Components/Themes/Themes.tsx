import { Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Classes } from '../../interfaces'
import { fetchTheme } from '../../store/ducks/themes/actionCreators'
import { selectIsLoading, selectThemesItems } from '../../store/ducks/themes/selectors'
import { Loader } from '../Loader/Loader'

export const Themes: React.FC<Classes> = React.memo(({ classes }: Classes) => {
    const themes = useSelector(selectThemesItems)
    const isLoading = useSelector(selectIsLoading)
    // const isLoaded = useSelector(selectIsLoaded)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchTheme())
    }, [dispatch])

    // if (!isLoaded) {
    //     return null
    // }

    return (
        <div className={classes.box}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Typography className={classes.listTitle} variant="h6">
                        <strong>Актуальные темы</strong>
                    </Typography>
                    <ul className={classes.listReset}>
                        {themes.map((theme) => (
                            <li key={theme._id} className={classes.listItem}>
                                <Link to={`/home/search?q=${theme.name}`}>
                                    <span className={classes.tweetsName}>{theme.name}</span>
                                    <span className={classes.tweetsNickName}>Твитов: {theme.count}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
})
