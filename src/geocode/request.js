const keyApi = require("../config/key.json");

module.export = (req, res, next) => {
  const [street, number, neighborhood, city, state] = req.params.id;

  async(() => {
    const request = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${number}+${street},+${city},+${state}&key=${keyApi}`
    );
  });
};
