// style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%', 
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#E7DCDA',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    textAlign: 'center',
    borderWidth: 0
  },
  Botao: {
    width: 100,
    height: 30,
    backgroundColor: '#7E8F7F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  botaoText: {
    color: 'white',
  },
  Letras: {
    color: '#fff',
    marginVertical: 30,
    fontSize: 18 
  },
  cadastroText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10, 
  },
  icon: {
    position: 'absolute',
    left: 10
  }
});

export default styles;
