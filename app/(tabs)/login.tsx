import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo Card */}
      <View style={styles.logoCard}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Headline */}
      <Text style={styles.title}>
        The only{'\n'}productivity app you need
      </Text>

      {/* Email Button */}
      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailText}>Sign in with Email</Text>
      </TouchableOpacity>

      {/* Social Buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Apple ID</Text>
        </TouchableOpacity>
      </View>

      {/* Terms */}
      <Text style={styles.terms}>
        By continuing you agree to the Terms and Conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logoCard: {
    width: 180,
    height: 180,
    borderRadius: 24,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,

    // shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },

    // shadow (Android)
    elevation: 10,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 34,
  },

  emailButton: {
    width: '100%',
    backgroundColor: '#1E90FF',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },

  emailText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  socialRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 25,
  },

  socialButton: {
    backgroundColor: '#111',
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#222',
  },

  socialText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  terms: {
    color: '#777',
    fontSize: 12,
    textAlign: 'center',
  },
});
