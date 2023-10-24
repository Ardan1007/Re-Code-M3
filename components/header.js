import React from "react";
import Button from "./button";
import { Box } from "@gluestack-ui/themed";
import { Image, TouchableOpacity } from "react-native";

const Header = ({ onListPress, onArticlePress, drawer }) => {
  return (
    <Box
      style={{
        backgroundColor: "#AA0002",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginTop: 35,
      }}
    >
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        {/* <Image
          source={require("../assets/menu.png")}
          style={{ width: 18, height: 18 }}
        /> */}
      </TouchableOpacity>
      <Box>
        <Box style={{ flexDirection: "row", marginLeft: 0}}>
          <Image
            source={require("../assets/facebook.png")}
            style={{ width: 36, height: 16, resizeMode: "contain", marginRight: 10 }}
          />
          <Image
            source={require("../assets/youtube.png")}
            style={{ width: 36, height: 16, resizeMode: "contain", marginRight: 10 }}
          />
          <Image
            source={require("../assets/twitter.png")}
            style={{ width: 36, height: 16, resizeMode: "contain", marginRight: 10 }}
          />
          <Image
            source={require("../assets/search.png")}
            style={{ width: 36, height: 16, resizeMode: "contain", marginRight: 10 }}
          />
        </Box>
      </Box>
      <Box style={{ flexDirection: "row", alignItems: "center" }}>
        <Button text="List" onPress={onListPress} />
        <Button text="Article" onPress={onArticlePress} />
      </Box>
    </Box>
  );
};

export default Header;