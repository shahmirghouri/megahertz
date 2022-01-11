import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";
import StarRating from "react-native-star-rating";
import TextArea from "@freakycoder/react-native-text-area";
import navigationString from '../../constants/navigationString';
import Dashboard from '../Dashboard/Dashboard'
import { useNavigation } from '@react-navigation/native';

const Review = (props) => {
  const { starRating, onStarRatingPress } = props;
  const navigation = useNavigation();
  return (
    <Modal isVisible={true}>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: 15,

          height: 325,
          width: "90%",
          borderRadius: 16,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            height: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            How was your experience?
          </Text>
          <View style={{ marginRight: 8 }}>
            <StarRating
              maxStars={5}
              starSize={30}
              disabled={false}
              animation="jello"
              rating={starRating}
              fullStarColor="#faec7c"
              emptyStarColor="#faec7c"
              starStyle={{ marginLeft: 8 }}
              selectedStar={(rating) => onStarRatingPress(rating)}
            />
          </View>
          <TextArea
            maxCharLimit={50}
            placeholderTextColor="black"
            exceedCharCountColor="red"
            placeholder={"Write your review..."}
            style={{ height: 150, borderRadius: 16 }}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: "95%",
              borderRadius: 16,
              backgroundColor: "white",
            }}
            onPress = {() => {}}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 50,
                width: "100%",
                borderRadius: 16,
                alignContent: "center",
                justifyContent: "center",
              }}
              colors={["#6902FC", "#6902AA"]}
            >
              <Text
                style={{ color: "white", fontSize: 16, textAlign: "center" }}
              >
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

Review.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string,
};

Review.defaultProps = {
  stars: 5,
  ratings: "Hellooo",
};

export default Review;