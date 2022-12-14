export const shortenAddress = (address, count = 4) => {
  return address.slice(0, count) + "..." + address.slice(-count);
};

export const shortenUsername = (username) => {
  return username.slice(0, username.search("@"));
};
