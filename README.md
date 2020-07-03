# Reddit Marketing Automation

## General Flow
- Send user a message on the subreddit
- They get back


## Thoughts
- Send strategy simply appends 5 seconds each time. Does it make sense? Not sure, but it's all I have atm and isn't that bad.

## Improvements

- If a user hasn't responded, try and get the amount of time since you last spoke to them displayed, so you can know if it's safe to message them again.
- Check to see if I've already sent that person an opening message. If so, don't send that message.

## Nice To Have

- Track original post as part of the message.
- Have option on user to see if user has been chatted to, yet.
- Flag to see if they've been sent a link or subreddit or yeah. I guess this would check the message being sent and will check for these things.
- self-update message send status on user once
- Track the last message you sent, so I don't get lost if there is more than 25 unread.

## DONE

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