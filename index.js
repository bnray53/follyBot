require('dotenv').config();

const snoowrap = require('snoowrap');
const snoostorm = require('snoostorm');

console.log("Bot has started");

const r = new snoowrap({
    userAgent: 'desktop:folly_bot:v1.0.0 (by /u/follyBot)',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
})

const client= new snoostorm(r);

// Selecting subreddit, set to all before deployment
const streamOpts = {
    subreddit: 'testingground4bots',
};

// Creating comment stream
const comments = client.CommentStream(streamOpts);

// Program logic
comments.on('comment', (comment) => {
    if (comment.body.includes('where ignorance is bliss')) {
        comment.reply('Did you know the phrase \'Where Ignorance is Bliss\' is actually part of a much larger poem entitled Ode on a Distant Prospect of Eton College http://www.thomasgray.org/cgi-bin/display.cgi?text=odec ');
        console.log("Successful Reply");
    }
});
