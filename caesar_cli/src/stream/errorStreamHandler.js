exports.errorStreamHandler = (error) => {
  if (error) {
    console.error(error);
    process.exit(9);
  }
};