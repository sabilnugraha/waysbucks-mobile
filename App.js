import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider} from "native-base";
import { UserContextProvider } from "./src/context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();
const Stack = createStackNavigator();
import Container from "./Container";

export default function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={client}>
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
    </QueryClientProvider>
    </UserContextProvider>
  );
} 