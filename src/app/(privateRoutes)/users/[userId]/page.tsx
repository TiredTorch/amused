const Page = ({
    params
}: {
    params: {
        userId: string
    }
}) => {
    return (
        <div>
            friend id: {params.userId}
        </div>
    )
}

export default Page