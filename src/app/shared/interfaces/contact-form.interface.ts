import { Reasons } from "../enum";

export interface IContactForm {
    name: string,
    email: string,
    phone?: string,
    reason: Reasons,
    location?: string,
    message: string,
    organization?: string,
    website?: string,
    school?: string
}

