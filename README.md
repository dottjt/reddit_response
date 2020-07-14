# Reddit Marketing Automation

This is my Reddit Markting solution.

Although there are a heap of features I can build into it, I would consider it mature in terms of what it aims to achieve. To build those features would be a waste of time in my opinion, compared to the other stuff I could work on.

## How To Run

- You need to use Chrome, because Firefox does not support using files from your local hard disk.
- You need to add the userscript banners to tampermonkey. `src/util/prebanners`
- You need to always have the server running so that it can intercept the messages. `npm run start:prod`
- It's nice to have the UI bundler running as well at the same time, so it can change those scripts when you change the source code `npm run bundle:dev`

## General Flow
- Send user a message on the subreddit
- They get back

## Thoughts
- Send strategy simply appends 5 seconds each time. Does it make sense? Not sure, but it's all I have atm and isn't that bad.

## Improvements

- It would make sense to check if a website OR a subreddit has already been sent to the user before

### Never send a message aka delete

// tracker / nofap tracker
Day 2 above. (maybe ignore this rule for now until I can validate it.)
journal check in flair

## benefits of noFap

- custom shouldn't be middle. It should be entirely separate. correct unique:custom
- If a user appears again in the subreddit, then FLAG that user's post saying that it's been seen before. I'm assuming that the list is chronological from top to bottom, but it also may not be. (it now actually deletes it. Not sure if it's the best approach, but it's better than nothing I suppose)
- If a user hasn't responded, try and get the amount of time since you last spoke to them displayed, so you can know if it's safe to message them again.
- Check to see if I've already sent that person an opening message. If so, don't send that message.
- Also, save the date (user chatted.)
- Maybe for other subreddits, I actually just do the latest 10 users?

- Track the last message you sent, so I don't get lost if there is more than 25 unread. (IMPORTANT)

## Nice To Have

- Track original post as part of the message.
- Flag to see if they've been sent a link or subreddit or yeah. I guess this would check the message being sent and will check for these things. (this would be really smart, I figure. But it's not really necessary.)
- self-update message send status on user once
- When saving the username, it should also save the date of the post, so as backup it can check for any post after that date and mark it. (this is not possible, unless if you're okay with `1 hour ago`)

## DONE

- create verifiable typescript types for messageTypes.
- chokidar only compile file that has been changed, not all files.
- import TrackVisibility from 'react-on-screen'; (so I can use the keyboard to do this, woudl be neat, actually not sure if this is possible because) (I don't think this is via because you can't open a new tab without clicking)
- also highlight key words like website etc. in thehir response. .md containers. (not doing, because it's sending the message automatically)
- automatically send message based on post flair
- automatic reply - if it says link me then just send it automatically.
- Remove users who are yellow and orange :)
- start message wet dreams
- Have option on user to see if user has been chatted to, yet.
- Displays the number of messages from that person the reply page.
- Change some of the reply messages to include fantastic responses, as well as other responses. .
- Talk about self-control in the start message.
- Fix custom messages. How to send one while tracking it, need to rewrite the thing.
- create a function to turn the whole page white if the server isn't running. So always hit the server first.
- Button make Username the marker, so I don't have to do it myself.
- custom message still sends, need to figure that out
- Storing middle messages
- For message/unread show the latest post of that particular user
- I need an option to go up to a username, as well. Not just TimeFRAME
- remove most messages from userpanel
- is hostile button
- user note needs to disappear
- Is it possible to check if a user is in your subreddit? (It is not possible)
- Do you create a think for messages/messages? perhaps, because I can't currently see what I sent in unread, although that will change. (no need atm, at all)
- Okay, I need to have two terminals, one with the custom bundlr, another with the actual server. They affect each other.
- Turn types into strings. (not a huge deal atm)
- Auto close message tabs

### Required Plugins and Dependencies
- Tampermonkey plugin installed
- Insert all the Banners into TamperMonkey
- Ensure the server is running.


## OUTLINE

Reddit Response Plan
(finding users and sending initial messages)
https://www.reddit.com/r/NoFap/new - Where users are found and messages come through
  - It should go through all the messages up until a certain specified point. (DONE)
  - It should add all those usernames up until then into the database. (DONE)
  - Click message and it should open https://www.reddit.com/message/compose/ (DONE)

(sending messages)
https://www.reddit.com/message/compose/
  - It should automatically send message to database when clicked from https://www.reddit.com/r/NoFap/new (DONE)
  - If manual, it should send it as well when (DONE)

https://www.reddit.com/message/inbox
  - It should traverse through all the messages and add them to the database. (DONE)
  - It should add messages to the database that are sent by the user. (DONE)


<!-- REDDIT MARKETING AUTOMATION -->
So, I think I had an idea for a database.

But essentially here is how I imagine it would work.

- On reddit you would copy a username to the clipboard.
- Hammerspoon would read the clipboard, and then do a search in the database.
- When sending a message, it should input into the database, what was sent to them.

##
- Tamper monkey would run in the browser. It will grab all the usernames on a page.
	- It will then save them in a database, including the text of the

## Official Process.
- Scroll until you reach desired date. (maybe script/chrome plugin)
-

## Technical Notes

- `knex migrate:make users -x ts`
- `npx knex seed:make user_myself -x ts`

### Check Usernames Initially `tampermonkey/checkUsernames`
- Scroll through page, find specified date
- Get all usernames
- Check them against the database.

// get all snippets from the past. YUS.

## ENV

ENV=PROD

// important
https://stackoverflow.com/questions/49509874/how-to-update-tampermonkey-script-to-a-local-file-programmatically