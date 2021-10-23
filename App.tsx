import * as React from "react";
import { useEffect, useState, createContext, useContext } from "react";
import {
  StatusBar,
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Radio,
  Switch,
  ScrollView,
} from "native-base";

const themes = {
  light: {
    background: "emerald.500",
    foreground: "white",
    box: "gray.300",
    text: "black",
    email: "rose.500",
    radioBackground: "emerald",
  },
  dark: {
    background: "muted.800",
    foreground: "white",
    box: "white",
    text: "darkText",
    email: "rose.700",
    radioBackground: "primary",
  },
};

const ThemeContext = createContext(themes);

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const [dataUser, setDataUser] = useState({
    people: [],
  });

  const [filters, setFilters] = useState("all");
  const [switchChecked, setSwitchChecked] = useState(false);

  useEffect(() => {
    if (dataUser.people.length === 0) {
      getDataFromApi();
    }
  }, []);

  const getDataFromApi = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((json) => {
        let data = json.results;
        setDataUser((prevState) => ({
          ...prevState,
          people: data,
        }));
      });
  };

  const handleSwitchDarkMode = (value) => {
    setSwitchChecked(value);
    value === true ? setTheme(themes.dark) : setTheme(themes.light);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <NativeBaseProvider>
        <StatusBar />
        <Box bg={theme.background} borderWidth={1} borderBottomColor="white">
          <HStack display="flex" justifyContent="space-between">
            <Text fontSize="3xl" color="white" px={2} fontWeight="bold">
              Users
            </Text>
            <HStack p={2} space={2}>
              <Switch
                offTrackColor="orange.100"
                onTrackColor="orange.200"
                onThumbColor="orange.400"
                offThumbColor="orange.50"
                size="lg"
                onToggle={handleSwitchDarkMode}
                isChecked={switchChecked}
              />
            </HStack>
          </HStack>
          <Radio.Group
            name="filters"
            defaultValue={filters}
            accessibilityLabel="Choose Filters"
            onChange={(nextValue) => {
              setFilters(nextValue);
            }}
          >
            <HStack space={2} p={2}>
              <Radio value="all" my={1} colorScheme={theme.radioBackground}>
                <Text color="white" px={1}>
                  All
                </Text>
              </Radio>
              <Radio value="female" my={1} colorScheme={theme.radioBackground}>
                <Text color="white" px={1}>
                  Female
                </Text>
              </Radio>
              <Radio value="male" my={1} colorScheme={theme.radioBackground}>
                <Text color="white" px={1}>
                  Male
                </Text>
              </Radio>
            </HStack>
          </Radio.Group>
        </Box>
        <ScrollView bg={theme.background}>
          <VStack space={2} bg={theme.background} px={2} py={3}>
            {dataUser.people
              .filter((person) => {
                if (filters === "female") {
                  return person.gender === filters;
                } else if (filters === "male") {
                  return person.gender === filters;
                } else {
                  return person;
                }
              })
              .map((person, idx) => (
                <HStack
                  key={idx}
                  space={2}
                  p={2}
                  bg={theme.box}
                  borderRadius={8}
                  boxSizing="border-box"
                  width="100%"
                >
                  <Image
                    key={person.login.uuid}
                    source={{
                      uri: `${person.picture.large}`,
                    }}
                    alt={`This is User Picture`}
                    height="100%"
                    borderRadius={5}
                    flex={1}
                  />
                  <Box flex={3} justifyContent="center" height={20}>
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      color={theme.text}
                    >{`${person.name.title} ${person.name.first} ${person.name.last}`}</Text>
                    <Text>{`${person.location.street.number} ${person.location.street.name} ${person.location.state}, ${person.location.country}`}</Text>
                    <Text color={theme.email}>{`${person.email}`}</Text>
                  </Box>
                </HStack>
              ))}
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    </ThemeContext.Provider>
  );
}
