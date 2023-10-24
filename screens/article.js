import React from "react";
import Separator from "../components/separator";
import Button from "../components/button";
import { Image, ScrollView, Text } from "react-native";
import { Box } from "@gluestack-ui/themed";

const Article = () => {
  const buttonHandler = () => {
    // Tambahkan logika ketika tombol ditekan
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://ce.ittelkom-sby.ac.id/wp-content/uploads/2020/09/WhatsApp-Image-2018-04-18-at-11.47.40-AM-1024x564-1.png",
        }}
        style={{
          height: 100,
          resizeMode: "contain",
          marginVertical: 15,
        }}
      />
      <Box style={{ paddingHorizontal: 15, paddingVertical: 20, backgroundColor: "#eeeeee" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya
        </Text>
      </Box>
      <Box style={{ padding: 15 }}>
        <Image
          source={{
            uri: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
          }}
          style={{
            height: 220,
            resizeMode: "contain",
          }}
        />
        <Separator height={10} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>Surabaya, Oktober 2022</Text> -
          Ada sebuah sebutan baru-baru ini yang kerap dilemparkan pada mereka
          yang lahir pada tahun 2000-an, generasi strawberi. Pelabelan ini
          dikarenakan generasi sebelumnya (Boomers dan X) menilai generasi muda
          lunak dan mudah terluka seperti buah strawberi.
        </Text>
        {/* Tambahkan teks-teks lainnya */}
        <Separator height={10} />
        <Text style={{ fontWeight: "bold" }}>OCTOBER 12, 2023 </Text>
        <Separator height={10} />
        <Box style={{ backgroundColor: "gray", height: 1 }} />
        <Separator height={20} />
        <Button text="Share" onPress={buttonHandler} />
        <Separator height={70} />
      </Box>
    </ScrollView>
  );
};

export default Article;
