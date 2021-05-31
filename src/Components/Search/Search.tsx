import { Input } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/style'
interface classes {
    classes: ReturnType<typeof useHomeStyles>
}
export const Search: React.FC<classes> = ({ classes }: classes) => {
    return (
        <div className={classes.search}>
            <div className={classes.searchWrapper}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <div className={classes.searchBox}>
                    <Input
                        className={classes.searchInput}
                        placeholder="Поиск в твиттере"
                        error
                        inputProps={{ 'aria-label': 'description' }}
                    />
                </div>
            </div>
        </div>
    )
}
