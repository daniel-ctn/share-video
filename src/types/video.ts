export interface Video {
    title: string;
    url: string;
    sharedBy: string;
    upVote: number;
    downVote: number;
    description: string;
}

export interface FVideo extends Video {
    id: string;
}