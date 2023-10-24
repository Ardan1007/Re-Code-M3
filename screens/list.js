import { Box } from "@gluestack-ui/themed";
import { useState } from "react";
import { Image, Modal, Pressable, Text, TouchableOpacity, FlatList } from "react-native";

const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
        style={{
          marginTop: 15,
          padding: 15,
          borderBottomColor: "#dddddd",
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            height: 200,
            width: "100%",
          }}
        />
        <Text style={{ fontSize: 18, paddingTop: 10 }}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Box style={{ flex: 1 }}>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Box
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Box
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text>{selectedItem?.title}</Text>
            <Pressable
              onPress={closeModal}
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#2196F3",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Close
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default List;
