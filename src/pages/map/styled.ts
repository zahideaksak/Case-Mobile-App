import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  btnCreate: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
    backgroundColor: '#ee5426',
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnCreate: {
    color: '#fff',
    fontSize: 16,
  },
});
