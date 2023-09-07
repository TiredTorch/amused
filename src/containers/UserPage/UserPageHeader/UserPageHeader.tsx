'use client'

import Image from "next/image"
import dividerImage from "@assets/divider-music.png"

export const UserPageHeader = () => {
  return (
    <div
        className="flex justify-between items-center flex-col h-1/3 pb-2 shadow-lg"
      >
        <div
          className="p-2 h-2/3 flex items-center gap-4 w-full"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"
            width={100}
            height={100}
            alt="avatar"
            className="min-w-[20%] max-w-[20%] rounded-full border-2 border-black"
          />
          <div
            className="flex flex-col h-full overflow-hidden text-slate-900"
          >
            <span
              className="text-4xl"
            >Username</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, labore numquam vero voluptate porro illo atque incidunt adipisci officia quos nam voluptatem optio officiis eveniet non doloribus suscipit error voluptatum tempora deleniti unde aliquam dolor exercitationem! Et hic quisquam voluptatibus, consequatur recusandae numquam eligendi modi aperiam cupiditate, dignissimos repellat sunt molestias minima officiis, eaque ducimus alias laudantium sed dolorum labore? Sint earum quasi, id ducimus ratione minima? Expedita id vero deserunt cupiditate sed quo eveniet earum fuga sequi tenetur modi, excepturi perferendis voluptas. Ratione obcaecati fuga quam laborum placeat iste perferendis quos omnis molestias quae fugit excepturi dolores rerum, aut, minima harum deleniti aliquid odit soluta? Delectus nostrum, nemo at aspernatur odio ullam magni eligendi veniam voluptas voluptatum, nam doloremque, minima dicta accusantium cupiditate. Quo eius et quae! Consequatur exercitationem asperiores officiis qui explicabo ex veniam animi quidem sit sapiente, autem inventore nam dolorem voluptas soluta incidunt eligendi. Facilis, est officia odit illum omnis deleniti tempore rem? Ut, quos. Eligendi iusto, ipsam cupiditate officiis aut nesciunt molestias iste in inventore ducimus reiciendis, eos esse optio provident nihil consequatur expedita est? Cumque, sunt officiis voluptate natus, quidem suscipit mollitia voluptatem provident sapiente corrupti aut cupiditate neque dignissimos maiores asperiores numquam!</span>
          </div>
        </div>
        <Image
          src={dividerImage}
          alt="divider"
          className="h-1/3"
        />
      </div>
  )
}
