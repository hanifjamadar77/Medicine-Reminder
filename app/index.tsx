import { View, Text, TouchableOpacity, StyleSheet,Animated  } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";
import { useEffect, useRef  } from "react";

export default function Home() {

   const scaleAnim = useRef(new Animated.Value(0.5)).current;

 useEffect(() => {

    // Start scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 80,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      router.replace("/auth");
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return <View style={styles.container}>
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <FontAwesome6 name="medrt" size={74} color="white" />
      </Animated.View>

      <Animated.Text style={[styles.title, { transform: [{ scale: scaleAnim }] }]}>
        MED REMINDER
      </Animated.Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#369e41",
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "white",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
