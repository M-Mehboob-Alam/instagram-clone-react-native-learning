
export interface IPost { 
    id: string;
    createdAt: string; 
    image?: string; 
    images?: string[]; 
    video?: string; 
    description: string;
    user: IUser;
    noComments: number;
    noLikes: number;
    comments: IComment[];
}
export interface IUser { 
    id: string; 
    username: string; 
    image?: string;
    name: string;
    bio?: string;
    posts?: IPost[];
    website?: string;
}
export interface IComment {
id: string;
comment: string;
user: IUser;
}