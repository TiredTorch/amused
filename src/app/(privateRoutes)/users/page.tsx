'use client'

import Image from "next/image"
import { Button, SearchIcon, Textfield } from "@components"
import { AppRoutes, ButtonType } from "@types"
import Link from "next/link"

const Page = () => {
    const mock = [
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        },
        {
            id: "229338",
            name: "John Doe",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
            messages: [{
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam voluptate maiores, fugiat minima ut voluptatem impedit quo! Quisquam, ad?" 
            }]
        }
    ]

    return (
        <div
            className="bg-indigo-500 w-9/12 h-4/5 rounded p-4 pb-0 flex flex-col justify-between"
        >
            <div
                className="flex items-center gap-10 px-10 h-1/6"
            >
                <Textfield/>
                <Button type={ButtonType.ICON}>
                    <SearchIcon/>
                </Button>
            </div>
            <div
                className="flex flex-col gap-2 overflow-auto overflow-x-hidden h-5/6"
            >
                {mock.map((user, id) => (
                    <div
                        key={`${user.id}-${id}`}
                        className="bg-cyan-600 flex gap-5 p-2 h-24"
                    >
                        <Link href={`${AppRoutes.FRIENDS}/${user.id}`}>
                        <Image
                            width={200}
                            height={200}
                            src={user.avatar}
                            alt={`${user.name}-avatar-image`}
                            className="w-20 h-20"
                            />
                        </Link>
                        <Link href={`${AppRoutes.CHAT}/${user.id}`}>
                            <div
                                className="w-full overflow-hidden"
                                >
                                <div
                                    className="font-extrabold text-indigo-900 text-xl"
                                    >
                                    {user.name}
                                </div>
                                <div
                                    className="text-indigo-700 overflow-ellipsis"
                                    >
                                    {user.messages.reverse().find(message => message.from === user.id)?.message}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page