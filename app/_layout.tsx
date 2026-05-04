import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import "../global.css";
import { registerForPushNotificationsAsync } from "../utils/notifications";

export default function Layout() {
  useEffect(() => {
    // Initialize notifications on app start
    const initializeNotifications = async () => {
      try {
        // Request permissions and get token
        const token = await registerForPushNotificationsAsync();
        if (token) {
          console.log("Notification token:", token);
        } else {
          console.log("Failed to get notification permissions");
        }

        // Set up notification listeners
        const notificationListener =
          Notifications.addNotificationReceivedListener((notification) => {
            console.log("Notification received:", notification);
          });

        const responseListener =
          Notifications.addNotificationResponseReceivedListener((response) => {
            console.log("Notification response:", response);
          });

        return () => {
          notificationListener.remove();
          responseListener.remove();
        };
      } catch (error) {
        console.error("Error initializing notifications:", error);
      }
    };

    initializeNotifications();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
