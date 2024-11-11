import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B5B6B',
      fontSize: 16
    },
    input: {
        height: 46,
        backgroundColor: '#1f1E25',
        borderRadius: 7,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    },
    button: {
        width: 46,
        height: 46,
        borderRadius: 7,
        backgroundColor: '#F6A000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#6B5B6B',
      fontSize: 14,
      textAlign: 'center'
    }
  });
  