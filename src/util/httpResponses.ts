import { CompiledFullUserObject, SendNewMessageSendPayload, PopulateReceivedMessagesPayload, SendUserNotePayload, SetMarkerPayload, SetLastMessageInboxUsernamePayload } from "../types/tamperMonkeyTypes";
import { ForumType, ConfigType } from './config';

const HTTPPOSToptions = (data): any => ({
  method: 'POST',
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify({ data }) // body data type must match "Content-Type" header
});

const sendPostRequest = async (dataPayload: any, urlEndpoint: string, port: string): Promise<{ data: any }> => {
  try {
    const response = await fetch(
      `http://localhost:${port}${urlEndpoint}`,
      HTTPPOSToptions(dataPayload)
    );
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch(error) {
    console.log('Server not started.');
    throw new Error(`${urlEndpoint} - ${error}`);
  }
}

export const checkUsernamesFetch =
  async (dataPayload: { usernames: string[] }):
    Promise<CompiledFullUserObject[]> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/checkUsernames', '3333');
      return JSONResponse.data.users;
    };

export const populateReceivedMessages =
  async (dataPayload: { messages: PopulateReceivedMessagesPayload[] }):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/populateReceivedMessages', '3333');
      return JSONResponse.data.message; // basically a success message.
    };

export const sendNewMessage =
  async (dataPayload: SendNewMessageSendPayload):
    Promise<CompiledFullUserObject[]> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/sendNewMessage', '3333');
      return JSONResponse.data.users;
    };

export const sendNewUserNote =
  async (dataPayload: SendUserNotePayload):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/sendNewUserNote', '3333');
      return JSONResponse.data.message;
    };

export const markUserHostile =
  async (dataPayload: { username: string }):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/markUserHostile', '3333');
      return JSONResponse.data.message;
    };

export const markUserChatted =
  async (dataPayload: {}):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/markUserChatted', '3333');
      return JSONResponse.data.message;
    };

export const latestUnreadMessagesInformation =
  async (dataPayload: { username: string }):
    Promise<CompiledFullUserObject> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/latestUnreadMessagesInformation', '3333');
      return JSONResponse.data.user;
    };

export const setMarker =
  async (dataPayload: SetMarkerPayload):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/setMarker', '3333');
      return JSONResponse.data.message;
    };

export const setLastInboxMessageUsername =
  async (dataPayload: SetLastMessageInboxUsernamePayload):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/setLastInboxMessageUsername', '3333');
      return JSONResponse.data.message;
    };

export const checkServerRunning =
  async ():
    Promise<CompiledFullUserObject> => {
      const JSONResponse = await sendPostRequest({}, '/checkServerRunning', '3333');
      return JSONResponse.data.isRunning;
    };


export const updateCastboxLinks =
  async (dataPayload: { castboxLinks: any }):
    Promise<CompiledFullUserObject> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/updateCastboxLinks', '3232');
      return JSONResponse.data.isRunning;
    };
