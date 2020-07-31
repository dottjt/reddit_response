import { CompiledFullUserObject, SendNewMessageSendPayload, SendUserNotePayload, SetMarkerPayload, SetLastMessageInboxUsernamePayload, PopulateReceivedMessagePayloadEXTREME, PopulateReceivedMessagePayload, RecordTextMatchPayload, SetUserLinkPayload } from "../types/tamperMonkeyTypes";
import { UserForumType } from '../types/serverTypes';

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

export const checkUsernames =
  async (dataPayload: { usernames: string[], forum_type: UserForumType }):
    Promise<CompiledFullUserObject[]> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/checkUsernames', '3333');
      return JSONResponse.data.users;
    };

export const populateReceivedMessage =
  async (dataPayload: { message: PopulateReceivedMessagePayload }):
    Promise<CompiledFullUserObject> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/populateReceivedMessage', '3333');
      return JSONResponse.data.compiledUser;
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
  async (dataPayload: { username: string, forum_type: string }):
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

export const recordTextMatch =
  async (dataPayload: RecordTextMatchPayload):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/recordTextMatch', '3232');
      return JSONResponse.data.message;
    };

export const manuallySetUserLinkSent =
  async (dataPayload: SetUserLinkPayload):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/manuallySetUserLinkSent', '3232');
      return JSONResponse.data.message;
    };
