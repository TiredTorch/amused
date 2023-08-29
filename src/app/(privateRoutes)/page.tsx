'use client'

import Image from "next/image"

const Page = () => {
    const mock = [
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        },
        {
            from: "223543",
            userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            userName: "John Doe",
            post: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde deserunt aspernatur sed accusamus. Quos ratione molestias optio, illum esse beatae in, repudiandae omnis impedit provident, consequuntur cumque nam? Labore quia praesentium eaque illo sed perspiciatis in obcaecati at ex?"
                }
            ]
        }
    ]

    return (
        <div
            className="w-screen h-screen flex flex-row p-20 gap-10 overflow-y-hidden"
        >
            {mock.map((post, id) => (
                <div
                    key={`${post.from}-${id}`}
                    className="bg-indigo-700 h-full grow-0 shrink-0 rounded-lg basis-2/6 shadow-lg shadow-black"
                >
                    <div
                        className="flex p-5 gap-6 h-1/6"
                    >
                        <Image
                            className="rounded-full h-20 w-20"
                            src={post.userImage}
                            alt={`${post.from}-avatar`}
                            height={200}
                            width={200}
                        />
                        <div
                            className="font-extrabold text-3xl"
                        >
                            {post.userName}
                        </div>
                    </div>
                    <div
                        className="h-5/6 p-4"
                    >
                        a
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Page