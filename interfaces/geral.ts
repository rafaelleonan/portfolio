interface TrajectoryItems {
    url: string
    text: string
}

interface TrajectoryHtml {
    type: string
    data: TrajectoryItems[]
    text: string
}

export interface Trajectory {
    text: string
    year: string
    html: TrajectoryHtml[]
}

export interface GenericOption {
    label: string
    value: string
}

export interface LogsLoading {
    local: string
    value: string
}