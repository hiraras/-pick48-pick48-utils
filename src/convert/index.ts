export const getJsonData = (data: unknown) => {
  try {
    if (typeof data === 'string' && data.length) {
      return JSON.parse(data);
    }
    return data;
  } catch (e) {
    console.log('getJsonData error', e);
  }
  return null;
};
