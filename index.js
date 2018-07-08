require('dotenv').config();

const snoowrap = require('snoowrap');
const snoostorm = require('snoostorm');

console.log("Bot has started");

const r = new snoowrap({
    userAgent: 'folly-bot',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
})

const client= new snoostorm(r);

// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'testingground4bots',
    results: 25
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    if (comment.body === ':(') {
        comment.reply(':)');
        console.log("Successful Reply");
    }
});
