import React from "react";

import { Text, View, Image } from "react-native";
import * as Constants from "../helpers/constants";
import * as SettingConstants from "../helpers/settingConstants";

import Footer from "../components/home/Footer";
import SelectSetting from "../components/setting/SelectSetting";

import {
  firstSelectData,
  memberPreference,
  preferredPreference,
} from "../DummyData/Data";

const Setting = () => {
  return (
    <View>
      <Image
        style={[Constants.styles.backgroundImage]}
        source={require("../../assets/images/bg.jpg")}
      />
      <View
        style={[
          SettingConstants.headerSelectView,
          SettingConstants.styles.headerSelectView,
        ]}
      >
        <Image
          style={SettingConstants.styles.arrowLeft}
          source={require("../../assets/images/arrowleft.png")}
        />
        <Text style={SettingConstants.headerText}>Preferences</Text>
      </View>
      <View style={[SettingConstants.selectViewMain, Constants.CommonStyle]}>
        <SelectSetting firstSelectData={firstSelectData} />
      </View>
      <Text
        style={[
          SettingConstants.selectMemberText,
          { position: "absolute", top: "15rem" },
        ]}
      >
        Member Preferences
      </Text>
      <View
        style={[
          SettingConstants.selectMemberPreferenceView,
          Constants.CommonStyle,
          { top: "18rem" },
        ]}
      >
        <SelectSetting firstSelectData={memberPreference} />
      </View>

      <View style={[SettingConstants.selectMemberTextView, { width: "95%" }]}>
        <Text style={SettingConstants.selectMemberText}>
          Preferred Preferences
        </Text>
        <Text style={SettingConstants.selectMemberTextRed}>
          Upgrade for access
        </Text>
      </View>

      <View
        style={[
          SettingConstants.selectMemberPreferenceViewTwo,
          Constants.CommonStyle,
          { top: "40.5rem" },
        ]}
      >
        <SelectSetting firstSelectData={preferredPreference} />
      </View>
      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default Setting;
