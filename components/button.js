import { TouchableOpacity, Text } from "react-native";

// Functional Component with props
const Button = (props) => {
  return (
    <TouchableOpacity
      backgroundColor="#dddddd"
      padding={15}
      alignItems="center"
      borderRadius={30}
      onPress={props.onPress}
    >
      <Text fontSize={16} textTransform="uppercase" fontWeight="bold">
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
