import { Button, OptionsIcon, SendIcon, Textfield } from "@components"
import { ButtonType } from "@types"
import Image from "next/image"

const Page = ({
    params
}: {
    params: {
        userId: string
    }
}) => {
    const meAsMock = {
        userId: "22",
        userImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/John_Doe_Performs_at_Adams_Avenue_Street_Fair_2006.jpg/220px-John_Doe_Performs_at_Adams_Avenue_Street_Fair_2006.jpg"
    }

    const mock = {
        userImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
        userName: "John Doe",
        userId: "229338",
        messages: [
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "229338",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            },
            {
                from: "22",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum unde porro itaque praesentium excepturi accusamus sunt rerum nulla similique?"
            }
        ]
    }

    return (
        <div
            className="w-screen h-full flex flex-col justify-between"
        >
            <div
                className="flex gap-4 items-center bg-cyan-800 justify-between px-10 py-3"
            >
                <Image
                    src={mock.userImage}
                    alt="conversation-user-avatar"
                    width={200}
                    height={200}
                    className="rounded-full w-24 h-24"
                />
                <div
                    className="text-3xl"
                >
                    {mock.userName}
                </div>
                <div>
                    <Button>
                        <OptionsIcon/>
                    </Button>
                </div>
            </div>
            <div
                className="bg-cyan-400 mx-14 flex flex-col gap-5 h-full px-10 overflow-y-auto"
            >
                {mock.messages.map((message, id) => (
                    <div
                        key={`message-${id}`}
                        className="flex gap-2"
                    >
                        <Image
                            src={message.from === mock.userId ? mock.userImage : meAsMock.userImage}
                            alt={`avatar-conversation-${id}`}
                            width={200}
                            height={200}
                            className="min-h-[64px] min-w-[64px] h-16 w-16 rounded-full"
                        />
                        <div
                            className="text-cyan-900"
                        >
                            {`: ${message.message}`}
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="mx-14 px-10 flex gap-10 items-center bg-cyan-400 py-5"
            >
                <Button type={ButtonType.ICON}>
                    <SendIcon/>
                </Button>
                <Textfield/>
            </div>
        </div>
    )
}

export default Page