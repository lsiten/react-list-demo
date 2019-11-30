export function encodeConversation(conversationData) {
  const {
    ending,
    matching,
    hit,
    background_story: backgroundStory,
    ...reset
  } = conversationData;
  const ret = { ...reset };
  const parsedMatching = [];
  for (let i = 0; i < matching.length; i++) {
    if (matching[i].length === 2 && matching[i][0].length && matching[i][1].length) {
      parsedMatching.push(matching[i]);
    }
  }
  ret.matching = JSON.stringify(parsedMatching.length ? parsedMatching : [[[], []]]);
  ret.ending = JSON.stringify(ending);
  ret.background_story = JSON.stringify(backgroundStory);
  ret.hit = JSON.stringify(hit);

  return ret;
}

export function decodeConversation(conversationData) {
  return conversationData;
}
