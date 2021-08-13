import React from "react";
import { View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";

import * as HomeConstants from "../../helpers/homeConstants";
import * as Constants from "../../helpers/constants";

const Banner = () => {
  const sliderDots = () => {
    const dots = Array.from({ length: 3 }).fill(
      <Text style={[HomeConstants.dotCommonStyle, { fontSize: 50 }]}>.</Text>
    );
    return dots;
  };

  return (
    <>
      <View style={[HomeConstants.kissDateView, Constants.CommonStyle]}>
        <Image
          style={HomeConstants.kissDateImg}
          source={require("../../../assets/images/datekiss.png")}
        />
        <Image
          style={HomeConstants.styles.kissDateImgOverlay}
          source={require("../../../assets/images/datekissoverlay.png")}
        />
        <Text style={HomeConstants.kissDateText}>
          LOREM IPSUM DOLOR SIT <br />
          AMET
        </Text>
      </View>

      {/* Slider Dotes View */}
      <View style={HomeConstants.sliderDotView}>
        <Text
          style={[
            tailwind(`text-black mr-1.5`),
            HomeConstants.styles.dotTextFonts,
          ]}
        >
          .
        </Text>
        {sliderDots()}
      </View>
    </>
  );
};

export default Banner;
