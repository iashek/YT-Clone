import React, { Component } from 'react'
import Comment from './Comment';

const commentsData = [
    {
        name: "Abhishek Singh",
        text: "demo comment 1",
        replies: [],
    },
    {
        name: "Abhishek Singh",
        text: "demo comment 2",
        replies: [
            {
                name: "Abhishek Singh",
                text: "demo comment 1",
                replies: [],
            },
            {
                name: "Abhishek Singh",
                text: "demo comment 1",
                replies: [
                    {
                        name: "Abhishek Singh",
                        text: "demo comment 1",
                        replies: [],
                    },
                    {
                        name: "Abhishek Singh",
                        text: "demo comment 1",
                        replies: [],
                    },
                    {
                        name: "Abhishek Singh",
                        text: "demo comment 1",
                        replies: [],
                    }
                ],
            }
        ],
    },
    {
        name: "Abhishek Singh",
        text: "demo comment 3",
        replies: [],
    },
    {
        name: "Abhishek Singh",
        text: "demo comment 4",
        replies: [],
    },
];

const CommentList = ({comments}) => {
    return (
        comments.map((comment, index) =>
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
        )
    );
};

const CommentsContainer = () => {
  return (
    <div className='m-4 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentList comments={commentsData} />
        <Comment data={commentsData[0]}/>
    </div>
  )
}

export default CommentsContainer