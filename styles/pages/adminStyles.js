import { StyleSheet } from "react-native";

export const adminStyles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 100
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#eee',
        opacity: 0.8,
        padding: 20,
        textAlign: 'center',
      },
      cardContainer: {
        // width: '100%',
        // gap: 20,
        // backgroundColor: '#eee',
        // padding: 20,
        paddingVertical: 25,
        zIndex: 1,
        opacity: 0.95,
        paddingHorizontal: 20,
        marginVertical: 4,
        marginBottom: 10,
        gap: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
      },
      card: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      cardText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        padding: 20,
      },
  });