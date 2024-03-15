import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface IProps {
  onPress: () => void; // Add an onPress prop
}

const FlashcardBack = ({ onPress }: IProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}> 
      {/* Use onPress prop when the component is pressed */}
      <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
      <View style={styles.signatureContainer}>
        <Text style={styles.signatureLabel}>Signature</Text>
        <View style={styles.signature} />
      </View>
      <Text style={styles.cvc}>CVC</Text>
    </Pressable>
  );
};

export default FlashcardBack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023047',
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 20,
  },
  cardNumber: {
    fontSize: 18,
    color: '#8ecae6',
    alignSelf: 'center',
    marginTop: 20,
  },
  signatureContainer: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  signatureLabel: {
    fontSize: 10,
    color: '#8ecae6',
    marginBottom: 5,
  },
  signature: {
    width: 120,
    height: 50,
    borderWidth: 1,
    borderColor: '#8ecae6',
    marginTop: 10,
  },
  cvc: {
    fontSize: 16,
    color: '#8ecae6',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
