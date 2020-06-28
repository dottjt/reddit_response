# Reddit Marketing Automation

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

## Test Plan.

- Start with new users.
- Check that

## Improvements

- Maybe instead of checking time, it should instead check the username. Of course, the issue with that is if the user deletes their thing, then it's pointless.
- For message/unread show the latest post of that particular user
- Draw out the delay. I think I need to use localStorage to keep a timer which continually draws out the amount ot time inbetween delay
- custom message still sends, need to figure that out
- in compose message, stop opening it automatically. it doesn't make sense
- Do you create a think for messages/messages? perhaps, because I can't currently see what I sent in unread, although that will change.
- localstorage in order to store the second volume, it is set on 15 second intervals, so that the messages sent aren't rushed. Tooooo cool bby.
- Storing middle messages
- Checks if that particular user is part of a subreddit.
- Is it possible to check if a user is in your subreddit?

### Required Plugins and Dependencies
- Tampermonkey plugin installed
-


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