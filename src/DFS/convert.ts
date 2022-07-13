interface Data {
  [key: string]: any;
}

const digDeep = (data: Data, keys: string[]): void => {
  const key = keys.shift() + "";
  if (data[key] === undefined) return;
  if (data[key] instanceof Array) {
    data[key].forEach((item: Data) => {
      digDeep(item, [...keys]);
    });
    return;
  }
  if (keys.length === 0) {
    if (data[key] !== undefined) data[key] = "convert";
    return;
  }
  digDeep(data[key], keys);
};

const convert = (data: Data, convertKeys: string[]) => {
  convertKeys.forEach((keyString: string) => {
    const keys = keyString.split(".");
    digDeep(data, keys);
  });
};
export default convert;
