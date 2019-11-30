export default function parseResource(str) {
  const baseResource = {
    sceneBGList: [],
    NPCList: [],
    character: []
  };
  let parsed = {};
  let ret;
  try {
    parsed = str ? JSON.parse(str) : baseResource;
  } finally {
    ret = { ...baseResource, ...parsed };
  }
  return ret;
}
