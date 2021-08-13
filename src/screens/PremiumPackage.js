import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";

import * as Constants from "../helpers/constants";
import * as PremiumPackageConstants from "../helpers/premiumPackage";
import * as ReferFriendsConstants from "../helpers/referFriends";

import Footer from "../components/home/Footer";
import Header from "../components/premiumPackage/Header";
import PremiumRules from "../components/premiumPackage/PremiumRules";

import {premiumPackageRules } from "../DummyData/Data"

const PremiumPackage = () => {

  return (
    <View>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/bg.jpg")}
      />

      <Header />

      <View
        style={[PremiumPackageConstants.mainLogoView, Constants.CommonStyle]}
      >
        <Image
          style={PremiumPackageConstants.mainLogoImg}
          source={require("../../assets/images/pkglogo.png")}
        />
        <Text style={PremiumPackageConstants.membershipViewText}>
          Gold Membership
        </Text>
        <View
          style={[
            ReferFriendsConstants.referFriendsViewLine,
            { top: "12.8rem" },
          ]}
        ></View>

        <PremiumRules premiumPackageRules={premiumPackageRules} />
      </View>

      <View
        style={[
          PremiumPackageConstants.membershipButtonView,
          Constants.CommonStyle,
        ]}
      >
        <TouchableOpacity style={PremiumPackageConstants.buttonTouch}>
          <Text style={PremiumPackageConstants.buttonTouchText}>
            GET THIS PACKAGE
          </Text>
        </TouchableOpacity>
        <Image
          style={[PremiumPackageConstants.dots]}
          source={require("../../assets/images/membershipdots.png")}
        />
      </View>

      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default PremiumPackage;
