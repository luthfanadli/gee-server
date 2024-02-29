const ee = require("@google/earthengine");

// input your private key .json here
const privateKey = require("../private-key.json");

class GeeController {
  static async postGee(req, res, next) {
    try {
      const geometry = req.body.features[0].geometry;

      var runAnalysis = function () {
        ee.initialize(
          null,
          null,
          function () {
            const landCover2011 = ee.Image(
              "projects/ee-ramadhan/assets/PL_KLHK_Raster_v1/KLHK_PL_2011_raster_v1"
            );
            const landCover2021 = ee.Image(
              "projects/ee-ramadhan/assets/PL_KLHK_Raster_v1/KLHK_PL_2021_raster_v1"
            );

            res.status(200).json({ landCover2021, landCover2011 });
          },
          function (e) {
            console.error("Initialization error: " + e);
          }
        );
      };

      ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
        console.error("Authentication error: " + e);
      });
    } catch (error) {
      console.error("Error running script:", error);
      res.status(500).json({ error: "Error running script" });
    }
  }
}

module.exports = GeeController;
