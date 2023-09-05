import { Song } from ".";
import { PostType } from "../enums";

export type Post = {
    title: string;
    description: string;
    date: Date;
    authorId: string;
    postContent: Array<PostPart>
}

export type PostPart = {
    type: PostType;
    content: string | File | Song
}