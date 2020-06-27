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
  - It should add messages to the database that are sent by the user. (TODO)



## Test Plan.

- Start with new users.
- Check that




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