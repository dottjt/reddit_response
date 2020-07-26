import { RegexFiltersMatch } from './regexUtil';
import { SendMessageType } from '../../types/serverTypes';
import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { startAdvice } from '../responses/start';
import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';
import { ConfigType } from '../config';

export const deleteImmediately = {
  shouldDeleteElementImmediately: true,
  sendMessageType: undefined,
  prelimUrl: undefined,
  messageMatch: undefined
};

export const freshUserResponse = (messageType: SendMessageType, messageMatch: RegexFiltersMatch[], compiledUser: CompiledFullUserObject, usernameConfig: ConfigType) => {
  switch(messageType) {
    case SendMessageType.StartAdviceStart: {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStart,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStart, usernameConfig),
        messageMatch
      }
    }

    default: throw new Error(`messageType - ${messageType} does not exist.`);
  }
}