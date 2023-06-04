import React, { useState } from "react";

import { StyleSheet, View ,Text,TextInput, TouchableOpacity} from "react-native";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleInput = (value) => {
    if (value === "C") {
      setInput("0");
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(Number.isFinite(result) ? result.toString() : "Error");
    } catch (error) {
      setInput("Error");
    }
  };

  const layout = [
    [
      { inputValue: "7", handler: handleInput },
      { inputValue: "8", handler: handleInput },
      { inputValue: "9", handler: handleInput },
      { inputValue: "/", displayText: "÷", handler: handleInput },
    ],
    [
      { inputValue: "4", handler: handleInput },
      { inputValue: "5", handler: handleInput },
      { inputValue: "6", handler: handleInput },
      { inputValue: "*", displayText: "×", handler: handleInput },
    ],
    [
      { inputValue: "1", handler: handleInput },
      { inputValue: "2", handler: handleInput },
      { inputValue: "3", handler: handleInput },
      { inputValue: "-", handler: handleInput },
    ],
    [
      { inputValue: "0", handler: handleInput },
      { inputValue: ".", handler: handleInput },
      { inputValue: "C", handler: handleInput },
      { inputValue: "+", handler: handleInput },
    ],
    [
      { inputValue: "=", handler: handleCalculate },
    ],
  ];

  return (
  
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput multiline={false} style={styles.input} editable={false}>
        {input}
      </TextInput>
    </View>
    <View style={styles.buttonContainer}>
      {layout.map((rows, index) => (
        <View style={styles.row} key={index}>
          {rows.map((row) => (
            <TouchableOpacity
              key={row.inputValue}
              style={row.style}
              onPress={() => row.handler(row.inputValue)}
            >
              <Text style={styles.buttonText}>
                {row?.displayText ? row.displayText : row.inputValue}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#000",
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 40,
    },
    buttonContainer: {
      flex: 3,
      justifyContent: "space-around",
    },
    inputContainer: {
      height: 160,
      justifyContent: "flex-end",
    },
    button: {
      backgroundColor: "#505050",
      flex: 1,
      padding: 16,
      borderRadius: 38,
      margin: 6,
    },
    input: {
      fontSize: 48,
      color: "#fff",
      textAlign: "right",
    },
    row: {
      flexDirection: "row",
    },
    operatorButton: {
      backgroundColor: "#FF9500",
      flex: 1,
      padding: 16,
      borderRadius: 38,
      margin: 6,
    },
    buttonText: {
      fontSize: 28,
      textAlign: "center",
      color: "#fff",
    },
    calculateButton: {
      backgroundColor: "#FF9500",
      borderRadius: 38,
      padding: 16,
      width: "100%",
    },
  });

export default Calculator;
