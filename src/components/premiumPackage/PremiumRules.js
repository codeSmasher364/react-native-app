import React from "react";

import { Text, View, Image } from "react-native";

import * as Constants from "../../helpers/constants";
import * as PremiumPackageConstants from "../../helpers/premiumPackage";

const PremiumRules = ({ premiumPackageRules }) => {
  return (
    <View
      style={[
        PremiumPackageConstants.membershipRulesView,
        Constants.CommonStyle,
      ]}
    >
      {premiumPackageRules.map((plan) => {
        return (
          <View style={PremiumPackageConstants.membershipRule} key={plan}>
            <Image
              style={PremiumPackageConstants.styles.listIcon}
              source={require("../../../assets/images/listtick.png")}
            />
            <Text style={PremiumPackageConstants.membershipRuleText}>
              {" "}
              {plan}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PremiumRules;
