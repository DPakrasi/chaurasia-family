import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  wrapperFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderColor: '#F2F2F2',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    position: 'relative',
    zIndex: 100,
  },
});
