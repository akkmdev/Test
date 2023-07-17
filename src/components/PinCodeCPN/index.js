import React from "react";
import { useState, useEffect } from "react";
import { Text, View, Dimensions, Image } from "react-native";

import PinButtonCPN from "./PinButtonCPN";
import PinDotCPN from "./PinDotCPN";
import PinDeleteCPN from "./PinDeleteCPN";
import TextStateCPN from "./TextStateCPN";
import Components_Touch_ID from "../TouchID/Components_Touch_ID";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

const sizePad = (screenH * 2) / 100;

export default (props) => {
  const [pin, setPin] = useState("");

  useEffect(() => {
    (async () => {
      setPin(props.pin);
    })();
  }, [props.getState]);

  useEffect(() => {
    if (props.pin.length === 0) {
      setPin(props.pin);
    }
  }, [props.pin]);

  const addPin = (tx) => {
    if (pin.length < 6) {
      setPin(pin + tx);
      props.setPin(pin + tx);
    }
  };

  const deletePin = () => {
    if (pin.length > 0) {
      const editedText = pin.slice(0, -1);
      setPin(editedText);
      props.setPin(editedText);
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: (screenH * 2) / 100,
      }}
    >
      <View
        style={{
          marginBottom: (screenH * 2) / 100,
        }}
      >
        <TextStateCPN state={props.getState} />
      </View>
      <View
        style={{
          marginBottom: sizePad,
        }}
      >
        <PinDotCPN pin={props.pin} />
      </View>
      {Array.from({ length: 4 }, () => null).map((v, i) => {
        return (
          <View
            key={"PinCodeCPNRow" + i}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: sizePad,
            }}
          >
            {Array.from({ length: 3 }, () => null).map((vv, ii) => {
              let number = i * 3 + 1 + ii;
              if (number === 11) number = 0;
              return (
                <View
                  key={"PinCodeCPNRowIn" + i + "-" + ii}
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {ii !== 0 ? (
                    <View
                      key={"PinCodeCPNView" + i + "-" + ii}
                      style={{
                        width: sizePad,
                        height: sizePad,
                      }}
                    />
                  ) : null}
                  {number !== 10 && number !== 12 ? (
                    <PinButtonCPN
                      key={"PinCodeCPNnumber" + i + "-" + ii}
                      text={number}
                      onPress={() => {
                        number == 4
                          ? props.setThemeAccive(val=>!val)
                          : number == 5
                          ? addPin(number.toString())
                          : null;
                      }}
                    />
                  ) : null}
                  {number === 10 ? (
                    <Components_Touch_ID
                      onsignup={props.signupvalue}
                    />
                  ) : null}

                  {number === 12 ? (
                    <PinDeleteCPN
                      key={"PinCodeCPNDelete" + i + "-" + ii}
                      onPress={() => {
                        deletePin();
                      }}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
