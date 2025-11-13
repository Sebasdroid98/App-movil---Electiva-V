import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    paddingVertical: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    textAlign: 'center'
  },

  bar: {
    width: 180,
    height: 15,
    backgroundColor: '#7CFC00',
    borderRadius: 10,
    marginVertical: 5,
  },

  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },

  barsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  smallBar: {
    width: 120,
    height: 15,
    backgroundColor: '#7CFC00',
    borderRadius: 10,
    marginVertical: 6,
  },

  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#333',
  },
});
