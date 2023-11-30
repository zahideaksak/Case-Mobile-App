import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#efefef',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  textLatLongTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  textLatLong: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 16,
    paddingBottom: 5,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 50,
  },
  iconUpdate: {
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#148000',
    padding: 15,
    marginRight: 10,
  },
  iconDelete: {
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#f90c00',
    padding: 15,
  },
});
