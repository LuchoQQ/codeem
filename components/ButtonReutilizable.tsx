import React from "react";
import { Text, View } from "react-native";

const ButtonReutilizable: React.FC = ({title}) => {
    return (
        <>
            <View
                style={{
                    backgroundColor: "#fff",
                    paddingVertical: 20,
                    width: 100,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5, // for Android
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: 10
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: 'center' }}>
                    {title}
                </Text>
            </View>
        </>
    );
};

export default ButtonReutilizable;
