const transformData = (data) => {
  let out = [];

  return Object.keys(data).map((key) => {
    // check if data is clean and return an age / fullname object
    // otherwise return an object with invalid values which will be
    // ignored during the rendering
    if (
      data[key]?.age === undefined ||
      data[key]?.firstName === undefined ||
      data[key]?.lastName === undefined
    ) {
      return {
        age: -1,
        fullname: 'N/A',
      };
    }
    return {
      age: data[key]?.age || -1,
      fullname: `${data[key]?.firstName} ${data[key]?.lastName}` || 'N/A',
    };
  });
};

const generateStyle = (themeProvider, color?: string, font?: string) => {
  return {
    color: themeProvider.getColor(color || ''),
    fontFamily: themeProvider.getFont(font || ''),
  };
};

export { transformData, generateStyle };
