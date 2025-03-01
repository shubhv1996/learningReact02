import React from 'react'
import Button from './Button'
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="ml-12 mr-2 flex mt-8">
      <div className="flex gap-2 flex-col w-1/2 ml-16 mt-12 overflow-x-scroll">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-between">
            <Button name="VIA SUPPORT CHAT" icon={<MdMessage />} />
            <Button name="VIA CALL" icon={<IoMdCall />} />
          </div>

          <div>
            <Button name="VIA EMAIL FORM" icon={<MdMessage />} />
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div className="relative">
            <label htmlFor="name" className="bg-white absolute -top-3 left-5">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="bg-white absolute -top-3 left-5">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="bg-white absolute -top-3 left-5">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              rows={9}
              className="p-2 border-blac border rounded w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button name="Submit"/>
        </div>
      </div>
      <div className="w-1/2 mr-0 ml-40">
        <img src="./public/contact-us.png" alt="contact-us-img" />
      </div>
    </div>
  );
}

export default ContactForm
