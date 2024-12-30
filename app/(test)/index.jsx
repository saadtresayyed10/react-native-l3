import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const app = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", color: "#fff", marginTop: "2rem" }}>
        <Link href="/contact">Main App</Link>
      </Text>
    </View>
  );
};

export default app;
