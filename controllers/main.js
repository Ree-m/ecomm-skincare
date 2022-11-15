module.exports = {
    getIndex: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');

      res.send(
        "hello,api is working "
      );
      
    }
  };
  