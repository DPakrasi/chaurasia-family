import {StyleSheet} from 'react-native';

export const flyoutStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
});

export const flyoutTriggerStyles = StyleSheet.create({
  trigger: {
    position: 'relative',
  },
  hamburgerMenuWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  hamburgerMenuItem: {
    width: 30,
    height: 5,
    backgroundColor: 'black',
    marginBottom: 5,
  },
});

export const flyoutItemsStyles = StyleSheet.create({
  menutItems: {
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    fontSize: 20,
  },
  menuLastItem: {
    borderBottomWidth: 0,
  },
});
