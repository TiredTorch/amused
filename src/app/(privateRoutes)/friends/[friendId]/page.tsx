const Page = ({
    params
}: {
    params: {
        friendId: string
    }
}) => {
    return (
        <div>
            friend id: {params.friendId}
        </div>
    )
}

export default Page