import React from "react";
import { FaReply } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import Image from "next/image";

const Comment = ({ avatarSrc, username, date, votes, content, replies }) => {
  // Regular expression to match words starting with @
  const mentionRegex = /@(\w+)/g;

  // Function to replace mentions with styled spans
  const renderContentWithMentions = () => {
    return content.split(mentionRegex).map((text, index) => {
      if (text.match(mentionRegex)) {
        return (
          <span key={index} className="text-blue-500">
            {text}
          </span>
        );
      } else {
        return <span key={index}>{text}</span>;
      }
    });
  };

  return (
    <div>
      <div className="flex items-start p-3 sm:p-6 bg-white rounded-lg mb-5">
        <div className="flex flex-col items-center bg-slate-100 p-2.5 rounded-lg sm:mr-5 mr-3">
          <FaPlus className="text-slate-400 text-xs font-semibold" />
          <p className="text-indigo-700 font-bold py-3 text-base">{votes}</p>
          <FaMinus className="text-slate-400 text-xs font-semibold" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={avatarSrc}
                height={35}
                width={35}
                alt="avatar"
                className="rounded-full"
              />
              <div className="md:flex">
                <p className="font-semibold sm:pl-5 pl-2">{username}</p>
                <p className="text-gray-500 sm:text-base text-xs sm:pl-5 pl-2">
                  {date}
                </p>
              </div>
            </div>
            <div className="flex items-center text-indigo-800 sm:text-base text-sm">
              <FaReply className="font-semibold mr-2.5" />
              <p className="font-semibold">Reply</p>
            </div>
          </div>
          <p className="text-gray-500 pt-3 text-base">
            {renderContentWithMentions()}
          </p>
        </div>
      </div>
      <div>
        {replies.map((comment, index) => (
          <div className="flex" key={index}>
            <div className="flex-grow border-2 border-gray-200 lg:mx-10 md:mx-3 mx-1 sm:mr-0 mr-3"></div>
            <div className="flex items-start p-3 sm:p-6 bg-white rounded-lg mb-5">
              <div className="flex flex-col items-center bg-slate-100 p-2.5 rounded-lg mr-4">
                <FaPlus className="text-slate-400 text-xs font-semibold" />
                <p className="text-indigo-700 font-bold py-3 text-base">
                  {votes}
                </p>
                <FaMinus className="text-slate-400 text-xs font-semibold" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={avatarSrc}
                      height={35}
                      width={35}
                      alt="avatar"
                      className="rounded-full"
                    />
                    <div className="md:flex items-center">
                      <p className="font-semibold sm:pl-5 pl-2">{username}</p>
                      {comment.self && (
                        <p className="bg-indigo-800 text-white text-xs h-4 mx-2 px-1 rounded-sm inline-block">
                          you
                        </p>
                      )}
                      <p className="text-gray-500 sm:text-base text-xs sm:pl-5 pl-2">
                        {date}
                      </p>
                    </div>
                  </div>
                  {!comment.self ? (
                    <div className="flex items-center text-indigo-800 sm:text-base text-sm">
                      <FaReply className="font-semibold mr-2.5" />
                      <p className="font-semibold">Reply</p>
                    </div>
                  ) : (
                    <div className="flex gap-x-5 font-semibold">
                      <div className="flex items-center gap-x-1 text-red-500">
                        <MdDelete />
                        Delete
                      </div>
                      <div className="flex items-center gap-x-1 text-indigo-800">
                        <MdEdit />
                        Edit
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 pt-3 text-base">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
