import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AuthBg from "../assets/images/authBg.jpg";

export function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={AuthBg} style={styles.image}>
        <View style={styles.form}>
          <View style={styles.addPhoto}>
            <TouchableOpacity>
              <Text>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={{ marginBottom: 16 }}>
            <TextInput style={styles.input} placeholder="Логін"></TextInput>
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            ></TextInput>
          </View>
          <View style={{ position: "relative", marginBottom: 43 }}>
            <TextInput style={styles.input} placeholder="Пароль"></TextInput>
            <TouchableOpacity style={styles.showPassBtn}>
              <Text
                style={{ fontFamily: "Roboto", fontSize: 16, color: "#1B4371" }}
              >
                Показати
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Зареєструватись</Text>
          </TouchableOpacity>
          <Text style={{ fontFamily: "Roboto", fontSize: 16 }}>
            Вже є акаунт? Увійти
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
    width: 375,
  },
  form: {
    position: "relative",
    width: 375,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    width: 343,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -60,
    left: 128,
  },
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
