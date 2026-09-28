export interface ServerSummary {
    id: string
    name: string
    isOnline: boolean
    status: string
    hostName: string
    primaryIpAddress: string
    createdBy: string
    createdDate: Date
    updatedBy: string
    updatedDate?: Date
}