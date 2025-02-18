import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

const PhoneInputScreen = () => {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^0\d{9}$/; // Số điện thoại Việt Nam hợp lệ (bắt đầu bằng 0 và có 10 chữ số)
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    setIsValid(validatePhoneNumber(text));
  };

  const handleSubmit = () => {
    if (isValid) {
      Alert.alert('Thông báo', `Số điện thoại bạn nhập là: ${phone}`);
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ. Vui lòng nhập lại.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={[styles.input, !isValid && phone.length > 0 && styles.inputError]}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handlePhoneChange}
        />
        {!isValid && phone.length > 0 && (
          <Text style={styles.errorText}>Số điện thoại không hợp lệ</Text>
        )}
        <TouchableOpacity
          style={[styles.button, (!phone || !isValid) && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!phone || !isValid}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#EBEBEB',
    justifyContent: 'flex-start',
    paddingBottom: 10,
    marginTop: 0,
    paddingTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 5,
    color: '#010101',
  },
  inputError: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F2F3F5',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#aeafb3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneInputScreen;
