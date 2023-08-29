import { Button, OptionsIcon } from "@components"
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
        <div>
            <div>
                <Image
                    src={mock.userImage}
                    alt="conversation-user-avatar"
                    width={200}
                    height={200}
                />
                <div>
                    {mock.userName}
                </div>
                <Button>
                    <OptionsIcon/>
                </Button>
            </div>
            <div>
                {mock.messages.map((message, id) => (
                    <div
                        key={`message-${id}`}
                    >
                        <Image
                            src={message.from === mock.userId ? mock.userImage : meAsMock.userImage}
                            alt={`avatar-conversation-${id}`}
                            width={200}
                            height={200}
                        />
                        <div>
                            {message.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page