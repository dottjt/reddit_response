import { CompiledFullUserObject, SendNewMessageSendPayload, PopulateReceivedMessagesPayload } from "../../types/tamperMonkeyTypes";

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

const sendPostRequest = async (dataPayload: any, urlEndpoint: string): Promise<{ data: any }> => {
  try {
    const response = await fetch(
      `http://localhost:3333${urlEndpoint}`,
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
      const JSONResponse = await sendPostRequest(dataPayload, '/checkUsernames');
      return JSONResponse.data.users;
    };


export const populateReceivedMessages =
  async (dataPayload: { messages: PopulateReceivedMessagesPayload[] }):
    Promise<string> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/populateReceivedMessages');
      return JSONResponse.data.message; // basically a success message.
    };

export const sendNewMessage =
  async (dataPayload: SendNewMessageSendPayload):
    Promise<CompiledFullUserObject[]> => {
      const JSONResponse = await sendPostRequest(dataPayload, '/sendNewMessage');
      return JSONResponse.data.users;
    };

