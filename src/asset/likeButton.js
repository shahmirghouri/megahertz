
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Boton = () => {
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  console.log(estado);

  return (
    <View>
      <TouchableOpacity onPress={() => agregarFavoritos()}>
       <View style={{
                borderRadius: 15,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: estado
                  ? 'rgba(227, 210, 252, 1)'
                  : 'rgba(0,0,0,0.15)',
              }}>
                 <MaterialCommunityIcons
                        name="heart"
                        size={18}
                        color={
                        estado ? 'rgba(105, 2, 252, 1)' : 'rgba(0,0,0,0.4)'
                }></MaterialCommunityIcons>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Boton;

