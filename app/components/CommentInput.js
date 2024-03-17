import React from "react";
import Image from "next/image";

const CommentInput = () => {
  return (
    <div className="flex bg-white items-start  p-3 sm:p-6 rounded-lg mt-1">
      <Image
        src="/images/man.jpg"
        height={35}
        width={35}
        alt="avatar"
        className="rounded-full"
      />
      <div className="flex-grow flex flex-col px-3">
        <textarea
          className="border-[1px] flex-grow p-2"
          style={{ width: "100%", minHeight: "100px" }}
          placeholder="Add a comment..."
        />
      </div>
      <button className="sm:px-6 px-4 sm:py-3 py-2 bg-indigo-800 text-white rounded-lg sm:text-sm text-[11px]">
        SEND
      </button>
    </div>
  );
};

export default CommentInput;
