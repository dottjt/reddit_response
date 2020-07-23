# Reddit Marketing Automation

This is my Reddit Markting solution.

Although there are a heap of features I can build into it, I would consider it mature in terms of what it aims to achieve. To build those features would be a waste of time in my opinion, compared to the other stuff I could work on.

Although this application saves me a tremendous amount of time, the biggest saver is cognitive load. The less I need to think the more I can get done. There will always be plenty of time if you want there to be.

## How To Run

- You need to use Chrome, because Firefox does not support using files from your local hard disk. (BOOOOOOO)
- You need to add the userscript banners to tampermonkey. `src/util/prebanners`
- You need to always have the server running so that it can intercept the messages. `npm run start:prod`
- It's nice to have the UI bundler running as well at the same time, so it can change those scripts when you change the source code `npm run bundle:dev`

## Improvements

- Target the nofap website, not just reddit. Increase your userbase :)

open -a Google\ Chrome --args --disable-web-security --user-data-dir

https://forum.nofap.com/index.php?conversations/add&title=Hey&to=Krishna108&message=Hey%2C%20I%20saw%20your%20post.%20I%27m%20sorry%20to%20hear%20you%27re%20struggling.%0A%0AThe%20main%20thing%20with%20recovery%20is%20to%20focus%20on%20your%20mental%20health.%20Fundamentally%2C%20it%27s%20about%20developing%20the%20awareness%20to%20change%20your%20behaviours%20so%20you%20can%20learn%20to%20develop%20control%20over%20your%20mind.%20Of%20course%2C%20that%27s%20a%20lot%20easier%20said%20than%20done%2C%20which%20is%20why%20it%20requires%20A%20LOT%20of%20practice.%0A%0ADo%20you%20do%20much%20for%20your%20mental%20health%3F%20Like%20meditate%2C%20and%20stuff%3F%20Personally%20I%20do%2010%20minutes%20of%20meditation%20each%20day%20and%20that%27s%20enough%20for%20me.%20I%27ve%20also%20created%20a%20website%20which%20explains%20the%20whole%20process%20of%20overcoming%20porn%20addiction%2C%20if%20you%27re%20interested.%0A&type=start:advice:struggle&timer=10000

## Nice To Have

- Syntax highlight the reply message regex. (I honestly would have zero idea how to do this)
- Look into addressing congratulation messages
- Look into incorporating whether they've been sent the website or not into ReplyUserPanel, so you can have more information from them and what information they require. (might be too much information for no palatable reason)
- in the above/below message, it would be nice to know if the message has been sent inboxMessage (I don't think it's possible to know until after? Well, it's possible but not a massive deal for now)
- Whether a message was sent automatically by the bot or not.
- fix message being sent multiple times because of the eventListener being sent multiple times.
- fix up the inferno renders at the top, they're a bit of a mess, ya'll. / not a huge deal.
- Track original post as part of the message.
- Also, save the date (user chatted)
- If done, remove everything so it takes up less space. (unsure about this one, because they still might be asking a question)
- https://stackoverflow.com/questions/55457646/open-multiple-urls-in-same-new-tab-javascript
- Fortify DONE with website links send/visited

## DONE

- Not just toRemove, but I need a filter which nullifies positive case i.e. New to NoFap then don't delete.
- need to refactor the regex patterns into logical groups, as well as create certain
- Don't delete the last user post if it's the last one.
- Save last ago date if you cannot find the username.
- Remove did this count as relapse posts if I'm not addressing them (I made this into it's own message :))
- split up filter, for sure.
- Send Final BANNER is not correct, please align with how it's being done in the filters. It will show purely if it's middle, but the use has only sent a start, which is wrong. (all works now, yay!)
- Should show DONE if they have EVER received a final message. Period.
- Message compose page to have an inferno render in order to set user as hostile.
- Did I just relapse or not? MESSAGE If you have to ask, then generally yes. Although
- when does it get easier - It gets easier once you learn to develop control over your mind. // MESSAGE
- in replyFilter configure it so that user:start:reply can allow me to send users the right messages
- print the list of all the titles which were deleted.
- print the post title under the a-link, so I can validate them.
- make all those a links at the top inferno renders.
- Clean up and modularise codebase, it's a bit of a mess atm from the amount of work that's gone into it. Like, a huge mess.
- track user message types
- If a user hasn't responded, try and get the amount of time since you last spoke to them displayed, so you can know if it's safe to message them again. (no longer valid because I don't show the user, but maybe in future) - I do this, yes.
- Maybe for other subreddits, I actually just do the latest 10 users? (just makes sense to input a username into the config file, although this sounds like a lot of work. Well, it's not actually, but CBF) (I just ad it)
- When saving the username, it should also save the date of the post, so as backup it can check for any post after that date and mark it. (this is not possible, unless if you're okay with `1 hour ago`) (didn't bother, pointless)
- self-update message send status on user once (it simply deletes the 2nd message)
- Flag to see if they've been sent a link or subreddit or yeah. I guess this would check the message being sent and will check for these things. (this would be really smart, I figure. But it's not really necessary.)
- Think of follow up strategies. For example, you send them a start message. Then they relapse. Send a follow up message instead.
- Track the last message you sent, so I don't get lost if there is more than 25 unread. (IMPORTANT)
- If a user appears again in the subreddit, then FLAG that user's post saying that it's been seen before. I'm assuming that the list is chronological from top to bottom, but it also may not be. (it now actually deletes it. Not sure if it's the best approach, but it's better than nothing I suppose)
- It would make sense to check if a website OR a subreddit has already been sent to the user before
- custom shouldn't be middle. It should be entirely separate. correct unique:custom
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


### SQL NOTES

// since it's not efficient to get it all within the one query, what you can do instead is to get a list of all messages of x type and retrieve the username, then update all those usernames.

website_homepage_link_sent
subreddit_link_sent
discord_link_sent
podcast_link_sent

select username_receiving from messages where messages.text LIKE "%https://neverfapdeluxe%";

// NOTE: This works well.
UPDATE users
SET website_homepage_link_sent = 1
WHERE EXISTS (SELECT *
                  FROM messages
                  WHERE (messages.username_receiving = users.username)
                  AND (messages.text LIKE "%https://neverfapdeluxe%"));

UPDATE users
SET podcast_link_sent = 1
WHERE EXISTS (SELECT *
                  FROM messages
                  WHERE (messages.username_receiving = users.username)
                  AND (messages.text LIKE "%https://castbox.fm%"));



UPDATE Table_1
SET Field3 = (SELECT Field3
              FROM Table_2
              WHERE (Table_1.Field1 = Table_2.Field1)
                AND (Table_1.Field2 = Table_2.Field2))
WHERE EXISTS (SELECT *
              FROM Table_2
              WHERE (Table_1.Field1 = Table_2.Field1)
                AND (Table_1.Field2 = Table_2.Field2));