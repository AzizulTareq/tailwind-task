import React from "react";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";

export default function Home() {
  const comments = [
    {
      avatarSrc: "/images/man.jpg",
      username: "amyrobson",
      date: "1 month ago",
      votes: 12,
      content:
        "These manmade activities influence all the components of the municipal industrial waste and agricultural practices, increasingly domestic, which cause wastewater, are primary pollutants.",
      replies: [],
    },
    {
      avatarSrc: "/images/man.jpg",
      username: "johnsmith",
      votes: 5,
      date: "2 weeks ago",
      content:
        "These manmade activities influence all the components of the municipal industrial waste and agricultural practices, increasingly domestic, which cause wastewater, are primary pollutants.",
      replies: [
        {
          avatarSrc: "/images/man.jpg",
          username: "johnsmith",
          votes: 5,
          date: "2 weeks ago",
          self: false,
          content:
            "@maxblagun manmade activities influence all the components of the municipal industrial waste and agricultural practices, increasingly domestic, which cause wastewater, are primary pollutants.",
        },
        {
          avatarSrc: "/images/man.jpg",
          username: "johnsmith",
          votes: 5,
          date: "2 weeks ago",
          self: true,
          content:
            "@ramsesmiron manmade activities influence all the components of the municipal industrial waste and agricultural practices, increasingly domestic, which cause wastewater, are primary pollutants.",
        },
      ],
    },
  ];

  return (
    <main className="max-w-3xl m-3">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          avatarSrc={comment.avatarSrc}
          username={comment.username}
          date={comment.date}
          votes={comment.votes}
          content={comment.content}
          replies={comment.replies}
        />
      ))}
      <CommentInput />
    </main>
  );
}
