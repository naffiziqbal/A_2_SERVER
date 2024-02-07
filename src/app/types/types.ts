export interface IUser {
    name: string,
    email: string,
    password: string,
    role: string
}

export interface IUserLogin {
    email: string,
    password: string
}

export interface ICAMPAIGN {
    title: string,
    description: string,
    amount: number,
    image: string,
    creatorId: string
}
