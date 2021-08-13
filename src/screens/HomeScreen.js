import React from "react";

import { View, Image } from "react-native";
import * as Constants from "../helpers/constants";

import Footer from "../components/home/Footer";
import HomeViews from "../components/home/HomeViews";
import AllExistingMember from "../components/home/AllExistingMember";

// Dummy Data
import { existingMembersData } from "../DummyData/Data";

const HomeScreen = () => {
  return (
    <View>
      <Image
        style={[Constants.styles.backgroundImage]}
        source={require("../../assets/images/homebg.png")}
      />
      <HomeViews />
      <AllExistingMember
        existingMembersData={existingMembersData}
        style={{ height: "30%", top: "62%" }}
      />
      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default HomeScreen;
