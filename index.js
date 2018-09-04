/* eslint-disable global-require */
module.exports.wdioTest = async (req, res) => {
  try {
    const { Launcher } = require('webdriverio/build/index');
    const launcher = new Launcher('./wdio.conf');
    launcher.run().then(code => res.send({ status: code }));
  } catch (e) {
    res.status(500).send({ status: -500 });
  }
};
