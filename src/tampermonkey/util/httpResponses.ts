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

export const sendPostRequest = async (dataPayload: any, urlEndpoint: string): Promise<{ data: any }> => {
  try {
    const response = await fetch(
      `http://localhost:3333${urlEndpoint}`,
      HTTPPOSToptions(dataPayload)
    );
    const json = await response.json();
    return json;
  } catch(error) {
    console.log('Server not started.');
    throw new Error(`${urlEndpoint} - ${error}`);
  }
}