import Image from "next/image"
import dividerImage from "@assets/divider-music.png"
import dayjs from "dayjs"

const Page = () => {
    const mock = {
        userName: "User me",
        userImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
        userDescription: "I like trains",
        posts: [
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            },
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            },
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            },
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            },
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            },
            {
                author: "22",
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg",
                authorName: "User me",
                date: new Date(),
                content: [
                    {
                        type: "text",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid necessitatibus porro a totam ratione provident saepe magni tenetur cupiditate."
                    }
                ]
            }
        ]
    }

    return (
        <div
            className="h-full bg-emerald-950 w-7/12"
        >
            <div
                className="bg-emerald-700 flex justify-start p-7 gap-10 h-1/4"
            >
                <Image
                    src={mock.userImage}
                    alt={`${mock.userName}-avatar`}
                    width={400}
                    height={400}
                    className="w-48 h-48 rounded-full border-4 border-red-950"
                />
                <div>
                    <div
                        className="text-5xl"
                    >
                        {mock.userName}
                    </div>
                    <div
                        className="text-2xl"
                    >
                        {mock.userDescription}
                    </div>
                </div>
            </div>
            <Image
                src={dividerImage}
                alt="divider"
                width={1000}
                height={500}
                className="w-full mb-10 h-[calc(20%-2.5rem)]"
            />
            <div
                className="w-full p-7 flex flex-col gap-10 overflow-auto h-[55%]"
            >
                {mock.posts.map((post, postId) => (
                    <div
                        key={`post-${postId}`}
                        className="w-full bg-slate-600 flex p-4"
                    >
                        <div
                            className="w-1/6 flex flex-col justify-center gap-2"
                        >
                            <Image
                                src={post.authorImage}
                                alt={`postAuthorImage-${postId}`}
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                            <div>
                                <div>
                                    {post.authorName}
                                </div>
                                <div>
                                    {dayjs(post.date).format("DD/MM/YYYY")}
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-5/6"
                        >
                            {post.content.map((postContent, contentId) => (
                                <div
                                    key={`content-${postId}/${contentId}`}
                                >
                                    {postContent.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page