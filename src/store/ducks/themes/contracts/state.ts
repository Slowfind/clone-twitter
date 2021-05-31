export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Theme {
    _id: string | number
    name: string
    count: number
}

export interface ThemesState {
    items: Theme[]
    loadingState: LoadingState
}
