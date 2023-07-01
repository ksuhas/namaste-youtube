import React from 'react'
import CommentsList from './CommentsList';

const commentsData = [
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: []
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: [{
                name: 'Suhas Khulpe',
                text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                replies: [{
                    name: 'Suhas Khulpe',
                    text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                    replies: [{
                        name: 'Suhas Khulpe',
                        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                        replies: [{
                            name: 'Suhas Khulpe',
                            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                            replies: []
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: []
        },]
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: []
        },]
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: []
        },]
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: []
        },]
    },
    {
        name: 'Suhas Khulpe',
        text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
        replies: [{
            name: 'Suhas Khulpe',
            text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
            replies: [{
                name: 'Suhas Khulpe',
                text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                replies: [{
                    name: 'Suhas Khulpe',
                    text: 'I am a fresher and I am able to answer 90% questions, feeling confident',
                    replies: []
                },]
            },]
        },]
    }
]

const CommentsContainer = () => {
    return (
        <div>
            <h1 className='text-lg font-medium mb-2'>Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;
