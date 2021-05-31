import axios from 'axios'
import { ThemesState } from '../../store/ducks/themes/contracts/state'

export const ThemeApi = {
    fetchTheme(): Promise<ThemesState['items']> {
        return axios.get('/themes').then(({ data }) => data)
    },
}
